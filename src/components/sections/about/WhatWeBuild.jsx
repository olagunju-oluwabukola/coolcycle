import { digital, physical } from '../../../data';
import { Icon } from '../../ui/Icon';
import { Link } from '../../ui/Link';
import { SectionHead } from '../../ui/SectionHead';

export function WhatWeBuild() {
  return (
    <section className="section build-section" data-source="C27">
      <SectionHead label="What we build" title="Cold you can reach. A platform you can trust." />
      <div className="build-grid">
        <article>
          <Icon name="warehouse" />
          <h3>Cold you can reach</h3>
          <p>
            Solar-powered cold rooms built from retired generator parts, plus ice and small cold
            stops closer to farms.
          </p>
          <p>{physical}</p>
        </article>
        <article>
          <Icon name="device-mobile" />
          <h3>A platform you can trust</h3>
          <p>
            A simple platform, starting on WhatsApp, to book, track and manage your produce. As we
            grow, it will connect farmers to buyers.
          </p>
          <p>{digital}</p>
          <span className="status soon">Platform expansion / Coming soon</span>
        </article>
      </div>
      <Link href="/partners/#infrastructure">Our infrastructure approach</Link>
    </section>
  );
}
