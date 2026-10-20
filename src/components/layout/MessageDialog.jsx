import { useEffect, useRef, useState } from 'react';
import { services, site } from '../../data';
import { Icon } from '../ui/Icon';
import { Label } from '../ui/Label';

export function MessageDialog() {
  const ref = useRef(),
    [data, setData] = useState(null),
    [text, setText] = useState(''),
    [status, setStatus] = useState('');
  useEffect(() => {
    const open = (e) => {
      const d = e.detail;
      setData(d);
      const messages = {
        book: 'Hello CoolCycle! I would like to get started. I am a [farmer / trader] in [location].',
        'cold-storage':
          'Hello CoolCycle! I would like to book storage for [produce], [weight] kg, at [hub], from [date] to [date].',
        ice: 'Hello CoolCycle! I would like to buy [quantity] of ice at [hub] on [date].',
        hub: 'Hello CoolCycle! We need cold storage in [location] for [produce].',
        partner:
          'Hello CoolCycle! I represent [organisation]. We would like to work together on [project].',
      };
      setText(
        d.text ||
          messages[d.type] ||
          `Hello CoolCycle! I would like to ask about ${services.find((s) => s.slug === d.type)?.plain || 'your services'}.`,
      );
      setStatus('');
      ref.current?.showModal();
    };
    window.addEventListener('coolcycle-message', open);
    return () => window.removeEventListener('coolcycle-message', open);
  }, []);
  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setStatus('Message copied. Nothing has been sent.');
    } catch {
      setStatus('Select and copy the message below. Nothing has been sent.');
    }
  }
  function download() {
    const url = URL.createObjectURL(new Blob([text], { type: 'text/plain' }));
    const a = document.createElement('a');
    a.href = url;
    a.download = 'CoolCycle-enquiry.txt';
    a.click();
    URL.revokeObjectURL(url);
    setStatus('Draft downloaded. Nothing has been sent.');
  }
  return (
    <dialog
      ref={ref}
      className="message-dialog"
      onClick={(e) => {
        if (e.target === ref.current) {
          const r = ref.current.getBoundingClientRect();
          if (
            e.clientX < r.left ||
            e.clientX > r.right ||
            e.clientY < r.top ||
            e.clientY > r.bottom
          )
            ref.current.close();
        }
      }}
    >
      <div>
        <div className="dialog-top">
          <Label>Contact CoolCycle</Label>
          <button aria-label="Close message" onClick={() => ref.current.close()}>
            <Icon name="x" />
          </button>
        </div>
        <h2>{data?.type === 'partner' ? 'Partner with CoolCycle' : 'Start on WhatsApp'}</h2>
        <p>
          {site.whatsapp
            ? 'Prepare your message, then continue on WhatsApp.'
            : `WhatsApp: ${site.phone}. Prepare a draft to copy. Nothing has been sent.`}
        </p>
        <label>
          Your message
          <textarea value={text} onChange={(e) => setText(e.target.value)} rows="7" />
        </label>
        <div className="actions">
          <button className="button" onClick={copy}>
            Copy message
            <Icon name="copy" />
          </button>
          <button className="button outline" onClick={download}>
            Download draft
            <Icon name="download-simple" />
          </button>
          {site.whatsapp && (
            <a
              className="button"
              target="_blank"
              rel="noreferrer"
              href={
                'https://wa.me/' +
                site.whatsapp.replace(/\D/g, '') +
                '?text=' +
                encodeURIComponent(text)
              }
            >
              Open WhatsApp
              <Icon name="whatsapp-logo" />
            </a>
          )}
        </div>
        <p className="fine" role="status">
          {status}
        </p>
      </div>
    </dialog>
  );
}
