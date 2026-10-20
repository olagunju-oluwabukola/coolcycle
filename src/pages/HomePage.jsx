import { AudienceCards } from '../components/sections/home/AudienceCards';
import { ColdStops } from '../components/sections/home/ColdStops';
import { HomeHero } from '../components/sections/home/HomeHero';
import { HomeProblem } from '../components/sections/home/HomeProblem';
import { NetworkPreview } from '../components/sections/home/NetworkPreview';
import { Solution } from '../components/sections/home/Solution';
import { CTA } from '../components/sections/shared/CTA';
import { Journey } from '../components/sections/shared/Journey';
import { Reasons } from '../components/sections/shared/Reasons';
import { ServicesCarousel } from '../components/sections/shared/ServicesCarousel';

export function HomePage() {
  return (
    <>
      <HomeHero />
      <HomeProblem />
      <Solution />
      <ColdStops />
      <AudienceCards />
      <Journey source="C06" />
      <ServicesCarousel source="C07" />
      <NetworkPreview />
      <Reasons />
      <CTA />
    </>
  );
}
