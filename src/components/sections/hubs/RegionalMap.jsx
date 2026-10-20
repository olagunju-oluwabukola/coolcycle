
import { useEffect, useState } from 'react';
import { Icon } from '../../ui/Icon';
import { Label } from '../../ui/Label';
import { Link } from '../../ui/Link';

export function RegionalMap({ items, selected, onSelect }) {
  const [activeHub, setActiveHub] = useState(selected || items[0] || null);

  useEffect(() => {
    if (selected) {
      setActiveHub(selected);
    }
  }, [selected]);

  useEffect(() => {
    if (!activeHub && items.length > 0) {
      setActiveHub(items[0]);
    }
  }, [items, activeHub]);

  const handleSelect = (hub) => {
    setActiveHub(hub);
    onSelect?.(hub);
  };

  const address = activeHub?.address || activeHub?.location;

  const mapUrl = address
    ? `https://maps.google.com/maps?q=${encodeURIComponent(address)}&output=embed`
    : '';

  const directionsUrl = activeHub
    ? activeHub.mapUrl ||
      `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(address)}`
    : '';

  return (
    <div className="regional-map">
      <div className="map-panel">
        {activeHub && mapUrl ? (
          <iframe
            key={activeHub.slug}
            title={`Map for ${activeHub.name}`}
            src={mapUrl}
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        ) : (
          <div className="map-placeholder">
            Select a hub to view its location.
          </div>
        )}
      </div>

      <aside className="hub-selector">
        <Label>Our locations</Label>
        <h3>Find a hub near you.</h3>

        <div className="hub-list">
          {items.map((hub) => (
            <button
              type="button"
              key={hub.slug}
              className={
                activeHub?.slug === hub.slug ? 'selected' : ''
              }
              onClick={() => handleSelect(hub)}
            >
              <span>
                <strong>{hub.name}</strong>
                <small>{hub.location}</small>
              </span>
              <Icon name="map-pin" />
            </button>
          ))}
        </div>

        {activeHub && (
          <div className="map-selection" aria-live="polite">
            <h4>{activeHub.name}</h4>
            <p>{address}</p>

            <a
              className="text-link"
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Get directions ↗
            </a>

            <Link href={`/hubs/${activeHub.slug}/`}>
              View hub details
            </Link>
          </div>
        )}
      </aside>
    </div>
  );
}
