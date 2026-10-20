import { useEffect, useRef } from 'react';
import { roadmap } from '../../../data';
import { SectionHead } from '../../ui/SectionHead';
import { asset } from '../../../lib/assets';

export function Roadmap() {
  const ref = useRef();
  useEffect(() => {
    const section = ref.current,
      media = matchMedia('(min-width:1001px) and (prefers-reduced-motion:no-preference)');
    let frame = 0;
    const update = () => {
      frame = 0;
      const rows = [...section.querySelectorAll('.roadmap-row')];
      if (!media.matches) {
        rows.forEach((row) => {
          row.style.removeProperty('--roadmap-height');
          row.style.removeProperty('--roadmap-copy');
        });
        return;
      }
      const top = document.querySelector('.header')?.offsetHeight || 82,
        sticky = section.querySelector('.roadmap-sticky'),
        range = section.offsetHeight - sticky.offsetHeight,
        progress = Math.max(
          0,
          Math.min(1, (top - section.getBoundingClientRect().top) / Math.max(1, range)),
        ),
        expanded = Math.max(250, Math.min(470, innerWidth * 0.323)),
        collapsed = Math.max(92, Math.min(135, innerWidth * 0.09));
      rows.forEach((row, i) => {
        const phase = Math.max(0, Math.min(1, progress * 3 - i));
        row.style.setProperty('--roadmap-height', expanded + (collapsed - expanded) * phase + 'px');
        row.style.setProperty('--roadmap-copy', 1 - phase);
      });
    };
    const scroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    window.addEventListener('scroll', scroll, { passive: true });
    window.addEventListener('resize', scroll);
    media.addEventListener('change', scroll);
    update();
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', scroll);
      window.removeEventListener('resize', scroll);
      media.removeEventListener('change', scroll);
    };
  }, []);
  return (
    <section
      ref={ref}
      className="section roadmap-section roadmap-scroll"
      data-source="C25"
      id="roadmap"
    >
      <div className="roadmap-sticky">
        <SectionHead label="Where We Are Going" title="Today. Next. Ahead." />
        <div className="roadmap-rows">
          {roadmap.map(([t, p], i) => (
            <article className="roadmap-row" key={t} tabIndex={0} aria-label={t + ': ' + p}>
              <div className="roadmap-stage">
                <span className="label">0{i + 1}</span>
                <h3>{t}</h3>
                <p>{p}</p>
              </div>
              <figure className="roadmap-image">
                <img
                  src={asset('roadmap-' + t.toLowerCase() + '.webp')}
                  alt={
                    'Generated concept: ' +
                    [
                      'solar cold rooms and ice at a produce market',
                      'small farm-side cold stops and portable cooling',
                      'a regional solar-powered food logistics hub',
                    ][i]
                  }
                  loading="lazy"
                />
              </figure>
            </article>
          ))}
        </div>
        <p className="roadmap-long">
          Solar-powered cold rooms → Distributed cold-chain infrastructure → A clean-energy-powered
          productive infrastructure platform across Africa.
        </p>
      </div>
    </section>
  );
}
