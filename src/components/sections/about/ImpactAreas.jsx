import { impactAreas } from '../../../data';
import { Icon } from '../../ui/Icon';
import { Label } from '../../ui/Label';
import { Link } from '../../ui/Link';
import { SectionHead } from '../../ui/SectionHead';
import { usePanelScroll } from '../../../hooks/usePanelScroll';

export function ImpactAreas() {
  const ref = usePanelScroll(impactAreas.length),
    short = ['Food', 'Income', 'Solar', 'Climate', 'Jobs', 'Tech'];
  return (
    <section
      ref={ref}
      className="section scrolling-partners impact-scroll"
      data-source="C30"
      id="impact-areas"
    >
      <div className="partner-sticky">
        <div className="partner-intro">
          <SectionHead label="Impact areas" title="Impact areas" />
        </div>
        <div className="partner-scroll-window">
          <div className="partner-scroll-track">
            {impactAreas.map(([t, p, icon], i) => (
              <article className="partner-scroll-card" key={t}>
                <div className="partner-card-top">
                  <div className="partner-card-kicker">
                    <span className="label">{short[i]}</span>
                    <Icon name={icon} />
                    <span className="label">0{i + 1}</span>
                  </div>
                  <h3>{t}</h3>
                </div>
                <p>{p}</p>
              </article>
            ))}
            <article className="partner-end-card">
              <Label>Impact dashboard</Label>
              <h3>
                Impact
                <br />
                dashboard.
              </h3>
              <Link href="#impact" className="button">
                View impact dashboard
              </Link>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
