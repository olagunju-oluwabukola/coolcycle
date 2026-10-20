import { asset } from '../../lib/assets';

export function Photo({ src, alt, className = '', eager = false }) {
  return (
    <figure className={'photo ' + className}>
      <img
        src={asset(src)}
        alt={alt}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : 'auto'}
      />
    </figure>
  );
}
