import { HubDirectory } from '../components/sections/hubs/HubDirectory';
import { HubRequest } from '../components/sections/hubs/HubRequest';
import { CTA } from '../components/sections/shared/CTA';
import { Link } from '../components/ui/Link';
import { PageHero } from '../components/ui/PageHero';

export function HubsPage() {
  return (
    <>
      <PageHero
        source="C20"
        label="Hubs / Locations"
        title="Cold storage near you."
        description="Find a CoolCycle hub close to your farm. Solar-powered, no diesel."
        action={
          <Link className="button" href="#directory">
            Find a Hub
          </Link>
        }
      />
      <HubDirectory />
      <HubRequest />
      <CTA />
    </>
  );
}
