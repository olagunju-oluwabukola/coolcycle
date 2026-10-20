import { ContactForm } from '../components/sections/contact/ContactForm';
import { ContactRoutes } from '../components/sections/contact/ContactRoutes';
import { PartnerTypes } from '../components/sections/partners/PartnerTypes';
import { CTA } from '../components/sections/shared/CTA';
import { PageHero } from '../components/ui/PageHero';

export function ContactPage() {
  return (
    <>
      <PageHero
        label="Contact / Partner"
        title="Send us a message."
        description="Say hello to CoolCycle on WhatsApp to get started."
      />
      <ContactRoutes />
      <ContactForm />
      <PartnerTypes />
      <CTA />
    </>
  );
}
