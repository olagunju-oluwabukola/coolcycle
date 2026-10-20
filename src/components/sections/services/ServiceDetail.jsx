import { hubs } from '../../../data';
import { HubCards } from '../hubs/HubCards';
import { CTA } from '../shared/CTA';
import { Journey } from '../shared/Journey';
import { Pricing } from '../shared/Pricing';
import { ServicesCarousel } from '../shared/ServicesCarousel';
import { Action } from '../../ui/Action';
import { Icon } from '../../ui/Icon';
import { Label } from '../../ui/Label';
import { PageHero } from '../../ui/PageHero';
import { Photo } from '../../ui/Photo';
import { SectionHead } from '../../ui/SectionHead';

export function ServiceDetail({ service: s }) {
  const available = s.status === 'Available';
  return (
    <>
      <PageHero
        source="C12"
        label={'Our services / ' + s.status}
        title={s.slug === 'cold-storage' ? 'Cold Storage for Farmers & Traders' : s.plain}
        description={s.line}
        src={s.slug === 'cold-storage' ? 'hero-cold-room.webp' : null}
        action={<Action type={s.slug}>{s.action}</Action>}
      />
      <section className="section service-detail-layout" data-source="C12">
        <aside>
          <Label>Service details</Label>
          <dl>
            <dt>Status</dt>
            <dd>{s.status}</dd>
            <dt>Who it's for</dt>
            <dd>{s.who}</dd>
            <dt>Available at</dt>
            <dd>{s.available}</dd>
            <dt>Pricing</dt>
            <dd>{s.price}</dd>
          </dl>
        </aside>
        <div>
          <Photo src={s.image} alt={'Illustrative ' + s.plain.toLowerCase() + ' concept'} />
          <div className="service-detail-copy">
            <Label>What it is</Label>
            <h2>{s.what}</h2>
            <div className="detail-two">
              <div>
                <h3>Benefits</h3>
                <ul className="simple-list">
                  {s.benefits.map((b) => (
                    <li key={b}>
                      <Icon name="check" />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3>Why it works</h3>
                <p>{s.why}</p>
              </div>
            </div>
            {s.slug === 'produce-platform' && (
              <p>
                It includes WhatsApp, web platform, booking, inventory, tracking, IoT monitoring and
                data.
              </p>
            )}
            <div className="actions">
              <Action type={s.slug}>{s.action}</Action>
              <Action>Chat on WhatsApp</Action>
            </div>
          </div>
        </div>
      </section>
      {s.slug === 'cold-storage' && <Pricing />}
      {available ? (
        <Journey source="C12" />
      ) : (
        <section className="section future-service">
          <Label>Coming soon</Label>
          <h2>{s.plain}</h2>
          <p>{s.line}</p>
          <div className="facts">
            <div>
              <Label>How it will work</Label>
              <p>
                We will share how this works closer to launch. Message us on WhatsApp to be the
                first to know.
              </p>
            </div>
            <div>
              <Label>Availability</Label>
              <p>{s.available}</p>
            </div>
            <div>
              <Label>Pricing</Label>
              <p>{s.price}</p>
            </div>
          </div>
          <Action type={s.slug}>Ask about this service</Action>
        </section>
      )}
      {s.hubs.length > 0 && (
        <section className="section">
          <SectionHead label="Available hubs" title="Find your nearest hub." />
          <HubCards items={hubs.filter((h) => s.hubs.includes(h.slug))} />
        </section>
      )}
      <ServicesCarousel source="C11" />
      <CTA />
    </>
  );
}
