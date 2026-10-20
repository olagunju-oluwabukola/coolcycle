import { useRef } from 'react';
import { services } from '../../../data';
import { Action } from '../../ui/Action';
import { Icon } from '../../ui/Icon';
import { SectionHead } from '../../ui/SectionHead';
import { asset } from '../../../lib/assets';

export function ServicesCarousel({ source = 'C11' }) {
  const ref = useRef();
  const move = (n) =>
    ref.current?.scrollBy({
      left: n * (ref.current.clientWidth * 0.7),
      behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth',
    });
  return (
    <section className="section service-catalogue" data-source={source} id="service-catalogue">
      <SectionHead label="Our services" title="Choose the service that fits how you farm or trade.">
        <div className="carousel-controls">
          <button aria-label="Previous services" onClick={() => move(-1)}>
            <Icon name="arrow-left" />
          </button>
          <button aria-label="Next services" onClick={() => move(1)}>
            <Icon name="arrow-right" />
          </button>
        </div>
      </SectionHead>
      <div
        className="service-carousel"
        ref={ref}
        tabIndex="0"
        aria-label="Services, scroll horizontally"
      >
        {services.map((s, i) => (
          <article className="service-card" key={s.slug}>
            <a className="service-image" href={'/services/' + s.slug + '/'}>
              <img
                src={asset(s.image)}
                alt={'Illustrative ' + s.plain.toLowerCase() + ' concept'}
                loading="lazy"
              />
              <span className="service-index">0{i + 1}</span>
            </a>
            <div className="service-card-body">
              <span className={'status ' + (s.status === 'Available' ? 'available' : 'soon')}>
                {s.status}
              </span>
              <h3>
                <a href={'/services/' + s.slug + '/'}>{s.plain}</a>
              </h3>
              <p>{s.line}</p>
              <div className="service-card-actions">
                {s.status === 'Available' ? (
                  <Action type={s.slug}>{s.action}</Action>
                ) : (
                  <button className="button coming-button" disabled>
                    Book — Coming soon
                  </button>
                )}
                <a
                  className="detail-link"
                  href={'/services/' + s.slug + '/'}
                  aria-label={'View ' + s.plain + ' details'}
                >
                  <Icon />
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
