import { impactNote, network, pilot, targets } from '../../../data';
import { SectionHead } from '../../ui/SectionHead';

export function Impact() {
  return (
    <section className="section impact-section" data-source="C29" id="impact">
      <SectionHead label="Impact dashboard" title="Impact dashboard" />
      <MetricGroup title="From our Epe pilot" items={pilot} />
      <MetricGroup title="Our network today" items={network} />
      <MetricGroup title="Where we are heading: our 24-month targets" items={targets} target />
      <p className="impact-note">{impactNote}</p>
    </section>
  );
}
function MetricGroup({ title, items, target = false }) {
  return (
    <div
      className={'metric-group ' + (target ? 'target-group' : '')}
      id={target ? 'targets' : undefined}
    >
      <h3>{title}</h3>
      <div className="metric-grid">
        {items.map(([v, p]) => (
          <article key={v + p}>
            <strong>{v}</strong>
            <p>{p}</p>
          </article>
        ))}
      </div>
    </div>
  );
}
