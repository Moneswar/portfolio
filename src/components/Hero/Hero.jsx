import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowDown,
  FiDownload,
  FiEye,
  FiCpu,
  FiLayers,
  FiGlobe,
  FiCode,
  FiLayout,
} from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { personalInfo } from "../../data/resumeData";
import useTypewriter from "../../hooks/useTypewriter";
import AnimatedBackground from "../shared/AnimatedBackground";
import profileImg from "../../assets/favicon.png";

const roles = [
  "BE Computer Science & Design Student",
  "Full-Stack Web Developer",
  "Embedded Systems Enthusiast",
  "Software Developer",
  "UI/UX Designer",
];

// 5 Verified Technical Skill Modules (Strictly NO AI/ML)
const skillModules = [
  {
    id: "embedded",
    tag: "MOD // 01",
    title: "Embedded Systems",
    subtitle: "Sensors & Hardware",
    icon: FiCpu,
    color: "#00ff9d",
    borderClass: "border-emerald-400/50 hover:border-emerald-300",
    bgClass: "bg-emerald-950/40 hover:bg-emerald-900/50",
    textClass: "text-emerald-300",
    glowColor: "rgba(0, 255, 157, 0.45)",
    desktopPos: "top-[-1.5rem] right-[4%] xl:right-[8%]",
    path: "M 320 160 L 390 85",
    nodeCoord: { cx: 390, cy: 85 },
    zIndex: "z-30",
  },
  {
    id: "mern",
    tag: "MOD // 02",
    title: "MERN Stack",
    subtitle: "Full-Stack Web",
    icon: FiLayers,
    color: "#00f0ff",
    borderClass: "border-cyan-400/50 hover:border-cyan-300",
    bgClass: "bg-cyan-950/40 hover:bg-cyan-900/50",
    textClass: "text-cyan-300",
    glowColor: "rgba(0, 240, 255, 0.45)",
    desktopPos: "top-[28%] -left-[2.75rem] xl:-left-[3.5rem]",
    path: "M 170 240 L 70 200",
    nodeCoord: { cx: 70, cy: 200 },
    zIndex: "z-30",
  },
  {
    id: "web",
    tag: "MOD // 03",
    title: "Web Development",
    subtitle: "Modern Web Apps",
    icon: FiGlobe,
    color: "#38bdf8",
    borderClass: "border-sky-400/50 hover:border-sky-300",
    bgClass: "bg-sky-950/40 hover:bg-sky-900/50",
    textClass: "text-sky-300",
    glowColor: "rgba(56, 189, 248, 0.45)",
    desktopPos: "top-[28%] -right-[2.75rem] xl:-right-[3.5rem]",
    path: "M 370 240 L 470 200",
    nodeCoord: { cx: 470, cy: 200 },
    zIndex: "z-30",
  },
  {
    id: "software",
    tag: "MOD // 04",
    title: "Software Dev",
    subtitle: "Clean Architecture",
    icon: FiCode,
    color: "#a855f7",
    borderClass: "border-purple-400/50 hover:border-purple-300",
    bgClass: "bg-purple-950/40 hover:bg-purple-900/50",
    textClass: "text-purple-300",
    glowColor: "rgba(168, 85, 247, 0.45)",
    desktopPos: "bottom-[2%] left-[-1.5rem] xl:left-[-2rem]",
    path: "M 180 340 L 90 420",
    nodeCoord: { cx: 90, cy: 420 },
    zIndex: "z-30",
  },
  {
    id: "uiux",
    tag: "MOD // 05",
    title: "UI/UX Design",
    subtitle: "User-Centric UI",
    icon: FiLayout,
    color: "#ec4899",
    borderClass: "border-pink-400/50 hover:border-pink-300",
    bgClass: "bg-pink-950/40 hover:bg-pink-900/50",
    textClass: "text-pink-300",
    glowColor: "rgba(236, 72, 153, 0.45)",
    desktopPos: "bottom-[2%] right-[-1.5rem] xl:right-[-2rem]",
    path: "M 360 340 L 450 420",
    nodeCoord: { cx: 450, cy: 420 },
    zIndex: "z-30",
  },
];

/**
 * Hero
 * Futuristic Engineering Command Interface & Core Ecosystem.
 * Cinematic two-column developer showcase with high-contrast typography,
 * large central HUD Engineering Core, and 5 interconnected holographic skill modules.
 */
const Hero = () => {
  const typedRole = useTypewriter(roles, { pause: 1600 });
  const [activeModule, setActiveModule] = useState(null);

  return (
    <section
      id="home"
      className="relative flex min-h-[98vh] items-center overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28"
    >
      <AnimatedBackground />

      <div className="container-px relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12 xl:gap-16">
        {/* Left Column: Bold Headline, Bio, Action Buttons & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          {/* Opportunity Status Pill */}
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-cyan-500/35 bg-cyan-500/10 px-4 py-1.5 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest text-cyan-300 backdrop-blur-md shadow-lg shadow-cyan-500/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
            </span>
            OPEN TO INTERNSHIPS &amp; JOB OPPORTUNITIES
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] xl:text-[3.8rem] font-extrabold leading-[1.12] text-white">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
              Moneswar
            </span>
            .
            <br />
            Building practical{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              software
            </span>{" "}
            and{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-emerald-400 bg-clip-text text-transparent">
              hardware
            </span>{" "}
            solutions.
          </h1>

          {/* Degree Sub-headline & Typewriter Role */}
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 text-sm sm:text-base font-mono font-medium text-slate-300">
            <span className="inline-flex items-center gap-1.5 text-cyan-300 font-semibold">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
              BE Computer Science and Design
            </span>
            <span className="hidden sm:inline text-slate-500">•</span>
            <div className="flex items-center">
              <span>{typedRole}</span>
              <span className="ml-1 inline-block h-4 w-[2px] bg-cyan-400 animate-pulse" />
            </div>
          </div>

          {/* Concise Professional Bio */}
          <p className="mt-5 max-w-xl text-sm sm:text-base leading-relaxed text-slate-300/90 sm:text-lg">
            {personalInfo.supportingText}
          </p>

          {/* Action Buttons */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 lg:justify-start">
            {/* Primary Action: View Work */}
            <a
              href="#projects"
              className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/45 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-cyan-400"
            >
              <FiEye className="text-base" /> View My Work
            </a>

            {/* Secondary Action: Download Resume */}
            <a
              href={personalInfo.resumeFile}
              download="Moneswar_Sundareswaran_Resume.pdf"
              className="inline-flex items-center gap-2.5 rounded-full border border-cyan-500/30 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:bg-white/[0.08] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-cyan-400"
            >
              <FiDownload className="text-base text-cyan-400" /> Download Resume
            </a>

            {/* Tertiary Action: Contact Me */}
            <a
              href="#contact"
              className="inline-flex items-center gap-2.5 rounded-full border border-purple-500/30 bg-white/[0.03] px-6 py-3 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-purple-400/60 hover:bg-white/[0.07] hover:text-white hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-cyan-400"
            >
              <HiOutlineMail className="text-base text-purple-400" /> Contact Me
            </a>
          </div>

          {/* Minimal Glass Social Icons */}
          <div className="mt-7 flex items-center justify-center gap-3.5 lg:justify-start">
            {[
              {
                icon: FaGithub,
                href: personalInfo.github,
                label: "GitHub Profile",
              },
              {
                icon: FaLinkedin,
                href: personalInfo.linkedin,
                label: "LinkedIn Profile",
              },
              {
                icon: HiOutlineMail,
                href: `mailto:${personalInfo.email}`,
                label: "Send Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-lg text-slate-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/60 hover:bg-white/[0.08] hover:text-cyan-300 shadow-sm"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Column: Large Engineering Command Core & Holographic Module Interface */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto flex flex-col items-center justify-center w-full max-w-[540px] lg:max-w-none"
        >
          {/* Central Engineering Command HUD Container */}
          <div className="relative flex items-center justify-center h-[380px] w-[380px] sm:h-[460px] sm:w-[460px] lg:h-[500px] lg:w-[500px] xl:h-[540px] xl:w-[540px]">
            {/* SVG HUD Circuit Architecture & Radial Track Lines (Desktop Only) */}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 hidden lg:block h-full w-full"
              viewBox="0 0 540 540"
              fill="none"
            >
              {/* Concentric HUD Degree Rings */}
              <circle
                cx="270"
                cy="270"
                r="165"
                stroke="rgba(0, 240, 255, 0.25)"
                strokeWidth="1.2"
                strokeDasharray="6 8"
                className="animate-hud-spin"
              />
              <circle
                cx="270"
                cy="270"
                r="220"
                stroke="rgba(168, 85, 247, 0.2)"
                strokeWidth="1"
                strokeDasharray="4 14"
                className="animate-hud-spin-reverse"
              />

              {/* HUD Cardinal Axis Crosshairs */}
              <line
                x1="270"
                y1="35"
                x2="270"
                y2="70"
                stroke="rgba(0, 240, 255, 0.4)"
                strokeWidth="1.5"
              />
              <line
                x1="270"
                y1="470"
                x2="270"
                y2="505"
                stroke="rgba(0, 240, 255, 0.4)"
                strokeWidth="1.5"
              />
              <line
                x1="35"
                y1="270"
                x2="70"
                y2="270"
                stroke="rgba(0, 240, 255, 0.4)"
                strokeWidth="1.5"
              />
              <line
                x1="470"
                y1="270"
                x2="505"
                y2="270"
                stroke="rgba(0, 240, 255, 0.4)"
                strokeWidth="1.5"
              />

              {/* Dynamic Circuit Traces to 5 Skill Modules */}
              {skillModules.map((mod) => {
                const isHovered = activeModule === mod.id;
                return (
                  <g key={mod.id}>
                    {/* Glowing Connection Track */}
                    <path
                      d={mod.path}
                      stroke={mod.color}
                      strokeWidth={isHovered ? "2.5" : "1.2"}
                      strokeOpacity={isHovered ? "0.95" : "0.35"}
                      className="animate-dash-flow transition-all duration-300"
                    />
                    {/* Glowing Interface Node Point */}
                    <circle
                      cx={mod.nodeCoord.cx}
                      cy={mod.nodeCoord.cy}
                      r={isHovered ? "4.5" : "3"}
                      fill={mod.color}
                      className="transition-all duration-300"
                    />
                    {/* Radar Pulse Halo on Node */}
                    <circle
                      cx={mod.nodeCoord.cx}
                      cy={mod.nodeCoord.cy}
                      r={isHovered ? "9" : "5.5"}
                      stroke={mod.color}
                      strokeWidth="1"
                      strokeOpacity={isHovered ? "0.85" : "0.4"}
                      className="animate-ping"
                      style={{ animationDuration: "3.5s" }}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Giant Radial Spotlight Behind Core */}
            <div
              aria-hidden="true"
              className="absolute inset-4 rounded-full bg-gradient-to-tr from-cyan-500/25 via-blue-500/15 to-purple-500/25 blur-3xl animate-cyber-breath"
            />

            {/* Central Engineering Command Core (Large Portrait Hub) */}
            <div className="relative z-20 group">
              {/* Outer Cyber Shield Frame */}
              <div className="relative h-56 w-56 sm:h-64 sm:w-64 lg:h-72 lg:w-72 xl:h-80 xl:w-80 rounded-[32px] p-1.5 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_50px_-10px_rgba(0,240,255,0.4)] transition-all duration-500 group-hover:shadow-[0_0_70px_-5px_rgba(0,240,255,0.6)]">
                {/* Inner Image Canvas */}
                <div className="relative h-full w-full overflow-hidden rounded-[26px] bg-[#050914]">
                  <img
                    src={profileImg}
                    alt="Moneswar Sundareswaran - Computer Science & Design Undergraduate"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle Holographic Scanline Overlay */}
                  <div className="scanline-overlay absolute inset-0 pointer-events-none opacity-50" />

                  {/* Futuristic HUD Top Header Tag */}
                  <div className="absolute top-2.5 inset-x-3 flex items-center justify-between pointer-events-none">
                    <span className="font-mono text-[9px] font-bold uppercase tracking-wider text-cyan-300 bg-slate-950/80 px-2 py-0.5 rounded border border-cyan-500/30 backdrop-blur-md">
                      SYS_CORE // MS-01
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[9px] font-bold text-emerald-400 bg-slate-950/80 px-2 py-0.5 rounded border border-emerald-500/30 backdrop-blur-md">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      ONLINE
                    </span>
                  </div>

                  {/* Cyber Corner Engineering Brackets */}
                  <span className="absolute bottom-2.5 left-3 text-[12px] font-mono font-bold text-cyan-400/90 leading-none">
                    [ + ]
                  </span>
                  <span className="absolute bottom-2.5 right-3 font-mono text-[9px] font-bold text-slate-400 bg-slate-950/80 px-2 py-0.5 rounded border border-white/10 backdrop-blur-md">
                    CSD // 2027
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Holographic Skill Modules (Integrated around the core) */}
            <div className="hidden lg:block">
              {skillModules.map((mod) => {
                const Icon = mod.icon;
                const isHovered = activeModule === mod.id;

                return (
                  <div
                    key={mod.id}
                    className={`absolute ${mod.desktopPos} ${mod.zIndex} transition-all duration-300`}
                    onMouseEnter={() => setActiveModule(mod.id)}
                    onMouseLeave={() => setActiveModule(null)}
                  >
                    <div
                      className={`group relative flex items-center gap-3 rounded-2xl border px-4 py-2.5 backdrop-blur-xl transition-all duration-300 cursor-pointer shadow-lg ${
                        mod.borderClass
                      } ${mod.bgClass} ${
                        isHovered ? "scale-105 bg-[#060b18]/95 shadow-2xl" : "bg-[#060b18]/85"
                      }`}
                      style={{
                        boxShadow: isHovered
                          ? `0 0 28px ${mod.glowColor}`
                          : undefined,
                      }}
                    >
                      {/* Module Icon Pod */}
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-xl bg-white/[0.08] ${mod.textClass} text-lg shrink-0 border border-white/10`}
                      >
                        <Icon />
                      </span>

                      {/* Module Metadata */}
                      <div className="flex flex-col text-left pr-1">
                        <div className="flex items-center gap-1.5">
                          <span className="font-mono text-[9px] font-semibold text-slate-400 uppercase tracking-wider">
                            {mod.tag}
                          </span>
                          <span
                            className="h-1.5 w-1.5 rounded-full"
                            style={{ backgroundColor: mod.color }}
                          />
                        </div>
                        <span className="font-display text-xs font-bold text-white whitespace-nowrap leading-tight">
                          {mod.title}
                        </span>
                        <span className="text-[10px] font-mono text-slate-300/80 whitespace-nowrap leading-tight">
                          {mod.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile & Tablet Compact HUD Skill Deck (< lg) */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-2.5 w-full lg:hidden">
            {skillModules.map((mod) => {
              const Icon = mod.icon;
              return (
                <div
                  key={mod.id}
                  className={`flex items-center gap-3 rounded-xl border p-2.5 backdrop-blur-lg bg-[#060b18]/90 shadow-md ${mod.borderClass}`}
                >
                  <span
                    className={`flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.08] ${mod.textClass} text-base shrink-0 border border-white/10`}
                  >
                    <Icon />
                  </span>
                  <div className="flex flex-col text-left overflow-hidden">
                    <span className="font-mono text-[9px] text-slate-400 uppercase tracking-wider">
                      {mod.tag}
                    </span>
                    <span className="font-display text-xs font-bold text-white truncate">
                      {mod.title}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Futuristic Minimal Scroll Down Indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll down to About section"
        animate={{ y: [0, 6, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1 text-[11px] font-mono uppercase tracking-widest text-slate-400 transition-colors hover:text-cyan-300"
      >
        <span className="hidden sm:inline tracking-[0.2em]">SCROLL</span>
        <div className="flex h-7 w-4.5 items-start justify-center rounded-full border border-cyan-500/40 p-1 bg-white/[0.02]">
          <motion.span
            animate={{ y: [0, 8, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-1.5 w-1 rounded-full bg-cyan-400"
          />
        </div>
        <FiArrowDown className="text-xs text-cyan-400" />
      </motion.a>
    </section>
  );
};

export default Hero;