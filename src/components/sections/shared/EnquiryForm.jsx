import { useRef, useState } from 'react';
import { Icon } from '../../ui/Icon';
import { SuccessDialog } from '../../ui/successDialog';
import { ENQUIRY_TYPES, submitEnquiry } from '../../../lib/api';
import { messageFor, whatsappLink } from '../../../lib/whatsapp';

const ROLES = [
  'Farmer',
  'Trader',
  'Farmer group or association',
  'Aggregator',
  'Seed or input seller',
  'Partner',
  'Investor',
  'Other',
];

// Links such as /contact/?topic=partner#enquiry open the form with "Partner" selected.
const defaultRole = () =>
  new URLSearchParams(window.location.search).get('topic') === 'partner' ? 'Partner' : 'Farmer';

function buildPayload(values, hubRequest) {
  const common = {
    name: values.name.trim(),
    contact: values.contact.trim(),
    consent: true, // the checkbox is required, so the form can't be submitted without it
    website: values.website || '', // hidden spam trap; real visitors leave it empty
  };
  if (hubRequest) {
    return {
      ...common,
      type: ENQUIRY_TYPES.hubRequest,
      location: values.location.trim(),
      produce: values.produce.trim(),
      ...(values.group?.trim() && { group: values.group.trim() }),
    };
  }
  return {
    ...common,
    type: ENQUIRY_TYPES.general,
    role: values.role,
    message: values.message.trim(),
  };
}

export function EnquiryForm({ hubRequest = false }) {
  const form = useRef();
  const [state, setState] = useState({ status: 'idle', message: '' });
  const sending = state.status === 'sending';

  async function submit(e) {
    e.preventDefault();
    if (sending) return;
    const values = Object.fromEntries(new FormData(form.current));
    setState({ status: 'sending', message: '' });
    try {
      await submitEnquiry(buildPayload(values, hubRequest));
      form.current.reset();
      setState({ status: 'success', message: '' });
    } catch {
      setState({
        status: 'error',
        message:
          'Sorry, we could not send your message. Please try again, or message us on WhatsApp.',
      });
    }
  }

  return (
    <form ref={form} className="enquiry-form" onSubmit={submit}>
      <div className="form-pair">
        <label>
          Name
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          {hubRequest ? 'Phone' : 'Email or phone'}
          <input
            name="contact"
            type={hubRequest ? 'tel' : 'text'}
            autoComplete={hubRequest ? 'tel' : undefined}
            required
          />
        </label>
      </div>
      {hubRequest ? (
        <>
          <div className="form-pair">
            <label>
              Location
              <input name="location" required />
            </label>
            <label>
              Produce type
              <input name="produce" required />
            </label>
          </div>
          <label>
            Farmer group or association <span>(optional)</span>
            <input name="group" />
          </label>
        </>
      ) : (
        <>
          <label>
            I am a…
            <select name="role" defaultValue={defaultRole()}>
              {ROLES.map((r) => (
                <option key={r}>{r}</option>
              ))}
            </select>
          </label>
          <label>
            Message
            <textarea name="message" rows="5" required />
          </label>
        </>
      )}
      <div className="sr-only" aria-hidden="true">
        <input name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="consent">
        <input type="checkbox" name="consent" required />
        <span>
          I agree that CoolCycle may store and use my details to respond to my enquiry, in line with
          the Nigeria Data Protection Act (NDPA).
        </span>
      </label>
      <button className="button" type="submit" disabled={sending}>
        {sending ? 'Sending…' : hubRequest ? 'Send hub request' : 'Send message'}
        <Icon />
      </button>
      {state.status === 'error' && (
        <p className="form-status error" role="alert">
          {state.message}{' '}
          <a
            href={whatsappLink(messageFor(hubRequest ? 'hub' : 'book'))}
            target="_blank"
            rel="noreferrer"
          >
            Message us on WhatsApp
          </a>
        </p>
      )}
      <SuccessDialog
        open={state.status === 'success'}
        title={hubRequest ? 'Request received' : 'Message sent'}
        onClose={() => setState({ status: 'idle', message: '' })}
      >
        Thank you. We have received your {hubRequest ? 'hub request' : 'message'} and will be in
        touch.
      </SuccessDialog>
    </form>
  );
}