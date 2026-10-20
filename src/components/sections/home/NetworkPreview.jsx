import { hubCounts, hubs } from '../../../data';
import { Icon } from '../../ui/Icon';
import { Label } from '../../ui/Label';
import { Link } from '../../ui/Link';

export function NetworkPreview() {
  return (
    <section className="section network-preview" data-source="C08">
      <div className="network-heading">
        <Label>Our network</Label>
        <h2>Find a hub near you.</h2>
        <p>
          We have {hubCounts.total} hubs: {hubCounts.summary}.
        </p>
        <Link href="/hubs/">Find a CoolCycle Hub</Link>
      </div>
      <div className="hub-preview-list">
        {hubs.map((h) => (
          <a href={'/hubs/' + h.slug + '/'} key={h.slug}>
            <div>
              <span className="label">{h.type}</span>
              <h3>{h.name}</h3>
              <p>{h.location}</p>
            </div>
            <Icon />
          </a>
        ))}
        <Link href="/hubs/#request">Not near a hub? Tell us where you farm or trade.</Link>
      </div>
    </section>
  );
}
