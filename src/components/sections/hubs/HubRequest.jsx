import { EnquiryForm } from '../shared/EnquiryForm';
import { Action } from '../../ui/Action';
import { Label } from '../../ui/Label';

export function HubRequest() {
  return (
    <section className="section form-section" id="request" data-source="C23">
      <div>
        <Label>Not near a hub yet?</Label>
        <h2>Not near a hub yet?</h2>
        <p>Tell us where you farm or trade. Your location helps us decide where to build next.</p>
        <p>Farmer groups and associations can register a location together.</p>
        <Action type="hub">Message us on WhatsApp</Action>
      </div>
      <EnquiryForm hubRequest />
    </section>
  );
}
