/**
 * AnimatedBackground
 * Futuristic Cyber-Tech Command Center Atmosphere.
 * Features a deep navy/black base, subtle digital engineering grid,
 * ambient radial spotlights, and a prominent flowing wireframe digital terrain wave along the bottom.
 */
const AnimatedBackground = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {/* Subtle Digital Engineering Grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
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
        className="absolute -left-28 top-12 h-[540px] w-[540px] rounded-full opacity-20 blur-[130px] animate-cyber-breath"
        style={{ background: "radial-gradient(circle, #00f0ff 0%, #3b82f6 100%)" }}
      />
      {/* Right Purple/Pink Spotlight */}
      <div
        className="absolute -right-28 top-1/4 h-[580px] w-[580px] rounded-full opacity-18 blur-[140px] animate-cyber-breath [animation-delay:-2.5s]"
        style={{ background: "radial-gradient(circle, #a855f7 0%, #ec4899 100%)" }}
      />
      {/* Center Cyan Backlight */}
      <div
        className="absolute left-1/2 top-1/3 -translate-x-1/2 h-[480px] w-[480px] rounded-full opacity-15 blur-[120px]"
        style={{ background: "radial-gradient(circle, #00ff9d 0%, #00f0ff 100%)" }}
      />

      {/* Flowing Wireframe Digital Wave / Terrain Along Bottom (Clearly Visible) */}
      <div className="absolute bottom-0 inset-x-0 h-44 opacity-40 overflow-hidden">
        <svg
          viewBox="0 0 1440 220"
          className="w-full h-full animate-wave-flow preserve-3d"
          fill="none"
          preserveAspectRatio="none"
        >
          {/* Wireframe Terrain Gradient Fill */}
          <path
            d="M 0 170 Q 360 110 720 170 T 1440 170 L 1440 220 L 0 220 Z"
            fill="url(#terrain-gradient-1)"
          />
          {/* Wave Curve 1 (Cyan Neon) */}
          <path
            d="M 0 150 Q 360 190 720 140 T 1440 150"
            stroke="rgba(0, 240, 255, 0.55)"
            strokeWidth="1.5"
            strokeDasharray="4 6"
          />
          {/* Wave Curve 2 (Purple Neon) */}
          <path
            d="M 0 175 Q 360 130 720 180 T 1440 165"
            stroke="rgba(168, 85, 247, 0.45)"
            strokeWidth="1.2"
            strokeDasharray="6 8"
          />
          {/* Wave Curve 3 (Electric Sky) */}
          <path
            d="M 0 200 Q 360 160 720 200 T 1440 190"
            stroke="rgba(56, 189, 248, 0.35)"
            strokeWidth="1.2"
          />
          {/* Wave Curve 4 (Base Wireframe) */}
          <path
            d="M 0 185 Q 360 215 720 175 T 1440 180"
            stroke="rgba(0, 255, 157, 0.3)"
            strokeWidth="1"
            strokeDasharray="3 5"
          />
          <defs>
            <linearGradient id="terrain-gradient-1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.12" />
              <stop offset="60%" stopColor="#a855f7" stopOpacity="0.06" />
              <stop offset="100%" stopColor="#030712" stopOpacity="0.0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
};

export default AnimatedBackground;
