import { Copy } from '../../ui/Copy';
import { Label } from '../../ui/Label';
import { Link } from '../../ui/Link';

export function HomeProblem() {
  return (
    <section className="section editorial" data-source="C02">
      <Label number="01">Why we built CoolCycle</Label>
      <p className="statement">
        No cold storage near the farm. Produce spoils fast. So farmers sell in a hurry, at whatever
        price they are offered.
      </p>
      <div className="editorial-grid">
        <h2>Too much of every harvest never reaches the market.</h2>
        <Copy>
          <p>
            Smallholder farmers in Nigeria often have no cold storage near their farms, and a cold
            room costs far more than they can afford.
          </p>
          <Link href="/about/#why-this-matters">Why this matters</Link>
        </Copy>
      </div>
    </section>
  );
}
