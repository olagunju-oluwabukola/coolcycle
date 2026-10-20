import { Link } from '../../ui/Link';
import { SectionHead } from '../../ui/SectionHead';
import { asset } from '../../../lib/assets';

export function Credits() {
  return (
    <section className="section credits-section" data-source="C31" id="partner-credits">
      <SectionHead label="Partners" title="Partners" />
      <div className="credit-grid">
        {[
          [
            'ZE-Gen',
            'Won the ZE-Gen Circularity Challenge, which funded the build.',
            ['ze-gen.svg'],
          ],
          ['KAMIM Technologies', 'Built by KAMIM Technologies.', ['kamim.svg']],
        ].map(([t, p, logos]) => (
          <article key={t}>
            <div className={'partner-logo-row ' + (logos.length > 1 ? 'partner-logo-pair' : '')}>
              {logos.map((logo) => (
                <img
                  key={logo}
                  src={asset('partners/' + logo)}
                  alt={
                    {
                      'ze-gen.svg': 'ZE-Gen',
                      'kamim.svg': 'KAMIM Technologies',
                      'eweko.svg': 'Eweko Aggregate',
                    }[logo]
                  }
                  loading="lazy"
                />
              ))}
            </div>
            <h3 className="sr-only">{t}</h3>
            <p>{p}</p>
          </article>
        ))}
      </div>
      <div className="credit-action">
        <p>Want to work with us?</p>
        <Link href="/partners/">Become a partner</Link>
      </div>
    </section>
  );
}
