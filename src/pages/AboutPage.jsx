import { Credits } from '../components/sections/about/Credits';
import { FullStory } from '../components/sections/about/FullStory';
import { Impact } from '../components/sections/about/Impact';
import { ImpactAreas } from '../components/sections/about/ImpactAreas';
import { Roadmap } from '../components/sections/about/Roadmap';
import { Stories } from '../components/sections/about/Stories';
import { Team } from '../components/sections/about/Team';
import { VisionMission } from '../components/sections/about/VisionMission';
import { WhatWeBuild } from '../components/sections/about/WhatWeBuild';
import { WhyMatters } from '../components/sections/about/WhyMatters';
import { CTA } from '../components/sections/shared/CTA';
import { PageHero } from '../components/ui/PageHero';

export function AboutPage() {
  return (
    <>
      <PageHero
        label="About & Impact"
        title="Every harvest reaches the market fresh."
        description="Our story, our approach and the impact of keeping produce fresh."
        src="farmer-produce.webp"
        boxed
      />
      <FullStory />
      <Roadmap />
      <WhyMatters />
      <WhatWeBuild />
      <VisionMission />
      <Impact />
      <ImpactAreas />
      <Credits />
      <Stories />
      <Team />
      <CTA />
    </>
  );
}
