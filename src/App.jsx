import { useEffect } from 'react';
import { ServiceDetail } from './components/sections/services/ServiceDetail';
import { HubDetail } from './components/sections/hubs/HubDetail';
import { services, hubs } from './data';
import { path } from './lib/location';
import { routes } from './lib/routes';
import { Link } from './components/ui/Link';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { ImageHoverEffects } from './components/layout/ImageHoverEffects';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { HubsPage } from './pages/HubsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { FarmersPage } from './pages/FarmersPage';
import { PartnersPage } from './pages/PartnersPage';
import 'leaflet/dist/leaflet.css';
export function App() {
  const service = services.find((s) => path === '/services/' + s.slug),
    hub = hubs.find((h) => path === '/hubs/' + h.slug);
  const pages = {
    '/': <HomePage />,
    '/services': <ServicesPage />,
    '/how-it-works': <HowItWorksPage />,
    '/hubs': <HubsPage />,
    '/about': <AboutPage />,
    '/contact': <ContactPage />,
    '/farmers': <FarmersPage />,
    '/partners': <PartnersPage />,
  };
  const page = service ? (
    <ServiceDetail service={service} />
  ) : hub ? (
    <HubDetail hub={hub} />
  ) : (
    pages[path]
  );
  const photo =
    path === '/' ||
    path === '/services' ||
    path === '/about' ||
    path === '/farmers' ||
    path === '/partners' ||
    !!hub ||
    service?.slug === 'cold-storage';
  useEffect(() => {
    const title =
      routes.find(([r]) => (r.replace(/\/+$/, '') || '/') === path)?.[1] || 'Page not found';
    document.title = title + ' · CoolCycle';
    if (location.hash)
      requestAnimationFrame(() =>
        document.getElementById(location.hash.slice(1))?.scrollIntoView(),
      );
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in-view');
            observer.unobserve(e.target);
          }
        }),
      { threshold: 0.06 },
    );
    document
      .querySelectorAll(
        '.section-head,.editorial-grid,.process-card,.reason-grid article,.metric-grid article,.roadmap-rows article',
      )
      .forEach((e) => observer.observe(e));
    return () => observer.disconnect();
  }, []);
  return (
    <>
      <Header photo={photo} />
      <main id="main">
        {page || (
          <section className="section not-found">
            <h1>Page not found.</h1>
            <Link href="/">Return to Home</Link>
          </section>
        )}
      </main>
      <Footer />
      <ImageHoverEffects />
    </>
  );
}
