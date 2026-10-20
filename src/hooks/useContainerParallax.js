import { useEffect, useRef } from 'react';

export function useContainerParallax() {
  const ref = useRef();
  useEffect(() => {
    const stage = ref.current,
      media = matchMedia('(min-width:701px) and (prefers-reduced-motion:no-preference)');
    let frame = 0,
      current = 0,
      target = 0,
      last = 0;
    const measure = () => {
      const top = document.querySelector('.header')?.offsetHeight || 82,
        rect = stage.getBoundingClientRect(),
        range = stage.offsetHeight - stage.querySelector('.container-parallax-sticky').offsetHeight;
      return Math.max(0, Math.min(1, (top - rect.top) / Math.max(1, range)));
    };
    const draw = () => {
      stage.style.setProperty('--container-drift', 110 - current * 220 + 'px');
      stage.style.setProperty('--container-scale', 0.9 + current * 0.2);
    };
    const tick = (time) => {
      frame = 0;
      if (!media.matches) {
        stage.style.removeProperty('--container-drift');
        stage.style.removeProperty('--container-scale');
        return;
      }
      const dt = last ? Math.min(64, time - last) : 16;
      last = time;
      current += (target - current) * (1 - Math.exp(-dt / 150));
      if (Math.abs(target - current) < 0.0003) current = target;
      draw();
      if (current !== target) frame = requestAnimationFrame(tick);
    };
    const update = () => {
      target = measure();
      if (!frame) {
        last = 0;
        frame = requestAnimationFrame(tick);
      }
    };
    const reset = () => {
      cancelAnimationFrame(frame);
      frame = 0;
      current = target = measure();
      if (media.matches) draw();
      else {
        stage.style.removeProperty('--container-drift');
        stage.style.removeProperty('--container-scale');
      }
    };
    reset();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', reset);
    media.addEventListener('change', reset);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', reset);
      media.removeEventListener('change', reset);
    };
  }, []);
  return ref;
}
