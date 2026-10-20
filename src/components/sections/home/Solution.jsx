import { Label } from '../../ui/Label';
import { Link } from '../../ui/Link';
import { useContainerParallax } from '../../../hooks/useContainerParallax';
import { asset } from '../../../lib/assets';

export function Solution({ source = 'C03' }) {
  const container = useContainerParallax();
  return (
    <section className="solution-section" id="solution" data-source={source}>
      <div className="solution-grid">
        <div className="solution-brand">
          <img src={asset('logo-blue.svg')} alt="CoolCycle" />
        </div>
        <div>
          <Label>How CoolCycle helps</Label>
          <h2>A cold room within reach of every farmer.</h2>
          <p>
            Solar cold storage and ice, close to your farm. Book on WhatsApp, drop off, track it,
            collect when you're ready. Sell at a fair price, not in a hurry.
          </p>
        </div>
      </div>
      <div ref={container} className="container-stage">
        <div className="container-parallax-sticky">
          <span className="container-kicker">Solar power. Cold storage.</span>
          <div className="container-parallax-visual">
            <img
              src={asset('container-cutout.webp')}
              alt="Concept render of a solar-powered blue cold-room container"
              loading="lazy"
            />
          </div>
        </div>
      </div>
      <div className="solution-status">
        <div>
          <Label>Available now</Label>
          <p>Cold storage and ice.</p>
        </div>
        <div>
          <Label>Coming soon</Label>
          <p>
            Solar freezers, small cold stops near your farm, and a simple platform to track your
            produce and reach buyers.
          </p>
        </div>
        <Link href="/services/">Explore our services</Link>
      </div>
    </section>
  );
}
