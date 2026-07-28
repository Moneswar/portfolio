/**
 * AnimatedBackground
 * Two soft, slow-moving gradient blobs plus a faint grid overlay.
 * Pure CSS animation (see the `blob` keyframes in index.css) — no JS work,
 * so it stays cheap on lower-end devices.
 */
const AnimatedBackground = () => {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Faint grid for texture */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div
        className="absolute -left-24 top-10 h-[420px] w-[420px] rounded-full opacity-25 blur-[100px] animate-[blob_18s_ease-in-out_infinite]"
        style={{ background: "var(--color-cyan)" }}
      />
      <div
        className="absolute -right-24 bottom-0 h-[420px] w-[420px] rounded-full opacity-20 blur-[110px] animate-[blob_22s_ease-in-out_infinite]"
        style={{ background: "var(--color-purple)", animationDelay: "-6s" }}
      />
    </div>
  );
};

export default AnimatedBackground;
