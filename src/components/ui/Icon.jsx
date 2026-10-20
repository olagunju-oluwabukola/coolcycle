import { asset } from '../../lib/assets';

export function Icon({ name = 'arrow-up-right', className = '' }) {
  return (
    <img
      className={'icon ' + className}
      src={asset('icons/' + name + '.svg')}
      alt=""
      aria-hidden="true"
    />
  );
}
