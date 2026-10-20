import { Icon } from './Icon';
import { messageFor, whatsappLink } from '../../lib/whatsapp';

// Where partnership enquiries go: the contact form, with the role preselected.
export const PARTNER_FORM_PATH = '/contact/?topic=partner#enquiry';

// A call-to-action button. Every type opens WhatsApp with a pre-filled message,
// except "partner", which goes to the enquiry form.
export function Action({ children = 'Get started', type = 'book', className = '' }) {
  const isPartner = type === 'partner';
  return (
    <a
      className={'button ' + className}
      href={isPartner ? PARTNER_FORM_PATH : whatsappLink(messageFor(type))}
      {...(isPartner ? {} : { target: '_blank', rel: 'noreferrer' })}
    >
      {children}
      <Icon name={type === 'book' ? 'whatsapp-logo' : 'arrow-up-right'} />
    </a>
  );
}
