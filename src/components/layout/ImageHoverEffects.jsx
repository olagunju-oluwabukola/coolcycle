import { useEffect } from 'react';

export function ImageHoverEffects() {
  useEffect(() => {
    const motion = matchMedia('(hover:hover) and (prefers-reduced-motion:no-preference)'),
      cleanups = [];
    document.querySelectorAll('main img').forEach((img) => {
      if (
        img.classList.contains('icon') ||
        img.closest('.credit-grid,.hero-service-strip') ||
        img.matches('.home-hero > .hero-photo') ||
        /logo|icons\//i.test(img.getAttribute('src') || '')
      )
        return;
      const host = img.parentElement,
        target =
          img.closest(
            '.roadmap-row,.photo,.service-image,.hero-service-strip>a,.container-stage',
          ) || (img.classList.contains('hero-photo') ? host : img),
        position = host.style.position,
        overlay = document.createElement('span');
      if (getComputedStyle(host).position === 'static') host.style.position = 'relative';
      overlay.className = 'photo-frost';
      overlay.setAttribute('aria-hidden', 'true');
      host.append(overlay);
      img.classList.add('frost-photo');
      const size = () => {
          Object.assign(overlay.style, {
            left: img.offsetLeft + 'px',
            top: img.offsetTop + 'px',
            width: img.offsetWidth + 'px',
            height: img.offsetHeight + 'px',
            borderRadius: getComputedStyle(img).borderRadius,
          });
        },
        enter = () => {
          if (motion.matches) {
            overlay.classList.add('is-frozen');
            img.classList.add('is-frozen');
          }
        },
        leave = () => {
          overlay.classList.remove('is-frozen');
          img.classList.remove('is-frozen');
        };
      const observer = new ResizeObserver(size);
      observer.observe(img);
      observer.observe(host);
      img.addEventListener('load', size);
      target.addEventListener('pointerenter', enter);
      target.addEventListener('pointerleave', leave);
      const focusTarget = img.closest('.roadmap-row,a');
      focusTarget?.addEventListener('focus', enter);
      focusTarget?.addEventListener('blur', leave);
      motion.addEventListener('change', leave);
      size();
      cleanups.push(() => {
        observer.disconnect();
        img.removeEventListener('load', size);
        target.removeEventListener('pointerenter', enter);
        target.removeEventListener('pointerleave', leave);
        focusTarget?.removeEventListener('focus', enter);
        focusTarget?.removeEventListener('blur', leave);
        motion.removeEventListener('change', leave);
        img.classList.remove('frost-photo', 'is-frozen');
        overlay.remove();
        host.style.position = position;
      });
    });
    return () => cleanups.forEach((fn) => fn());
  }, []);
  return null;
}
