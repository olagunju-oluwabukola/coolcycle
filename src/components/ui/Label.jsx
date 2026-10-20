export function Label({ children, number }) {
  return (
    <div className="label">
      {number && <span>{number.padStart(2, '0')} / </span>}
      {children}
    </div>
  );
}
