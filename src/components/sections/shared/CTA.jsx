import { Action } from '../../ui/Action';
import { Label } from '../../ui/Label';

export function CTA({ source }) {
  return (
    <section className="section closing-cta" data-source={source}>
      <Label>Get started</Label>
      <h2>
        Ready to store smarter?
        <br />
        Start on WhatsApp.
      </h2>
      <Action>Start on WhatsApp</Action>
    </section>
  );
}
