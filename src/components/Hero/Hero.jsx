import { useState } from "react";
import { motion } from "framer-motion";
import {
  FiArrowDown,
  FiArrowRight,
  FiDownload,
  FiEye,
  FiCpu,
  FiLayers,
  FiGlobe,
  FiCode,
  FiLayout,
  FiBriefcase,
  FiBookOpen,
  FiAward,
  FiCheckCircle,
} from "react-icons/fi";
import {
  FaGithub,
  FaLinkedin,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiJavascript,
  SiMongodb,
  SiCplusplus,
} from "react-icons/si";
import { HiOutlineMail } from "react-icons/hi";
import { personalInfo } from "../../data/resumeData";
import useTypewriter from "../../hooks/useTypewriter";
import AnimatedBackground from "../shared/AnimatedBackground";
import profileImg from "../../assets/favicon.png";

const roles = [
  "Full-Stack Web Developer",
  "Software Developer",
  "Embedded Systems Enthusiast",
  "UI/UX Designer",
];

// Verified Role Chips with Icons
const roleChips = [
  { label: "Full-Stack Web Developer", icon: FiLayers, color: "text-cyan-300 border-cyan-500/30 bg-cyan-500/10" },
  { label: "Embedded Systems Enthusiast", icon: FiCpu, color: "text-emerald-300 border-emerald-500/30 bg-emerald-500/10" },
  { label: "Software Developer", icon: FiCode, color: "text-purple-300 border-purple-500/30 bg-purple-500/10" },
  { label: "UI/UX Designer", icon: FiLayout, color: "text-pink-300 border-pink-500/30 bg-pink-500/10" },
];

// 4 Compact Information Cards (100% Real Portfolio Data)
const infoCards = [
  {
    icon: FiBriefcase,
    value: "2+ Major Projects",
    label: "FarmDirect & Healthcare",
    color: "text-cyan-400 border-cyan-500/25 bg-cyan-950/30",
  },
  {
    icon: FiBookOpen,
    value: "BE Degree (CSD)",
    label: "Kongu Engg College '27",
    color: "text-blue-400 border-blue-500/25 bg-blue-950/30",
  },
  {
    icon: FiAward,
    value: "4+ Credentials",
    label: "NPTEL, Oracle & Courses",
    color: "text-purple-400 border-purple-500/25 bg-purple-950/30",
  },
  {
    icon: FiCheckCircle,
    value: "Available Now",
    label: "Open to Internships / Jobs",
    color: "text-emerald-400 border-emerald-500/25 bg-emerald-950/30",
  },
];

// 5 Verified Technical Skill Modules (Strictly NO AI/ML)
const skillModules = [
  {
    id: "embedded",
    tag: "MOD // 01",
    title: "Embedded Systems",
    subtitle: "Sensors | IoT | Hardware",
    icon: FiCpu,
    color: "#00ff9d",
    borderClass: "border-emerald-400/50 hover:border-emerald-300",
    bgClass: "bg-[#05111b]/92 hover:bg-[#081a29]",
    textClass: "text-emerald-300",
    glowColor: "rgba(0, 255, 157, 0.45)",
    desktopPos: "top-[-1rem] left-1/2 -translate-x-1/2",
    path: "M 230 135 L 230 55",
    nodeCoord: { cx: 230, cy: 55 },
    floatAnimation: {
      y: [0, -4, 0],
      transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0 },
    },
  },
  {
    id: "mern",
    tag: "MOD // 02",
    title: "MERN Stack",
    subtitle: "Full-Stack Web",
    icon: FiLayers,
    color: "#00f0ff",
    borderClass: "border-cyan-400/50 hover:border-cyan-300",
    bgClass: "bg-[#041220]/92 hover:bg-[#071c32]",
    textClass: "text-cyan-300",
    glowColor: "rgba(0, 240, 255, 0.45)",
    desktopPos: "top-[40%] -left-[1.75rem] xl:-left-[2.25rem]",
    path: "M 115 230 L 40 230",
    nodeCoord: { cx: 40, cy: 230 },
    floatAnimation: {
      y: [0, 4, 0],
      transition: { duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
    },
  },
  {
    id: "web",
    tag: "MOD // 03",
    title: "Web Development",
    subtitle: "Modern Web Apps",
    icon: FiGlobe,
    color: "#38bdf8",
    borderClass: "border-sky-400/50 hover:border-sky-300",
    bgClass: "bg-[#041124]/92 hover:bg-[#071b38]",
    textClass: "text-sky-300",
    glowColor: "rgba(56, 189, 248, 0.45)",
    desktopPos: "top-[40%] -right-[1.75rem] xl:-right-[2.25rem]",
    path: "M 345 230 L 420 230",
    nodeCoord: { cx: 420, cy: 230 },
    floatAnimation: {
      y: [0, -4, 0],
      transition: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
    },
  },
  {
    id: "software",
    tag: "MOD // 04",
    title: "Software Development",
    subtitle: "Clean & Scalable Code",
    icon: FiCode,
    color: "#a855f7",
    borderClass: "border-purple-400/50 hover:border-purple-300",
    bgClass: "bg-[#0c0822]/92 hover:bg-[#150d3c]",
    textClass: "text-purple-300",
    glowColor: "rgba(168, 85, 247, 0.45)",
    desktopPos: "bottom-[0%] left-[2%] xl:left-[5%]",
    path: "M 155 330 L 80 395",
    nodeCoord: { cx: 80, cy: 395 },
    floatAnimation: {
      y: [0, 4, 0],
      transition: { duration: 5.2, repeat: Infinity, ease: "easeInOut", delay: 1.5 },
    },
  },
  {
    id: "uiux",
    tag: "MOD // 05",
    title: "UI/UX Design",
    subtitle: "User-Centric UI",
    icon: FiLayout,
    color: "#ec4899",
    borderClass: "border-pink-400/50 hover:border-pink-300",
    bgClass: "bg-[#18071a]/92 hover:bg-[#270c2b]",
    textClass: "text-pink-300",
    glowColor: "rgba(236, 72, 153, 0.45)",
    desktopPos: "bottom-[0%] right-[2%] xl:right-[5%]",
    path: "M 305 330 L 380 395",
    nodeCoord: { cx: 380, cy: 395 },
    floatAnimation: {
      y: [0, -4, 0],
      transition: { duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 2 },
    },
  },
];

// Floating Supporting Tech Badges
const techBadges = [
  { icon: FaReact, name: "React", color: "#00f0ff", pos: "top-[14%] left-[6%]" },
  { icon: FaNodeJs, name: "Node.js", color: "#10b981", pos: "top-[14%] right-[6%]" },
  { icon: SiJavascript, name: "JavaScript", color: "#f59e0b", pos: "bottom-[24%] left-[2%]" },
  { icon: SiMongodb, name: "MongoDB", color: "#22c55e", pos: "bottom-[24%] right-[2%]" },
  { icon: FaGitAlt, name: "Git", color: "#f97316", pos: "top-[5%] left-[26%]" },
  { icon: SiCplusplus, name: "C++", color: "#3b82f6", pos: "bottom-[5%] left-[45%]" },
];

/**
 * Hero
 * Futuristic Engineering Command Ecosystem & Holographic HUD Showcase.
 * Perfectly balanced 48/52 desktop grid, zero viewport clipping, proper navbar offset,
 * compact factual metric cards, and verified career highlights.
 */
const Hero = () => {
  const typedRole = useTypewriter(roles, { pause: 1600 });
  const [activeModule, setActiveModule] = useState(null);

  return (
    <section
      id="home"
      className="relative flex min-h-[calc(100vh-4.5rem)] items-center overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-24 lg:pb-12"
    >
      <AnimatedBackground />

      <div className="mx-auto w-full max-w-[1400px] px-6 sm:px-10 lg:px-12 xl:px-16 relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[48fr_52fr] lg:gap-8 xl:gap-12">
          {/* Left Column (48%): Headline, Chips, Bio, Info Cards, Buttons & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Opportunity Status Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-cyan-500/35 bg-cyan-500/10 px-3.5 py-1 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest text-cyan-300 backdrop-blur-md shadow-sm"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              OPEN TO INTERNSHIPS &amp; JOB OPPORTUNITIES
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl md:text-[2.75rem] lg:text-[3rem] xl:text-[3.45rem] font-extrabold leading-[1.08] text-white"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
                Moneswar
              </span>
              .<br />
              Building practical{" "}
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                software
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-emerald-400 bg-clip-text text-transparent">
                hardware
              </span>{" "}
              solutions.
            </motion.h1>

            {/* Degree & Animated Role Line */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18 }}
              className="mt-2.5 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm font-mono font-medium text-slate-300"
            >
              <span className="inline-flex items-center gap-1.5 text-cyan-300 font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                BE Computer Science and Design
              </span>
              <span className="hidden sm:inline text-slate-500">•</span>
              <div className="flex items-center min-w-[180px]">
                <span className="text-slate-200">{typedRole}</span>
                <span className="ml-1 inline-block h-3.5 w-[2px] bg-cyan-400 animate-pulse" />
              </div>
            </motion.div>

            {/* Role Chips */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24 }}
              className="mt-2.5 flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 lg:justify-start"
            >
              {roleChips.map((chip) => {
                const Icon = chip.icon;
                return (
                  <span
                    key={chip.label}
                    className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-0.5 font-mono text-[10.5px] sm:text-[11px] font-medium backdrop-blur-md transition-all duration-300 hover:scale-105 ${chip.color}`}
                  >
                    <Icon className="text-xs" />
                    {chip.label}
                  </span>
                );
              })}
            </motion.div>

            {/* Concise Description */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="mt-3.5 max-w-[580px] text-xs sm:text-sm leading-relaxed text-slate-300/90"
            >
              {personalInfo.supportingText}
            </motion.p>

            {/* 4 Compact Real Info Cards (Single Row on Desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.36 }}
              className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 w-full max-w-[580px]"
            >
              {infoCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.value}
                    className={`flex flex-col items-start rounded-xl border p-2 backdrop-blur-md shadow-sm transition-all duration-300 hover:scale-105 ${card.color}`}
                  >
                    <Icon className="text-sm mb-0.5" />
                    <span className="font-display text-[11px] sm:text-xs font-bold text-white whitespace-nowrap">
                      {card.value}
                    </span>
                    <span className="font-mono text-[8.5px] sm:text-[9px] text-slate-300/80 truncate w-full">
                      {card.label}
                    </span>
                  </div>
                );
              })}
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.42 }}
              className="mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 lg:justify-start"
            >
              {/* Primary: View My Work */}
              <a
                href="#projects"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/45 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-cyan-400"
              >
                <FiEye className="text-sm" /> View My Work <FiArrowRight className="text-xs" />
              </a>

              {/* Secondary: Download Resume */}
              <a
                href={personalInfo.resumeFile}
                download="Moneswar_Sundareswaran_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-white/[0.04] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:bg-white/[0.08] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-cyan-400"
              >
                <FiDownload className="text-sm text-cyan-400" /> Download Resume
              </a>

              {/* Tertiary: Contact Me */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-purple-500/30 bg-white/[0.03] px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-purple-400/60 hover:bg-white/[0.07] hover:text-white hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-cyan-400"
              >
                <HiOutlineMail className="text-sm text-purple-400" /> Contact Me <FiArrowRight className="text-xs" />
              </a>
            </motion.div>

            {/* Minimal Glass Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.48 }}
              className="mt-4 flex items-center justify-center gap-3 lg:justify-start"
            >
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
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-base text-slate-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-cyan-400/60 hover:bg-white/[0.08] hover:text-cyan-300 shadow-sm"
                >
                  <Icon />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column (52%): Main Holographic Engineering Core & Skill Ecosystem */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
            className="relative mx-auto flex flex-col items-center justify-center w-full max-w-[460px] lg:max-w-none"
          >
            {/* Central Engineering Command HUD Container */}
            <div className="relative flex items-center justify-center h-[340px] w-[340px] sm:h-[390px] sm:w-[390px] lg:h-[430px] lg:w-[430px] xl:h-[460px] xl:w-[460px]">
              {/* SVG HUD Circuit Architecture & Radial Orbit Track Lines (Desktop Only) */}
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 hidden lg:block h-full w-full"
                viewBox="0 0 460 460"
                fill="none"
              >
                {/* Concentric Rotating HUD Orbit Rings */}
                <circle
                  cx="230"
                  cy="230"
                  r="135"
                  stroke="rgba(0, 240, 255, 0.22)"
                  strokeWidth="1.2"
                  strokeDasharray="6 8"
                  className="animate-hud-spin"
                />
                <circle
                  cx="230"
                  cy="230"
                  r="180"
                  stroke="rgba(168, 85, 247, 0.18)"
                  strokeWidth="1"
                  strokeDasharray="4 12"
                  className="animate-hud-spin-reverse"
                />
                <circle
                  cx="230"
                  cy="230"
                  r="215"
                  stroke="rgba(56, 189, 248, 0.12)"
                  strokeWidth="1"
                  strokeDasharray="2 10"
                />

                {/* HUD Cardinal Axis Crosshairs */}
                <line
                  x1="230"
                  y1="25"
                  x2="230"
                  y2="55"
                  stroke="rgba(0, 240, 255, 0.4)"
                  strokeWidth="1.5"
                />
                <line
                  x1="230"
                  y1="405"
                  x2="230"
                  y2="435"
                  stroke="rgba(0, 240, 255, 0.4)"
                  strokeWidth="1.5"
                />
                <line
                  x1="25"
                  y1="230"
                  x2="55"
                  y2="230"
                  stroke="rgba(0, 240, 255, 0.4)"
                  strokeWidth="1.5"
                />
                <line
                  x1="405"
                  y1="230"
                  x2="435"
                  y2="230"
                  stroke="rgba(0, 240, 255, 0.4)"
                  strokeWidth="1.5"
                />

                {/* Circuit Traces to 5 Skill Modules */}
                {skillModules.map((mod) => {
                  const isHovered = activeModule === mod.id;
                  return (
                    <g key={mod.id}>
                      {/* Connection Track Path */}
                      <path
                        d={mod.path}
                        stroke={mod.color}
                        strokeWidth={isHovered ? "2.5" : "1.2"}
                        strokeOpacity={isHovered ? "0.95" : "0.35"}
                        className="animate-dash-flow transition-all duration-300"
                      />
                      {/* Interface Node Point */}
                      <circle
                        cx={mod.nodeCoord.cx}
                        cy={mod.nodeCoord.cy}
                        r={isHovered ? "4" : "2.8"}
                        fill={mod.color}
                        className="transition-all duration-300"
                      />
                      {/* Node Pulse Ring */}
                      <circle
                        cx={mod.nodeCoord.cx}
                        cy={mod.nodeCoord.cy}
                        r={isHovered ? "8" : "5"}
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

              {/* Ambient Spotlight Behind Core */}
              <div
                aria-hidden="true"
                className="absolute inset-4 rounded-full bg-gradient-to-tr from-cyan-500/25 via-blue-500/15 to-purple-500/25 blur-3xl animate-cyber-breath"
              />

              {/* Decorative Floating Technology Badges (Desktop Only) */}
              <div className="hidden xl:block pointer-events-none">
                {techBadges.map((badge, idx) => {
                  const Icon = badge.icon;
                  return (
                    <motion.div
                      key={badge.name}
                      animate={{
                        y: idx % 2 === 0 ? [0, -5, 0] : [0, 5, 0],
                        opacity: [0.65, 0.95, 0.65],
                      }}
                      transition={{
                        duration: 4 + idx * 0.5,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: idx * 0.3,
                      }}
                      className={`absolute ${badge.pos} z-10 flex h-6.5 w-6.5 items-center justify-center rounded-full border border-white/10 bg-[#070d1e]/85 shadow-sm backdrop-blur-md`}
                      style={{ color: badge.color }}
                    >
                      <Icon className="text-[11px]" />
                    </motion.div>
                  );
                })}
              </div>

              {/* Central Large Circular Profile Core */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20 group"
              >
                {/* Outer Circular Neon Shield Frame */}
                <div className="relative h-48 w-48 sm:h-56 sm:w-56 lg:h-60 lg:w-60 xl:h-68 xl:w-68 rounded-full p-1 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_40px_-8px_rgba(0,240,255,0.4)] transition-all duration-500 group-hover:shadow-[0_0_55px_-5px_rgba(0,240,255,0.6)]">
                  {/* Inner Circular Canvas */}
                  <div className="relative h-full w-full overflow-hidden rounded-full bg-[#050914]">
                    <img
                      src={profileImg}
                      alt="Moneswar Sundareswaran - Computer Science & Design Undergraduate"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                      loading="eager"
                    />
                    {/* Subtle Holographic Scanline Overlay */}
                    <div className="scanline-overlay absolute inset-0 pointer-events-none opacity-35" />

                    {/* Top HUD Status Tag */}
                    <div className="absolute top-2.5 inset-x-3 flex items-center justify-between pointer-events-none">
                      <span className="font-mono text-[8px] font-bold uppercase tracking-wider text-cyan-300 bg-slate-950/85 px-1.5 py-0.5 rounded-full border border-cyan-500/30 backdrop-blur-md">
                        SYS_CORE // MS-01
                      </span>
                      <span className="flex items-center gap-1 font-mono text-[8px] font-bold text-emerald-400 bg-slate-950/85 px-1.5 py-0.5 rounded-full border border-emerald-500/30 backdrop-blur-md">
                        <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
                        ONLINE
                      </span>
                    </div>

                    {/* Bottom HUD Tag */}
                    <div className="absolute bottom-2.5 inset-x-0 flex justify-center pointer-events-none">
                      <span className="font-mono text-[8.5px] font-bold text-slate-300 bg-slate-950/85 px-2.5 py-0.5 rounded-full border border-white/15 backdrop-blur-md">
                        CSD // 2027
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Desktop Holographic Skill Modules (Staggered Floating & Hover Glow) */}
              <div className="hidden lg:block">
                {skillModules.map((mod) => {
                  const Icon = mod.icon;
                  const isHovered = activeModule === mod.id;

                  return (
                    <motion.div
                      key={mod.id}
                      animate={mod.floatAnimation}
                      className={`absolute ${mod.desktopPos} z-30 transition-all duration-300`}
                      onMouseEnter={() => setActiveModule(mod.id)}
                      onMouseLeave={() => setActiveModule(null)}
                    >
                      <div
                        className={`group relative flex items-center gap-2.5 rounded-2xl border px-3 py-2 backdrop-blur-xl transition-all duration-300 cursor-pointer shadow-md ${
                          mod.borderClass
                        } ${mod.bgClass} ${
                          isHovered
                            ? "scale-105 bg-[#060e1c]/95 shadow-xl"
                            : "bg-[#060e1c]/88"
                        }`}
                        style={{
                          boxShadow: isHovered
                            ? `0 0 22px ${mod.glowColor}`
                            : undefined,
                        }}
                      >
                        {/* Module Icon Pod */}
                        <span
                          className={`flex h-7 w-7 items-center justify-center rounded-lg bg-white/[0.08] ${mod.textClass} text-base shrink-0 border border-white/10`}
                        >
                          <Icon />
                        </span>

                        {/* Module Metadata */}
                        <div className="flex flex-col text-left pr-1">
                          <div className="flex items-center gap-1.5">
                            <span className="font-mono text-[8.5px] font-semibold text-slate-400 uppercase tracking-wider">
                              {mod.tag}
                            </span>
                            <span
                              className="h-1 w-1 rounded-full"
                              style={{ backgroundColor: mod.color }}
                            />
                          </div>
                          <span className="font-display text-[11.5px] font-bold text-white whitespace-nowrap leading-tight">
                            {mod.title}
                          </span>
                          <span className="text-[9px] font-mono text-slate-300/80 whitespace-nowrap leading-tight">
                            {mod.subtitle}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Mobile & Tablet Compact HUD Skill Deck (< lg) */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 w-full lg:hidden">
              {skillModules.map((mod) => {
                const Icon = mod.icon;
                return (
                  <div
                    key={mod.id}
                    className={`flex items-center gap-2.5 rounded-xl border p-2 backdrop-blur-lg bg-[#060e1c]/90 shadow-sm ${mod.borderClass}`}
                  >
                    <span
                      className={`flex h-6.5 w-6.5 items-center justify-center rounded-lg bg-white/[0.08] ${mod.textClass} text-sm shrink-0 border border-white/10`}
                    >
                      <Icon />
                    </span>
                    <div className="flex flex-col text-left overflow-hidden">
                      <span className="font-mono text-[8.5px] text-slate-400 uppercase tracking-wider">
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
      </div>

      {/* Futuristic Minimal Scroll Down Indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll down to About section"
        animate={{ y: [0, 5, 0] }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-3 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1 text-[10px] font-mono uppercase tracking-widest text-slate-400 transition-colors hover:text-cyan-300"
      >
        <span className="hidden sm:inline tracking-[0.2em]">SCROLL</span>
        <div className="flex h-6 w-4 items-start justify-center rounded-full border border-cyan-500/40 p-0.5 bg-white/[0.02]">
          <motion.span
            animate={{ y: [0, 6, 0], opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-1 w-1 rounded-full bg-cyan-400"
          />
        </div>
        <FiArrowDown className="text-[11px] text-cyan-400" />
      </motion.a>
    </section>
  );
};

export default Hero;