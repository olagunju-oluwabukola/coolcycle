import React from 'react';
import { hubs } from '../../../data';
import { HubCards } from './HubCards';
import { RegionalMap } from './RegionalMap';
import { CTA } from '../shared/CTA';
import { whatsappDigits } from '../../../lib/whatsapp';
import { Action } from '../../ui/Action';
import { Copy } from '../../ui/Copy';
import { Label } from '../../ui/Label';
import { PageHero } from '../../ui/PageHero';
import { Photo } from '../../ui/Photo';
import { SectionHead } from '../../ui/SectionHead';

export function HubDetail({ hub: h }) {
  return (
    <>
      <PageHero
        label={'Our hubs / ' + h.type}
        title={h.name}
        description={h.location}
        src={h.image}
        source="C22"
        boxed
        action={
          <Action type={h.type === 'Ice' ? 'ice' : 'cold-storage'}>
            {h.type === 'Ice' ? 'Buy Ice' : 'Book Storage'}
          </Action>
        }
      />
      <section className="section hub-detail" id="hub-information" data-source="C22">
        <aside>
          <Label>Hub information</Label>
          <dl>
            {[
              ['Location', h.location],
              ['Address', h.address],
              ['Type', h.format || h.type],
              ['Capacity', h.capacity],
              ['Temperature', h.temperature],
              ['Power', h.power || 'Solar-powered'],
              ['Services', h.service],
              ['Contact person', h.contact],
              [
                'WhatsApp',
                h.phone && (
                  <a
                    href={'https://wa.me/' + whatsappDigits(h.phone)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {h.phone}
                  </a>
                ),
              ],
              [
                'Map',
                h.mapUrl && (
                  <a href={h.mapUrl} target="_blank" rel="noreferrer">
                    Open in Google Maps
                  </a>
                ),
              ],
            ]
              .filter(([, v]) => v)
              .map(([t, v]) => (
                <React.Fragment key={t}>
                  <dt>{t}</dt>
                  <dd>{v}</dd>
                </React.Fragment>
              ))}
          </dl>
        </aside>
        <div>
          <Label>About this hub</Label>
          <h2>{h.description}</h2>
          <Copy>
            <h3>How to Book</h3>
            <p>Chat with us on WhatsApp, select your location, quantity and preferred dates.</p>
            <div className="actions">
              <Action type={h.type === 'Ice' ? 'ice' : 'cold-storage'}>
                {h.type === 'Ice' ? 'Buy Ice' : 'Book Storage'}
              </Action>
              <Action>Chat on WhatsApp</Action>
            </div>
          </Copy>
          <Photo
            src={h.image}
            alt="Illustrative cooling concept; actual hub photography pending"
            caption="Concept illustration · not an actual hub photograph"
          />
        </div>
      </section>
      <section className="section">
        <RegionalMap items={[h]} selected={h} />
      </section>
      <section className="section">
        <SectionHead label="Our network" title="Explore our other hubs." />
        <HubCards items={hubs.filter((x) => x.slug !== h.slug)} />
      </section>
      <CTA />
    </>
  );
}
