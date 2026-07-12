import { LESBIAN_GRADIENT } from '@/tokens/theme';

export function AccentLine() {
  return (
    <div
      className="modal-accent-line"
      aria-hidden="true"
      style={{
        background: `linear-gradient(90deg, ${LESBIAN_GRADIENT.join(', ')})`,
      }}
    />
  );
}
