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

// 5 Verified Technical Skill Nodes (Strictly NO AI/ML)
const skillNodes = [
  {
    id: "embedded",
    title: "Embedded Systems",
    subtitle: "Sensors & Hardware",
    icon: FiCpu,
    color: "#10b981",
    themeClass: "border-emerald-500/40 bg-emerald-500/10 text-emerald-400 shadow-emerald-500/20",
    glowColor: "rgba(16, 185, 129, 0.5)",
    desktopStyle: { top: "-1.75rem", left: "50%", transform: "translateX(-50%)" },
    path: "M 250 140 L 250 55",
    nodeCoord: { cx: 250, cy: 55 },
    floatClass: "animate-float-gentle",
  },
  {
    id: "mern",
    title: "MERN Stack",
    subtitle: "Full-Stack Web",
    icon: FiLayers,
    color: "#00f0ff",
    themeClass: "border-cyan-500/40 bg-cyan-500/10 text-cyan-300 shadow-cyan-500/20",
    glowColor: "rgba(0, 240, 255, 0.5)",
    desktopStyle: { top: "22%", left: "-2.5rem" },
    path: "M 155 220 L 75 160",
    nodeCoord: { cx: 75, cy: 160 },
    floatClass: "animate-float-reverse-gentle",
  },
  {
    id: "web",
    title: "Web Dev",
    subtitle: "Modern Experiences",
    icon: FiGlobe,
    color: "#38bdf8",
    themeClass: "border-sky-500/40 bg-sky-500/10 text-sky-300 shadow-sky-500/20",
    glowColor: "rgba(56, 189, 248, 0.5)",
    desktopStyle: { top: "22%", right: "-2.5rem" },
    path: "M 345 220 L 425 160",
    nodeCoord: { cx: 425, cy: 160 },
    floatClass: "animate-float-gentle",
  },
  {
    id: "software",
    title: "Software Dev",
    subtitle: "Clean Architecture",
    icon: FiCode,
    color: "#a855f7",
    themeClass: "border-purple-500/40 bg-purple-500/10 text-purple-300 shadow-purple-500/20",
    glowColor: "rgba(168, 85, 247, 0.5)",
    desktopStyle: { bottom: "-0.5rem", left: "-1.5rem" },
    path: "M 165 310 L 95 385",
    nodeCoord: { cx: 95, cy: 385 },
    floatClass: "animate-float-reverse-gentle",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    subtitle: "User-Centric UI",
    icon: FiLayout,
    color: "#ec4899",
    themeClass: "border-pink-500/40 bg-pink-500/10 text-pink-300 shadow-pink-500/20",
    glowColor: "rgba(236, 72, 153, 0.5)",
    desktopStyle: { bottom: "-0.5rem", right: "-1.5rem" },
    path: "M 335 310 L 405 385",
    nodeCoord: { cx: 405, cy: 385 },
    floatClass: "animate-float-gentle",
  },
];

/**
 * Hero
 * Futuristic Engineering Ecosystem Showcase.
 * Replaces generic dashboard cards with an interactive digital orbital skill universe
 * centered around Moneswar's holographic profile frame.
 */
const Hero = () => {
  const typedRole = useTypewriter(roles, { pause: 1600 });
  const [activeNode, setActiveNode] = useState(null);

  return (
    <section
      id="home"
      className="relative flex min-h-[96vh] items-center overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28"
    >
      <AnimatedBackground />

      <div className="container-px relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-10 xl:gap-14">
        {/* Left Column: Headline, Bio, CTAs & Socials */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          {/* Status Badge */}
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full border border-cyan-500/35 bg-cyan-500/10 px-4 py-1.5 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest text-cyan-300 backdrop-blur-md shadow-lg shadow-cyan-500/10">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400"></span>
            </span>
            OPEN TO INTERNSHIPS &amp; JOB OPPORTUNITIES
          </div>

          {/* Main Heading */}
          <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.35rem] xl:text-[3.65rem] font-extrabold leading-[1.15] text-white">
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

          {/* Degree & Typewriter Role */}
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

          {/* Social Icon Links */}
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

        {/* Right Column: Engineering Ecosystem & Orbital Skill Universe */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto flex flex-col items-center justify-center w-full max-w-[500px] lg:max-w-none"
        >
          {/* Central Holographic Orbit Hub Container */}
          <div className="relative flex items-center justify-center h-[340px] w-[340px] sm:h-[400px] sm:w-[400px] lg:h-[460px] lg:w-[460px] xl:h-[500px] xl:w-[500px]">
            {/* SVG Circuit Traces & Orbital Rings (Desktop Only) */}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 hidden lg:block h-full w-full"
              viewBox="0 0 500 500"
              fill="none"
            >
              {/* Concentric Holographic Tech Orbit Rings */}
              <circle
                cx="250"
                cy="250"
                r="135"
                stroke="rgba(0, 240, 255, 0.2)"
                strokeWidth="1.2"
                strokeDasharray="4 8"
                className="animate-spin [animation-duration:40s]"
              />
              <circle
                cx="250"
                cy="250"
                r="190"
                stroke="rgba(168, 85, 247, 0.15)"
                strokeWidth="1"
                strokeDasharray="6 12"
                className="animate-spin [animation-duration:55s] [animation-direction:reverse]"
              />

              {/* Dynamic Circuit Traces to 5 Skill Nodes */}
              {skillNodes.map((node) => {
                const isHovered = activeNode === node.id;
                return (
                  <g key={node.id}>
                    {/* Glowing Connection Path */}
                    <path
                      d={node.path}
                      stroke={node.color}
                      strokeWidth={isHovered ? "2.5" : "1.2"}
                      strokeOpacity={isHovered ? "0.9" : "0.35"}
                      className="animate-dash-flow transition-all duration-300"
                    />
                    {/* Glowing Connection Point Node */}
                    <circle
                      cx={node.nodeCoord.cx}
                      cy={node.nodeCoord.cy}
                      r={isHovered ? "4.5" : "3"}
                      fill={node.color}
                      className="transition-all duration-300"
                    />
                    {/* Outer Pulse Halo on Connection Point */}
                    <circle
                      cx={node.nodeCoord.cx}
                      cy={node.nodeCoord.cy}
                      r={isHovered ? "8" : "5"}
                      stroke={node.color}
                      strokeWidth="1"
                      strokeOpacity={isHovered ? "0.8" : "0.4"}
                      className="animate-ping"
                      style={{ animationDuration: "3s" }}
                    />
                  </g>
                );
              })}
            </svg>

            {/* Ambient Radial Spotlight Behind Profile */}
            <div
              aria-hidden="true"
              className="absolute inset-8 rounded-full bg-gradient-to-tr from-cyan-500/20 via-blue-500/10 to-purple-500/20 blur-3xl animate-cyber-pulse"
            />

            {/* Central Framed Profile Portrait */}
            <div className="relative z-20 group">
              {/* Outer Cyber Frame */}
              <div className="relative h-44 w-44 sm:h-52 sm:w-52 lg:h-56 lg:w-56 xl:h-60 xl:w-60 rounded-3xl p-1 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_40px_-10px_rgba(0,240,255,0.35)] transition-all duration-500 group-hover:shadow-[0_0_55px_-5px_rgba(0,240,255,0.5)]">
                {/* Inner Image Container */}
                <div className="relative h-full w-full overflow-hidden rounded-[22px] bg-[#070b14]">
                  <img
                    src={profileImg}
                    alt="Moneswar Sundareswaran - Computer Science & Design Undergraduate"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle Scanline Overlay */}
                  <div className="scanline-overlay absolute inset-0 pointer-events-none opacity-40" />

                  {/* Cyber Corner Engineering Brackets */}
                  <span className="absolute top-2 left-2 text-[11px] font-mono font-bold text-cyan-400/90 leading-none">
                    ┌
                  </span>
                  <span className="absolute top-2 right-2 text-[11px] font-mono font-bold text-cyan-400/90 leading-none">
                    ┐
                  </span>
                  <span className="absolute bottom-2 left-2 text-[11px] font-mono font-bold text-cyan-400/90 leading-none">
                    └
                  </span>
                  <span className="absolute bottom-2 right-2 text-[11px] font-mono font-bold text-cyan-400/90 leading-none">
                    ┘
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Holographic Skill Nodes (Orbiting around the hub) */}
            <div className="hidden lg:block">
              {skillNodes.map((node) => {
                const Icon = node.icon;
                const isHovered = activeNode === node.id;

                return (
                  <div
                    key={node.id}
                    style={node.desktopStyle}
                    onMouseEnter={() => setActiveNode(node.id)}
                    onMouseLeave={() => setActiveNode(null)}
                    className={`absolute z-30 ${node.floatClass}`}
                  >
                    <div
                      className={`group relative flex items-center gap-2.5 rounded-full border px-3.5 py-1.5 backdrop-blur-xl transition-all duration-300 cursor-pointer ${
                        node.themeClass
                      } ${
                        isHovered
                          ? "scale-108 bg-[#090f22] border-opacity-100 shadow-xl"
                          : "bg-[#070c1a]/90 hover:scale-105"
                      }`}
                      style={{
                        boxShadow: isHovered
                          ? `0 0 25px ${node.glowColor}`
                          : undefined,
                      }}
                    >
                      {/* Node Icon Capsule */}
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/[0.08] text-base shrink-0">
                        <Icon />
                      </span>

                      {/* Node Title & Micro-Subtitle */}
                      <div className="flex flex-col text-left pr-1">
                        <span className="font-display text-xs font-bold text-white whitespace-nowrap leading-tight">
                          {node.title}
                        </span>
                        <span className="text-[9px] font-mono text-slate-300/80 whitespace-nowrap leading-tight">
                          {node.subtitle}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile & Tablet Compact Holographic Skill Deck (< lg) */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5 w-full lg:hidden">
            {skillNodes.map((node) => {
              const Icon = node.icon;
              return (
                <div
                  key={node.id}
                  className={`flex items-center gap-2 rounded-full border px-3 py-1.5 backdrop-blur-lg bg-[#070c1a]/90 shadow-md ${node.themeClass}`}
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/[0.08] text-sm shrink-0">
                    <Icon />
                  </span>
                  <div className="flex flex-col text-left pr-1">
                    <span className="font-display text-xs font-bold text-white whitespace-nowrap">
                      {node.title}
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