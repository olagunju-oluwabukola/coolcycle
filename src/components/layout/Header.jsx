import { useEffect, useState } from 'react';
import { Action } from '../ui/Action';
import { Icon } from '../ui/Icon';
import { asset } from '../../lib/assets';
import { path } from '../../lib/location';

export function Header({ photo = false }) {
  const [open, setOpen] = useState(false),
    [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const scroll = () => setScrolled(window.scrollY > 35);
    window.addEventListener('scroll', scroll, { passive: true });
    return () => window.removeEventListener('scroll', scroll);
  }, []);
  useEffect(() => {
    const fn = (e) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', fn);
    return () => window.removeEventListener('keydown', fn);
  }, []);
  const nav = [
    ['About', '/about/'],
    ['Farmers & Traders', '/farmers/'],
    ['Services', '/services/'],
    ['Hubs', '/hubs/'],
    ['How It Works', '/how-it-works/'],
    ['Partners', '/partners/'],
    ['Contact', '/contact/'],
  ];
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <header
        className={`header ${photo && !scrolled && !open ? 'over-photo' : ''} ${open ? 'menu-open' : ''}`}
      >
        <a className="brand" href="/" aria-label="CoolCycle home">
          <img
            src={asset(photo && !scrolled && !open ? 'logo-white.svg' : 'logo-blue.svg')}
            alt="CoolCycle"
            width="156"
            height="40"
          />
        </a>
        <nav aria-label="Main navigation" id="site-navigation" className={open ? 'open' : ''}>
          {nav.map(([n, u]) => (
            <a
              key={u}
              href={u}
              className={path.startsWith(u.slice(0, -1)) ? 'active' : ''}
              aria-current={path === u.slice(0, -1) ? 'page' : undefined}
            >
              {n}
            </a>
          ))}
        </nav>
        <Action className="nav-action">Get started</Action>
        <button
          className="menu-toggle"
          aria-controls="site-navigation"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span>{open ? 'Close' : 'Menu'}</span>
          <Icon name={open ? 'x' : 'list'} />
        </button>
      </header>
    </>
  );
}
