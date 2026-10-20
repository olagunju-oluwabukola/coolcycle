import { useEffect, useRef } from 'react';
export function SuccessDialog({ open, title, children, onClose }) {
  const ref = useRef();

  useEffect(() => {
    const dialog = ref.current;
    if (open && !dialog.open) dialog.showModal();
    if (!open && dialog.open) dialog.close();
  }, [open]);

  return (
    <dialog
      ref={ref}
      className="success-dialog"
      aria-labelledby="success-title"
      onClose={onClose}
      onClick={(e) => e.target === ref.current && ref.current.close()}
    >
      <svg className="success-check" viewBox="0 0 52 52" aria-hidden="true">
        <circle className="success-check-circle" cx="26" cy="26" r="24" />
        <path className="success-check-mark" d="M14 27l8 8 16-17" />
      </svg>
      <h2 id="success-title">{title}</h2>
      <p>{children}</p>
      <button type="button" className="button" autoFocus onClick={() => ref.current.close()}>
        Done
      </button>
    </dialog>
  );
}