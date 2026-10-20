import { site } from '../../../data';
import { Action } from '../../ui/Action';
import { Link } from '../../ui/Link';

export function ContactRoutes() {
  return (
    <section className="section contact-routes" data-source="C34">
      <div className="contact-route-grid">
        {[
          ['Farmers & Traders', 'Say hello to CoolCycle on WhatsApp to get started.', 'book'],
          ['Partnerships', 'Tell us how you would like to work together.', 'partner'],
          ['General enquiries', `Email ${site.contactEmail} or call ${site.phone}.`, 'general'],
          ['Visit a hub', 'Find a hub near you.', 'hubs'],
          [
            'Farmer groups and associations',
            'Tell us where your members need cold storage.',
            'hub',
          ],
        ].map(([t, p, a]) => (
          <article key={t}>
            <h3>{t}</h3>
            <p>{p}</p>
            {a === 'hubs' ? (
              <Link href="/hubs/">Find a Hub</Link>
            ) : (
              <Action type={a}>
                {a === 'partner'
                  ? 'Partner with CoolCycle'
                  : a === 'hub'
                    ? 'Tell us where'
                    : 'Get started'}
              </Action>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
