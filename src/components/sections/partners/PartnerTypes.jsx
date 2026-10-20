import { partners } from '../../../data';
import { Action } from '../../ui/Action';
import { Icon } from '../../ui/Icon';
import { Label } from '../../ui/Label';
import { SectionHead } from '../../ui/SectionHead';
import { usePanelScroll } from '../../../hooks/usePanelScroll';

export function PartnerTypes({ source = 'C36' }) {
  const ref = usePanelScroll(partners.length);
  const short = ['Farmers', 'Agri', 'Hubs', 'Tech', 'Invest', 'Finance', 'Develop'],
    icons = ['users', 'plant', 'warehouse', 'device-mobile', 'hand-coins', 'hand-coins', 'globe'];
  return (
    <section
      ref={ref}
      className="section partner-types scrolling-partners"
      data-source={source}
      id="partners"
    >
      <div className="partner-sticky">
        <div className="partner-intro">
          <SectionHead
            label="Partner with CoolCycle"
            title="Work with us to keep more food fresh."
            description="Work with us to bring cold storage and market access to more farmers."
          />
        </div>
        <div className="partner-scroll-window">
          <div className="partner-scroll-track">
            {partners.map(([t, p], i) => (
              <article className="partner-scroll-card" key={t}>
                <div className="partner-card-top">
                  <div className="partner-card-kicker">
                    <span className="label">{short[i]}</span>
                    <Icon name={icons[i]} />
                    <span className="label">0{i + 1}</span>
                  </div>
                  <h3>{t}</h3>
                </div>
                <p>{p}</p>
              </article>
            ))}
            <article className="partner-end-card">
              <Label>Work together</Label>
              <h3>
                Partner
                <br />
                with us.
              </h3>
              <Action type="partner">Partner with CoolCycle</Action>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
