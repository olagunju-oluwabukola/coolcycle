import { Copy } from '../../ui/Copy';
import { Label } from '../../ui/Label';
import { Link } from '../../ui/Link';
import { Photo } from '../../ui/Photo';

export function ColdStops() {
  return (
    <section className="section split-photo" data-source="C04">
      <Photo src="small-cold-stop.webp" alt="Concept of a small solar cold stop near a farm gate" />
      <div>
        <Label>Distributed cold chain / Coming soon</Label>
        <h2>Not every farm needs a big cold room.</h2>
        <Copy>
          <p>
            Small cold stops near the farm gate, so you don't travel far to keep your produce fresh.
          </p>
          <Link href="/services/small-cold-stops/">Small cold stops near you</Link>
          <Link href="/partners/#distributed">Our distributed approach</Link>
        </Copy>
      </div>
    </section>
  );
}
