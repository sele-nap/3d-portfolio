import { LESBIAN_GRADIENT } from '@/tokens/theme';

export function AccentLine() {
  return (
    <div
      className="modal-accent-line"
      style={{
        background: `linear-gradient(90deg, ${LESBIAN_GRADIENT.join(', ')})`,
      }}
    />
  );
}
