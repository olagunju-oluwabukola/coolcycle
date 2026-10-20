import { Reasons } from '../shared/Reasons';
import { Action } from '../../ui/Action';
import { Icon } from '../../ui/Icon';
import { Label } from '../../ui/Label';
import { Link } from '../../ui/Link';
import { Photo } from '../../ui/Photo';

export function FarmersContent() {
  return (
    <>
      <section className="section split-photo" id="farmers" data-source="C38">
        <Photo src="farmer-produce.webp" alt="Illustrative women farmers handling fresh produce" />
        <div>
          <Label>Farmers</Label>
          <h2>Your harvest deserves better than the heat.</h2>
          <ul className="simple-list">
            {[
              'Store it close to home',
              'Pay only for the space you use',
              'Find the nearest hub',
              'Book and track on WhatsApp',
            ].map((t) => (
              <li key={t}>
                <Icon name="check" />
                {t}
              </li>
            ))}
          </ul>
          <div className="actions">
            <Action>Get Started on WhatsApp</Action>
            <Link href="/hubs/">Find the nearest hub</Link>
          </div>
          <p className="fine">For farmers, women farmers and small food businesses.</p>
        </div>
      </section>
      <section className="section split-photo reverse" id="traders" data-source="C39">
        <Photo
          src="trader-market.webp"
          alt="Illustrative produce traders organizing stock at market"
        />
        <div>
          <Label>Traders</Label>
          <h2>Reliable stock, clear tracking.</h2>
          <ul className="simple-list">
            <li>
              <Icon name="check" />
              Store produce
            </li>
            <li>
              <Icon name="check" />
              Keep your inventory in one place
            </li>
            <li>
              <Icon name="check" />
              Buy ice to keep produce cool in transit
            </li>
            <li>
              <Icon name="arrow-right" />
              Manage movement <span className="status soon">Coming soon</span>
            </li>
            <li>
              <Icon name="arrow-right" />
              Reach buyers and markets <span className="status soon">Coming soon</span>
            </li>
          </ul>
          <Action>Get Started</Action>
        </div>
      </section>
      <Reasons source="C40" extra />
    </>
  );
}
