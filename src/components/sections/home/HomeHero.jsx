import { services } from '../../../data';
import { Action } from '../../ui/Action';
import { Icon } from '../../ui/Icon';
import { Label } from '../../ui/Label';
import { Link } from '../../ui/Link';
import { asset } from '../../../lib/assets';

export function HomeHero() {
  return (
    <section className="home-hero" data-source="C01">
      <img
        className="hero-photo"
        src={asset('hero-cold-room.webp')}
        alt="Concept of a blue solar-powered cold room beside a Nigerian farm at sunset"
        fetchPriority="high"
      />
      <div className="home-hero-copy">
        <h1>
          Keep your harvest
          <br />
          fresh, from farm
          <br />
          to market.
        </h1>
        <p>Solar cold storage, close to your farm.</p>
      </div>
      <div className="hero-bottom">
        <div className="hero-bottom-actions">
          <Label>Store with CoolCycle</Label>
          <div className="actions">
            <Action>Get started</Action>
            <Link href="/how-it-works/">See How It Works</Link>
          </div>
        </div>
        <div className="hero-services">
          <Label>Our services</Label>
          <div className="hero-service-strip">
            {services.slice(0, 3).map((s) => (
              <a key={s.slug} href={'/services/' + s.slug + '/'}>
                <img src={asset(s.image)} alt="" />
                <div>
                  <span>{s.status}</span>
                  <strong>{s.plain}</strong>
                  <Icon />
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
