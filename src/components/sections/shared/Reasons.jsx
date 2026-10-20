import { reasons } from '../../../data';
import { Icon } from '../../ui/Icon';
import { SectionHead } from '../../ui/SectionHead';

export function Reasons({ source = 'C09', extra = false }) {
  return (
    <section className="section reasons-section" data-source={source}>
      <SectionHead label="Why CoolCycle" title="Why CoolCycle" />
      <div className="reason-grid">
        {reasons.map(([t, p, i], n) => (
          <article key={t}>
            <div>
              <span className="label">0{n + 1}</span>
              <Icon name={i} />
            </div>
            <h3>{t}</h3>
            <p>{p}</p>
          </article>
        ))}
      </div>
      {extra && (
        <p className="support-line">
          Less spoilage · Longer shelf life · Better market access · Reliable infrastructure · Clear
          visibility of your produce
        </p>
      )}
    </section>
  );
}
