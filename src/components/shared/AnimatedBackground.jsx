/**
 * AnimatedBackground
 * Futuristic cyber-tech background with faint digital grid texture,
 * ambient neon gradient spotlights, and subtle atmospheric glows.
 */
const AnimatedBackground = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Subtle Digital Cyber Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #00f0ff 1px, transparent 1px),
            linear-gradient(to bottom, #00f0ff 1px, transparent 1px)
          `,
          backgroundSize: "48px 48px",
        }}
      />

      {/* Futuristic Radial Accent Spotlights */}
      <div
        className="absolute -left-28 top-12 h-[480px] w-[480px] rounded-full opacity-20 blur-[120px] animate-cyber-pulse"
        style={{ background: "radial-gradient(circle, #00f0ff 0%, #3b82f6 100%)" }}
      />
      <div
        className="absolute -right-28 top-1/3 h-[520px] w-[520px] rounded-full opacity-15 blur-[130px] animate-cyber-pulse [animation-delay:-2s]"
        style={{ background: "radial-gradient(circle, #a855f7 0%, #ec4899 100%)" }}
      />
      <div
        className="absolute left-1/3 bottom-0 h-[400px] w-[400px] rounded-full opacity-10 blur-[100px]"
        style={{ background: "radial-gradient(circle, #00ff9d 0%, #06b6d4 100%)" }}
      />
    </div>
  );
};

export default AnimatedBackground;
