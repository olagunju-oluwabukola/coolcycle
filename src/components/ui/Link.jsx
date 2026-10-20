import { Icon } from './Icon';

export function Link({ children, href, className = 'text-link' }) {
  return (
    <a className={className} href={href}>
      {children}
      <Icon />
    </a>
  );
}
