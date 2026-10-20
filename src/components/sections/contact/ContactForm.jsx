import { site } from '../../../data';
import { EnquiryForm } from '../shared/EnquiryForm';
import { Action } from '../../ui/Action';
import { Label } from '../../ui/Label';

export function ContactForm() {
  return (
    <section className="section form-section" data-source="C35" id="enquiry">
      <div>
        <Label>Contact</Label>
        <h2>Send us a message.</h2>
        <p>
          <a href={'mailto:' + site.contactEmail}>{site.contactEmail}</a>
        </p>
        <p>
          <a href={'tel:+' + site.whatsapp}>{site.phone}</a>
        </p>
        <Action>Message us on WhatsApp</Action>
        <div className="response-policy">
          <Label>Response time</Label>
          <p>We will reply within 12–24 hrs working days.</p>
          <p>Need a faster answer? Message us on WhatsApp.</p>
        </div>
      </div>
      <EnquiryForm />
    </section>
  );
}
