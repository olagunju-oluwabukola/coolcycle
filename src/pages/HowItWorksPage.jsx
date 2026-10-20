import { AudienceGuidance } from '../components/sections/shared/AudienceGuidance';
import { CTA } from '../components/sections/shared/CTA';
import { FAQ } from '../components/sections/shared/FAQ';
import { Journey } from '../components/sections/shared/Journey';
import { PageHero } from '../components/ui/PageHero';

export function HowItWorksPage() {
  return (
    <>
      <PageHero
        source="C13"
        label="How It Works"
        title="Getting started takes minutes, and you don't need to download an app."
        description="Everything happens on WhatsApp, from sign-up to tracking your produce."
      />
      <Journey />
      <AudienceGuidance />
      <FAQ />
      <CTA source="C19" />
    </>
  );
}
