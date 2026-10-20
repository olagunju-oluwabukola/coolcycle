import { Label } from './Label';

export function SectionHead({ label, title, description, number, children }) {
  return (
    <div className="section-head">
      <div>
        <Label number={number}>{label}</Label>
        <h2>{title}</h2>
      </div>
      {description && <p>{description}</p>}
      {children}
    </div>
  );
}
