import { faqs } from '../../../data';
import { Action } from '../../ui/Action';
import { Icon } from '../../ui/Icon';
import { Label } from '../../ui/Label';
import { Link } from '../../ui/Link';

export function FAQ() {
  return (
    <section className="section faq-section" data-source="C18" id="faq">
      <aside>
        <Label>FAQ</Label>
        <h2>How It Works</h2>
        <p>If you still have questions, please contact us.</p>
        <Action>Chat on WhatsApp</Action>
      </aside>
      <div className="faq-list">
        {faqs.map(([q, a, n], i) => (
          <details key={q} name="coolcycle-faq">
            <summary>
              <span className="label">0{i + 1}</span>
              <h3>{q}</h3>
              <Icon name="caret-down" />
            </summary>
            <div className="faq-answer">
              <p>{a}</p>
              {n && <p className="fine">{n}</p>}
              {q === 'Where are the hubs?' && <Link href="/hubs/#map">View the hub map</Link>}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}
