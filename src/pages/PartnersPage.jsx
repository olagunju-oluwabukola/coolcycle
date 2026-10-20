import { digital, physical } from '../data';
import { Credits } from '../components/sections/about/Credits';
import { Impact } from '../components/sections/about/Impact';
import { Roadmap } from '../components/sections/about/Roadmap';
import { PartnerTypes } from '../components/sections/partners/PartnerTypes';
import { CTA } from '../components/sections/shared/CTA';
import { Action } from '../components/ui/Action';
import { Copy } from '../components/ui/Copy';
import { Label } from '../components/ui/Label';
import { Link } from '../components/ui/Link';
import { PageHero } from '../components/ui/PageHero';
import { Photo } from '../components/ui/Photo';
import { SectionHead } from '../components/ui/SectionHead';

export function PartnersPage() {
  return (
    <>
      <PageHero
        label="Partner with CoolCycle"
        title="Work with us to keep more food fresh."
        description="CoolCycle is a distributed, solar-powered cold-chain platform."
        src="cold-room-closeup.webp"
        action={<Action type="partner">Partner with CoolCycle</Action>}
      />
      <section className="section editorial">
        <Label>Clean-energy cold chain</Label>
        <h2>Clean-energy cold chain, starting with cold storage for your harvest.</h2>
        <Copy>
          <p>
            CoolCycle is building clean-energy-powered, distributed cold-chain infrastructure. We
            start with affordable, solar-powered cold storage that helps farmers in Nigeria keep
            produce fresh, reduce post-harvest losses, and sell when the time is right.
          </p>
          <p>
            CoolCycle is more than a cold room. We are building infrastructure around the movement,
            preservation and eventual sale of temperature-sensitive goods.
          </p>
          <p>
            A simple digital platform lets you register, book space, store and track your produce.
          </p>
        </Copy>
      </section>
      <section className="section partner-challenges">
        <SectionHead
          label="The challenges"
          title="Too much of every harvest never reaches the market."
        />
        <div className="challenge-grid">
          {[
            'Post-harvest losses',
            'Limited cold storage',
            'Unreliable energy',
            'Fragmented logistics',
          ].map((t) => (
            <h3 key={t}>{t}</h3>
          ))}
        </div>
        <p>
          Smallholder farmers in Nigeria often have no cold storage near their farms, and a cold
          room costs far more than they can afford.
        </p>
      </section>
      <section className="section pathway">
        <SectionHead
          label="Our infrastructure pathway"
          title="Cold Storage → Market Connectivity"
        />
        <ol>
          {[
            'Cold Storage',
            'Ice',
            'Freezing',
            'Micro Cold Chain',
            'Digital Infrastructure',
            'Market Connectivity',
          ].map((t, i) => (
            <li key={t}>
              <span className="label">0{i + 1}</span>
              <h3>{t}</h3>
              <span className={'status ' + (i < 2 ? 'available' : 'soon')}>
                {i < 2 ? 'Available' : 'Coming soon'}
              </span>
            </li>
          ))}
        </ol>
      </section>
      <section className="section split-photo" id="distributed">
        <Photo src="small-cold-stop.webp" alt="Future distributed cooling concept" />
        <div>
          <Label>Distributed Cold Chain</Label>
          <h2>Not every cold-chain problem needs a large cold room.</h2>
          <p>
            Smaller, distributed solutions can extend access to cold-chain infrastructure closer to
            farms, traders and points of production.
          </p>
          <p>
            This is also how CoolCycle fits within the wider productive-use-of-energy ecosystem.
          </p>
        </div>
      </section>
      <section className="section build-section" id="infrastructure">
        <SectionHead
          label="Our Approach"
          title="Physical infrastructure. Digital infrastructure."
        />
        <div className="build-grid">
          <article>
            <Label>Physical layer</Label>
            <h3>Solar-powered cold rooms</h3>
            <p>{physical}</p>
          </article>
          <article>
            <Label>Digital layer</Label>
            <h3>More than a booking system.</h3>
            <p>{digital}</p>
            <span className="status soon">Expansion / Coming soon</span>
          </article>
        </div>
      </section>
      <section className="section editorial">
        <Label>For Partners</Label>
        <h2>Hub access, shared infrastructure and joint projects.</h2>
        <Copy>
          <p>
            Work with CoolCycle to bring cold storage and market access to the farmers in your
            programme or supply chain. Talk to us about hub access, shared infrastructure and joint
            projects.
          </p>
          <p>
            We work with agribusinesses, farmer groups, development programmes, funders and
            technology partners to bring cold storage, ice and digital traceability to the farmers
            in your programme or supply chain.
          </p>
          <Link href="/contact/#partners">Partner with us</Link>
        </Copy>
      </section>
      <PartnerTypes />
      <Impact />
      <Credits />
      <Roadmap />
      <CTA />
    </>
  );
}
