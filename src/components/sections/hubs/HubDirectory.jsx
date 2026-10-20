import { useState } from 'react';
import { hubCounts, hubs } from '../../../data';
import { HubCards } from './HubCards';
import { RegionalMap } from './RegionalMap';
import { Icon } from '../../ui/Icon';
import { Link } from '../../ui/Link';
import { SectionHead } from '../../ui/SectionHead';

export function HubDirectory() {
  const [filter, setFilter] = useState('All'),
    [search, setSearch] = useState(''),
    [view, setView] = useState('List'),
    [selected, setSelected] = useState(null);
  const items = hubs.filter(
    (h) =>
      (filter === 'All' || h.type === (filter === 'Cold rooms' ? 'Cold room' : 'Ice')) &&
      (h.name + ' ' + h.location).toLowerCase().includes(search.toLowerCase()),
  );
  return (
    <section className="section hub-directory" data-source="C21" id="directory">
      <SectionHead
        label="Hub directory"
        title="Find a CoolCycle Hub"
        description="Search by location or browse our available hubs."
      />
      <div className="directory-tools">
        <div className="filters" aria-label="Filter hubs">
          {['All', 'Cold rooms', 'Ice'].map((t) => (
            <button key={t} aria-pressed={filter === t} onClick={() => setFilter(t)}>
              {t}
            </button>
          ))}
        </div>
        <label className="hub-search">
          <span className="sr-only">Search by location or hub name</span>
          <Icon name="magnifying-glass" />
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search by location"
            type="search"
          />
        </label>
        <div className="view-switch" aria-label="Directory view">
          {['List', 'Map'].map((t) => (
            <button key={t} aria-pressed={view === t} onClick={() => setView(t)}>
              {t}
            </button>
          ))}
        </div>
      </div>
      <p className="fine directory-count" role="status">
        {items.length} {items.length === 1 ? 'hub' : 'hubs'} · {hubCounts.summary} in our network
      </p>
      {view === 'Map' && <RegionalMap items={items} selected={selected} onSelect={setSelected} />}
      <div data-source="C22">
        {items.length ? (
          <HubCards
            items={items}
            onSelect={(h) => {
              setSelected(h);
              setView('Map');
            }}
          />
        ) : (
          <div className="empty-state">
            <h3>No hubs match your search.</h3>
            <p>Try another location or tell us where you farm or trade.</p>
            <button
              className="button"
              onClick={() => {
                setFilter('All');
                setSearch('');
              }}
            >
              Clear filters
              <Icon name="x" />
            </button>
            <Link href="#request">Request a hub</Link>
          </div>
        )}
      </div>
      <div className="map-always" id="map">
        {view === 'List' && (
          <RegionalMap items={items} selected={selected} onSelect={setSelected} />
        )}
      </div>
    </section>
  );
}
