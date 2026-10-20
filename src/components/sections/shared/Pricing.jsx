import { storageExtrasNote, storageIntro, storagePackages } from '../../../data';
import { Action } from '../../ui/Action';
import { Icon } from '../../ui/Icon';
import { Label } from '../../ui/Label';

export function Pricing() {
  return (
    <section className="section pricing pricing-packages" id="pricing">
      <div className="pricing-intro">
        <Label>Cold Storage / Pricing</Label>
        <h2>No equipment to buy.</h2>
        <p>{storageIntro}</p>
        <Action type="cold-storage">Book Storage</Action>
      </div>
      <div className="package-grid">
        {storagePackages.map((p) => (
          <article className="package" key={p.name}>
            <Label>{p.name}</Label>
            <div className="package-price">
              <strong>{p.price}</strong>
              <span>per month, per pallet</span>
            </div>
            <p>{p.audience}</p>
            <div className="package-includes">
              <h3>{p.includesFrom || "What's included"}</h3>
              <ul>
                {p.includes.map((item) => (
                  <li key={item}>
                    <Icon name="check" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <p className="package-best">
              <strong>Best for:</strong> {p.bestFor}
            </p>
          </article>
        ))}
      </div>
      <p className="package-note">{storageExtrasNote}</p>
    </section>
  );
}
