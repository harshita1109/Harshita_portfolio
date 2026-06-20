/**
 * Recurring "instrumentation" motif: a hairline with a single cyan
 * signal pulse traveling along it. Decorative — hidden from a11y tree.
 */
export function SignalDivider() {
  return (
    <div className="container-content" aria-hidden="true">
      <div className="relative h-px w-full overflow-hidden bg-[rgb(var(--hairline)/var(--hairline-alpha))]">
        <div className="absolute inset-y-0 left-0 w-1/3 animate-signal-travel bg-gradient-to-r from-transparent via-signal to-transparent" />
      </div>
    </div>
  );
}
