import { hubs } from '../../../data';
import { Icon } from '../../ui/Icon';
import { Photo } from '../../ui/Photo';

export function HubCards({ items = hubs, onSelect }) {
  return (
    <div className="hub-card-grid">
      {items.map((h) => (
        <article className="hub-card" key={h.slug}>
          <a href={'/hubs/' + h.slug + '/'}>
            <Photo
              src={h.image}
              alt={'Illustrative ' + h.type.toLowerCase() + ' concept; actual hub photo pending'}
              caption="Concept image · actual hub photo pending"
            />
            <div className="hub-card-title">
              <span className="status">{h.type}</span>
              <h3>{h.name}</h3>
              <Icon />
            </div>
          </a>
          <dl>
            <div>
              <dt>Location</dt>
              <dd>{h.location}</dd>
            </div>
            <div>
              <dt>Capacity</dt>
              <dd>{h.capacity}</dd>
            </div>
            <div>
              <dt>Power</dt>
              <dd>{h.power || 'Solar-powered'}</dd>
            </div>
            <div>
              <dt>Services</dt>
              <dd>{h.service}</dd>
            </div>
          </dl>
          {onSelect && (
            <button className="map-link" onClick={() => onSelect(h)}>
              Locate on map
              <Icon name="map-pin" />
            </button>
          )}
        </article>
      ))}
    </div>
  );
}
