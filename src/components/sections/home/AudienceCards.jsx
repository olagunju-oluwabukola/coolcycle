import { Icon } from '../../ui/Icon';
import { Photo } from '../../ui/Photo';
import { SectionHead } from '../../ui/SectionHead';

export function AudienceCards({ source = 'C05' }) {
  return (
    <section className="section" data-source={source}>
      <SectionHead label="Who we serve" title="Farmers. Traders. Partners." />
      <div className="audience-grid">
        {[
          [
            'Farmers',
            'Store your harvest. Sell at a fair price, not in a hurry.',
            'Women farmers and small food businesses.',
            '/farmers/',
            'farmer-produce.webp',
          ],
          [
            'Traders',
            'Get dependable stock and clear tracking.',
            '',
            '/farmers/#traders',
            'trader-market.webp',
          ],
          [
            'Partners',
            'Work with us to bring cold storage to more communities.',
            '',
            '/partners/',
            'container-concept.webp',
          ],
        ].map(([t, p, q, u, img]) => (
          <article key={t}>
            <a href={u}>
              <Photo
                src={img}
                alt={'Illustrative ' + t.toLowerCase() + ' concept'}
                caption={null}
              />
              <div className="audience-card-copy">
                <h3>{t}</h3>
                <p>{p}</p>
                {q && <p>{q}</p>}
                <span className="text-link">
                  {t === 'Partners' ? 'Partner with us' : 'Get started'}
                  <Icon />
                </span>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
