import { FarmersContent } from '../components/sections/farmers/FarmersContent';
import { CTA } from '../components/sections/shared/CTA';
import { Action } from '../components/ui/Action';
import { PageHero } from '../components/ui/PageHero';

export function FarmersPage() {
  return (
    <>
      <PageHero
        source="C37"
        label="For Farmers & Traders"
        title="Keep your harvest fresh."
        description="Store your produce in a solar-powered cold room near you, and track it from your phone."
        src="trader-market.webp"
        boxed
        action={<Action>Get Started on WhatsApp</Action>}
      />
      <FarmersContent />
      <CTA />
    </>
  );
}
