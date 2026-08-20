/**
 * AnimatedBackground
 * Futuristic Cyber-Tech Command Center Atmosphere.
 * Features a deep navy/black base, subtle digital engineering grid,
 * ambient radial spotlights, and a flowing wireframe digital terrain wave along the bottom.
 */
const AnimatedBackground = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Subtle Digital Engineering Grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #00f0ff 1px, transparent 1px),
            linear-gradient(to bottom, #00f0ff 1px, transparent 1px)
          `,
          backgroundSize: "44px 44px",
        }}
      />

      {/* Ambient Neon Spotlights */}
      {/* Left Blue/Cyan Spotlight */}
      <div
        className="absolute -left-32 top-10 h-[520px] w-[520px] rounded-full opacity-18 blur-[130px] animate-cyber-breath"
        style={{ background: "radial-gradient(circle, #00f0ff 0%, #3b82f6 100%)" }}
      />
      {/* Right Purple/Pink Spotlight */}
      <div
        className="absolute -right-32 top-1/4 h-[560px] w-[560px] rounded-full opacity-15 blur-[140px] animate-cyber-breath [animation-delay:-2.5s]"
        style={{ background: "radial-gradient(circle, #a855f7 0%, #ec4899 100%)" }}
      />
      {/* Center Cyan Backlight */}
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 h-[450px] w-[450px] rounded-full opacity-12 blur-[120px]"
        style={{ background: "radial-gradient(circle, #00ff9d 0%, #00f0ff 100%)" }}
      />

      {/* Flowing Wireframe Digital Wave / Terrain Along Bottom */}
      <div className="absolute bottom-0 inset-x-0 h-40 opacity-25 overflow-hidden">
        <svg
          viewBox="0 0 1440 220"
          className="w-full h-full animate-wave-flow preserve-3d"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Wireframe Terrain Grid Lines */}
          <path
            d="M 0 180 Q 360 120 720 180 T 1440 180 L 1440 220 L 0 220 Z"
            fill="url(#terrain-gradient-1)"
          />
          <path
            d="M 0 160 Q 360 200 720 150 T 1440 160"
            stroke="rgba(0, 240, 255, 0.4)"
            strokeWidth="1"
            strokeDasharray="4 6"
          />
          <path
            d="M 0 185 Q 360 140 720 190 T 1440 175"
            stroke="rgba(168, 85, 247, 0.35)"
            strokeWidth="1"
            strokeDasharray="6 8"
          />
          <path
            d="M 0 210 Q 360 170 720 210 T 1440 200"
            stroke="rgba(56, 189, 248, 0.25)"
            strokeWidth="1"
          />
          <defs>
            <linearGradient id="terrain-gradient-1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.08" />
              <stop offset="100%" stopColor="#a855f7" stopOpacity="0.0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default AnimatedBackground;
