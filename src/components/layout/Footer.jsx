import { site } from '../../data';
import { Icon } from '../ui/Icon';
import { Label } from '../ui/Label';
import { asset } from '../../lib/assets';
import { messageFor, whatsappLink } from '../../lib/whatsapp';

export function Footer() {
  return (
    <footer id="site-footer">
      <div className="footer-top">
        <div className="footer-intro">
          <Label>Every harvest reaches the market fresh.</Label>
          <p>
            Bring solar cold storage close to every smallholder farmer, by turning waste generators
            into cold rooms.
          </p>
        </div>
        <div className="footer-links">
          <div>
            <Label>Explore</Label>
            <a href="/services/">
              <span>Services</span>
            </a>
            <a href="/services/#pricing">
              <span>Pricing</span>
            </a>
            <a href="/how-it-works/">
              <span>How It Works</span>
            </a>
            <a href="/hubs/">
              <span>Find a Hub</span>
            </a>
          </div>
          <div>
            <Label>CoolCycle</Label>
            <a href="/about/">
              <span>About & Impact</span>
            </a>
            <a href="/farmers/">
              <span>Farmers & Traders</span>
            </a>
            <a href="/partners/">
              <span>Partner With Us</span>
            </a>
            <a href="/contact/">
              <span>Contact</span>
            </a>
          </div>
          <div>
            <Label>Get in touch</Label>
            <a href={whatsappLink(messageFor('book'))} target="_blank" rel="noreferrer">
              <span>Start on WhatsApp</span>
            </a>
            <a href={'mailto:' + site.contactEmail}>
              <span>{site.contactEmail}</span>
            </a>
            <a href={'tel:+' + site.whatsapp}>
              <span>{site.phone}</span>
            </a>
            <a href="/hubs/#request">
              <span>Request a Hub</span>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-wordmark">
        <a href="/" aria-label="CoolCycle home">
          <img src={asset('logo-blue.svg')} alt="CoolCycle" />
        </a>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} CoolCycle.</span>
        <span>Solar-powered cold storage · Nigeria</span>
        <a href="/contact/">
          Contact us
          <Icon />
        </a>
      </div>
    </footer>
  );
}
