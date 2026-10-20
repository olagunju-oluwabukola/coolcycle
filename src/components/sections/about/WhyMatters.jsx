import { Copy } from '../../ui/Copy';
import { Label } from '../../ui/Label';

export function WhyMatters() {
  return (
    <section className="section why-matters" id="why-this-matters" data-source="C26">
      <div>
        <Label>Why this matters</Label>
        <h2>Too much of every harvest never reaches the market.</h2>
      </div>
      <Copy>
        <p>
          Smallholder farmers in Nigeria often have no cold storage near their farms, and buying a
          cold room is far beyond their means. Diesel generators are costly and polluting. The
          result is spoiled produce, lost income and wasted food. Across Sub-Saharan Africa, up to
          40% of food is lost before it reaches consumers.
        </p>
      </Copy>
    </section>
  );
}
