import { CTA } from '../components/sections/shared/CTA';
import { Pricing } from '../components/sections/shared/Pricing';
import { ServicesCarousel } from '../components/sections/shared/ServicesCarousel';
import { Label } from '../components/ui/Label';
import { Link } from '../components/ui/Link';
import { PageHero } from '../components/ui/PageHero';

export function ServicesPage() {
  return (
    <>
      <PageHero
        source="C10"
        label="Our Services"
        title="Everything your produce needs, from farm to market."
        description="Choose the service that fits how you farm or trade."
        src="cold-room-closeup.webp"
      />
      <ServicesCarousel />
      <Pricing />
      <section className="section service-template-intro" data-source="C12">
        <Label>Cold Storage for Farmers & Traders</Label>
        <h2>Walk-in cold rooms powered by the sun, built close to where you farm and trade.</h2>
        <p>Farmers and traders of fresh produce.</p>
        <p>
          Less spoilage · Keep your produce fresh longer · No equipment to buy · Clean solar power.
        </p>
        <Link href="/services/cold-storage/">Explore Cold Storage</Link>
      </section>
      <CTA />
    </>
  );
}
