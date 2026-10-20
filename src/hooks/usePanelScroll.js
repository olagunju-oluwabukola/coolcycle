import { useEffect, useRef } from 'react';

export function usePanelScroll(count) {
  const ref = useRef();
  useEffect(() => {
    const section = ref.current;
    const media = matchMedia('(min-width:1001px) and (prefers-reduced-motion: no-preference)');
    let frame = 0;
    const update = () => {
      frame = 0;
      if (!media.matches) {
        section.style.removeProperty('--partner-progress');
        section.querySelectorAll('.partner-scroll-card').forEach((card) => {
          card.style.removeProperty('--panel-width');
          card.style.removeProperty('--panel-fade');
          card.style.removeProperty('--panel-pad');
        });
        return;
      }
      const top = document.querySelector('.header')?.offsetHeight || 82;
      const range = section.offsetHeight - section.querySelector('.partner-sticky').offsetHeight;
      const progress = Math.max(
        0,
        Math.min(1, (top - section.getBoundingClientRect().top) / Math.max(1, range)),
      );
      section.style.setProperty('--partner-progress', progress);
      const expanded = Math.min(620, Math.max(330, innerWidth * 0.34236)),
        collapsed = Math.max(72, Math.min(100, innerWidth * 0.052));
      section.querySelectorAll('.partner-scroll-card').forEach((card, i) => {
        const phase = Math.max(0, Math.min(1, progress * count - i));
        card.style.setProperty('--panel-width', expanded + (collapsed - expanded) * phase + 'px');
        card.style.setProperty('--panel-fade', 1 - phase);
        card.style.setProperty('--panel-pad', 24 - 12 * phase + 'px');
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
  }, [count]);
  return ref;
}
