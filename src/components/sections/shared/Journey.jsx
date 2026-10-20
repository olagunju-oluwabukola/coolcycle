import { journey } from '../../../data';
import { Action } from '../../ui/Action';
import { Icon } from '../../ui/Icon';
import { Label } from '../../ui/Label';

export function Journey({ source = 'C14', compact = false }) {
  return (
    <section
      className={'section process-section ' + (compact ? 'compact' : '')}
      id="steps"
      data-source={source}
    >
      <div className="process-intro">
        <Label>How It Works</Label>
        <h2>How It Works</h2>
        <p>Getting started takes minutes, and you don't need to download an app.</p>
        <p>Everything happens on WhatsApp, from sign-up to tracking your produce.</p>
        <Action>Start on WhatsApp</Action>
      </div>
      <ol className="process-cards">
        {journey.map(([t, d, ic], i) => (
          <li className="process-card" key={t}>
            <div>
              <h3>{t}</h3>
              <span className="process-number">0{i + 1}</span>
            </div>
            <Icon name={ic} />
            <p>{d}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
