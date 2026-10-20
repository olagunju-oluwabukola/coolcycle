import { Label } from '../../ui/Label';
import { Link } from '../../ui/Link';

export function AudienceGuidance() {
  return (
    <section className="section guidance-grid">
      <article data-source="C15">
        <Label>For Farmers</Label>
        <h2>For Farmers</h2>
        <p>
          Register, book space for your harvest and drop it off. Track it from your phone and
          collect it when you're ready to sell.
        </p>
        <Link href="/farmers/">For Farmers & Traders</Link>
      </article>
      <article data-source="C16">
        <Label>For Traders</Label>
        <h2>For Traders</h2>
        <p>
          Register, book storage for the volume you need, track your stock and collect it when your
          buyers are ready.
        </p>
        <Link href="/farmers/#traders">For Traders</Link>
      </article>
      <article data-source="C17">
        <Label>For Partners</Label>
        <h2>For Partners</h2>
        <p>
          CoolCycle is a distributed, solar-powered cold-chain platform. We work with
          agribusinesses, farmer groups, development programmes, funders and technology partners to
          bring cold storage, ice and digital traceability to the farmers in your programme or
          supply chain.
        </p>
        <p>Talk to us about hub access, shared infrastructure, and joint projects.</p>
        <Link href="/contact/#partners">Partner with us</Link>
      </article>
    </section>
  );
}
