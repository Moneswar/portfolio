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
  FiTerminal,
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
  "Embedded Systems Enthusiast",
  "Software Developer",
  "UI/UX Designer",
];

// Verified Role Chips with Icons (Arranged in 2 Rows on Desktop)
const row1Chips = [
  { label: "Full-Stack Web Developer", icon: FiLayers, color: "text-cyan-300 border-cyan-500/35 bg-cyan-500/10" },
  { label: "Embedded Systems Enthusiast", icon: FiCpu, color: "text-emerald-300 border-emerald-500/35 bg-emerald-500/10" },
  { label: "Software Developer", icon: FiCode, color: "text-purple-300 border-purple-500/35 bg-purple-500/10" },
];

const row2Chips = [
  { label: "UI/UX Designer", icon: FiLayout, color: "text-pink-300 border-pink-500/35 bg-pink-500/10" },
];

// 4 Compact Information Cards (100% Real Portfolio Data)
const infoCards = [
  {
    icon: FiBriefcase,
    value: "2+ Major Projects",
    label: "FarmDirect & Healthcare",
    color: "text-cyan-400 border-cyan-500/30 bg-cyan-950/30",
  },
  {
    icon: FiBookOpen,
    value: "BE (CSD) Degree",
    label: "Kongu Engg College '27",
    color: "text-blue-400 border-blue-500/30 bg-blue-950/30",
  },
  {
    icon: FiAward,
    value: "4+ Credentials",
    label: "NPTEL, Oracle & Courses",
    color: "text-purple-400 border-purple-500/30 bg-purple-950/30",
  },
  {
    icon: FiCheckCircle,
    value: "Available Now",
    label: "Open to Internships / Jobs",
    color: "text-emerald-400 border-emerald-500/30 bg-emerald-950/30",
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
    desktopPos: "top-[-1.5rem] left-1/2 -translate-x-1/2",
    path: "M 290 165 L 290 80",
    nodeCoord: { cx: 290, cy: 80 },
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
    desktopPos: "top-[40%] -left-[2.75rem] xl:-left-[3.25rem]",
    path: "M 150 290 L 55 290",
    nodeCoord: { cx: 55, cy: 290 },
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
    desktopPos: "top-[40%] -right-[2.75rem] xl:-right-[3.25rem]",
    path: "M 430 290 L 525 290",
    nodeCoord: { cx: 525, cy: 290 },
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
    path: "M 200 410 L 110 485",
    nodeCoord: { cx: 110, cy: 485 },
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
    path: "M 380 410 L 470 485",
    nodeCoord: { cx: 470, cy: 485 },
    floatAnimation: {
      y: [0, -4, 0],
      transition: { duration: 5.8, repeat: Infinity, ease: "easeInOut", delay: 2 },
    },
  },
];

// Floating Supporting Tech Badges
const techBadges = [
  { icon: FaReact, name: "React", color: "#00f0ff", pos: "top-[12%] left-[4%]" },
  { icon: FaNodeJs, name: "Node.js", color: "#10b981", pos: "top-[12%] right-[4%]" },
  { icon: SiJavascript, name: "JavaScript", color: "#f59e0b", pos: "bottom-[22%] left-[1%]" },
  { icon: SiMongodb, name: "MongoDB", color: "#22c55e", pos: "bottom-[22%] right-[1%]" },
  { icon: FaGitAlt, name: "Git", color: "#f97316", pos: "top-[2%] left-[22%]" },
  { icon: SiCplusplus, name: "C++", color: "#3b82f6", pos: "bottom-[3%] left-[46%]" },
];

/**
 * Hero
 * Engineering / Developer Command Center Portfolio Hero.
 * Reproduces the exact visual composition, proportions, hierarchy, and futuristic aesthetic
 * of the primary reference design.
 */
const Hero = () => {
  const typedRole = useTypewriter(roles, { pause: 1600 });
  const [activeModule, setActiveModule] = useState(null);

  return (
    <section
      id="home"
      className="relative flex min-h-[100vh] items-center overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-16 lg:pt-24 lg:pb-12"
    >
      <AnimatedBackground />

      <div className="mx-auto w-full max-w-[1440px] px-4 sm:px-8 lg:px-10 xl:px-12 relative z-10">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[44fr_56fr] lg:gap-8 xl:gap-12">
          {/* Left Column (44%): Status, Headline, Degree, Role Chips, Description, Metrics, CTA & Socials */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: "easeOut" }}
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
          >
            {/* Top Status Pill */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, delay: 0.05 }}
              className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/35 bg-cyan-500/10 px-3.5 py-1 font-mono text-[11px] sm:text-xs font-bold uppercase tracking-widest text-cyan-300 backdrop-blur-md shadow-[0_0_15px_-3px_rgba(0,240,255,0.25)]"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              OPEN TO INTERNSHIPS &amp; JOB OPPORTUNITIES
            </motion.div>

            {/* Main Headline (Exact 4-line Composition, Controlled 56-62px Desktop) */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="font-display text-3xl sm:text-4xl md:text-[2.65rem] lg:text-[2.85rem] xl:text-[3.25rem] font-extrabold leading-[1.05] tracking-tight text-white"
            >
              Hi, I'm{" "}
              <span className="bg-gradient-to-r from-cyan-400 via-sky-300 to-purple-400 bg-clip-text text-transparent">
                Moneswar.
              </span>
              <br />
              Building practical
              <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                software
              </span>{" "}
              and{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-emerald-400 bg-clip-text text-transparent">
                hardware
              </span>
              <br />
              solutions.
            </motion.h1>

            {/* Degree & Animated Role Line (1 line on desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.18 }}
              className="mt-3 flex flex-wrap items-center justify-center lg:justify-start gap-2 text-xs sm:text-sm font-mono font-medium text-slate-300"
            >
              <span className="inline-flex items-center gap-1.5 text-cyan-300 font-semibold">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                BE Computer Science and Design
              </span>
              <span className="text-slate-500 font-bold">|</span>
              <div className="flex items-center min-w-[180px]">
                <span className="text-slate-200">{typedRole}</span>
                <span className="ml-1 inline-block h-3.5 w-[2px] bg-cyan-400 animate-pulse" />
              </div>
            </motion.div>

            {/* Role Chips (2 Rows on Desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.24 }}
              className="mt-3 flex flex-col gap-1.5 items-center lg:items-start"
            >
              {/* Row 1 */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 lg:justify-start">
                {row1Chips.map((chip) => {
                  const Icon = chip.icon;
                  return (
                    <span
                      key={chip.label}
                      className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-0.5 font-mono text-[10.5px] sm:text-[11px] font-medium backdrop-blur-md transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 ${chip.color}`}
                    >
                      <Icon className="text-xs" />
                      {chip.label}
                    </span>
                  );
                })}
              </div>

              {/* Row 2 */}
              <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 lg:justify-start">
                {row2Chips.map((chip) => {
                  const Icon = chip.icon;
                  return (
                    <span
                      key={chip.label}
                      className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-0.5 font-mono text-[10.5px] sm:text-[11px] font-medium backdrop-blur-md transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 ${chip.color}`}
                    >
                      <Icon className="text-xs" />
                      {chip.label}
                    </span>
                  );
                })}
              </div>
            </motion.div>

            {/* Description (Factual, 520-570px wide) */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.3 }}
              className="mt-3.5 max-w-[550px] text-xs sm:text-[14px] leading-relaxed text-slate-300/90"
            >
              Computer Science and Design undergraduate with hands-on experience in full-stack web development, embedded systems, and UI/UX design. Interested in building practical, user-focused solutions that combine software, hardware, and modern web technologies.
            </motion.p>

            {/* 4 Compact Real Info Cards (Single Row on Desktop, Equal Height 95-105px & Width) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.36 }}
              className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 w-full max-w-[560px]"
            >
              {infoCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.value}
                    className={`flex flex-col items-start justify-center min-h-[85px] sm:min-h-[92px] rounded-xl border p-2.5 backdrop-blur-md shadow-sm transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 ${card.color}`}
                  >
                    <Icon className="text-base mb-1" />
                    <span className="font-display text-xs sm:text-[13px] font-bold text-white whitespace-nowrap">
                      {card.value}
                    </span>
                    <span className="font-mono text-[9px] sm:text-[9.5px] text-slate-300/85 truncate w-full mt-0.5">
                      {card.label}
                    </span>
                  </div>
                );
              })}
            </motion.div>

            {/* Action Buttons (1 Row on Desktop) */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.42 }}
              className="mt-4.5 sm:mt-5 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 lg:justify-start"
            >
              {/* Primary: View My Work */}
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/45 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-cyan-400"
              >
                <FiEye className="text-sm" /> View My Work{" "}
                <FiArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
              </a>

              {/* Secondary: Download Resume */}
              <a
                href={personalInfo.resumeFile}
                download="Moneswar_Sundareswaran_Resume.pdf"
                className="inline-flex items-center gap-2 rounded-full border border-cyan-500/35 bg-white/[0.04] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-sm backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:bg-white/[0.08] hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-cyan-400"
              >
                <FiDownload className="text-sm text-cyan-400" /> Download Resume
              </a>

              {/* Tertiary: Contact Me */}
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full border border-purple-500/35 bg-white/[0.03] px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-purple-400/60 hover:bg-white/[0.07] hover:text-white hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-cyan-400"
              >
                <HiOutlineMail className="text-sm text-purple-400" /> Contact Me{" "}
                <FiArrowRight className="text-xs transition-transform duration-200 group-hover:translate-x-1" />
              </a>
            </motion.div>

            {/* Minimal Glass Social Icons */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.45, delay: 0.48 }}
              className="mt-3.5 sm:mt-4 flex items-center justify-center gap-3 lg:justify-start"
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
                  className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-base text-slate-300 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:-translate-y-0.5 hover:border-cyan-400/60 hover:bg-white/[0.08] hover:text-cyan-300 shadow-sm"
                >
                  <Icon />
                </a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column (56%): Unified Relative Holographic Engineering Ecosystem Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}
            className="relative mx-auto flex flex-col items-center justify-center w-full max-w-[580px] lg:max-w-none"
          >
            {/* Single Relative Coordinate Canvas (580x580) */}
            <div className="relative flex items-center justify-center h-[380px] w-[380px] sm:h-[440px] sm:w-[440px] lg:h-[500px] lg:w-[500px] xl:h-[580px] xl:w-[580px]">
              {/* Upper-Right Floating IDE Code Panel */}
              <div className="hidden xl:block absolute -top-6 -right-2 z-10 w-56 rounded-xl border border-cyan-500/30 bg-[#050a18]/90 p-2.5 backdrop-blur-md shadow-lg shadow-cyan-500/10 pointer-events-none opacity-90 animate-float-gentle">
                <div className="flex items-center justify-between border-b border-white/10 pb-1.5 mb-1.5">
                  <div className="flex items-center gap-1">
                    <span className="h-2 w-2 rounded-full bg-rose-500/80" />
                    <span className="h-2 w-2 rounded-full bg-amber-500/80" />
                    <span className="h-2 w-2 rounded-full bg-emerald-500/80" />
                  </div>
                  <div className="flex items-center gap-1 font-mono text-[8.5px] text-cyan-400 font-semibold">
                    <FiTerminal className="text-[10px]" />
                    <span>engineer.js</span>
                  </div>
                </div>
                <div className="font-mono text-[9px] leading-relaxed text-slate-300/90">
                  <span className="text-purple-400">const</span>{" "}
                  <span className="text-cyan-300">developer</span> = &#123;<br />
                  &nbsp;&nbsp;name: <span className="text-emerald-300">"Moneswar"</span>,<br />
                  &nbsp;&nbsp;degree: <span className="text-amber-300">"BE (CSD)"</span>,<br />
                  &nbsp;&nbsp;skills: [<span className="text-sky-300">"Full-Stack"</span>, <span className="text-purple-300">"Embedded"</span>],<br />
                  &nbsp;&nbsp;status: <span className="text-emerald-400 font-bold">"Open to Work"</span><br />
                  &#125;;
                </div>
              </div>

              {/* Lower-Right Developer Workspace / Laptop Visual */}
              <div className="hidden xl:block absolute -bottom-4 -right-4 z-10 w-48 pointer-events-none opacity-75 animate-float-reverse-gentle">
                <div className="relative rounded-t-lg border border-purple-500/30 bg-[#070b1c]/95 p-1.5 shadow-md backdrop-blur-md">
                  <div className="h-16 rounded bg-[#02050e] p-1.5 flex flex-col gap-1 border border-white/5">
                    <div className="flex items-center justify-between">
                      <span className="h-1 w-7 rounded bg-cyan-400/70" />
                      <span className="h-1 w-3.5 rounded bg-purple-400/70" />
                    </div>
                    <div className="h-0.5 w-20 rounded bg-slate-700/60" />
                    <div className="h-0.5 w-24 rounded bg-slate-700/60" />
                    <div className="h-0.5 w-14 rounded bg-emerald-400/60" />
                    <div className="mt-auto flex justify-between items-center text-[7.5px] font-mono text-cyan-400/90">
                      <span>DEV_WORKSPACE</span>
                      <span className="text-emerald-400 font-bold">● ACTIVE</span>
                    </div>
                  </div>
                  {/* Laptop Base */}
                  <div className="h-1.5 w-full bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 rounded-b mt-0.5 border-t border-white/10" />
                </div>
              </div>

              {/* SVG HUD Circuit Architecture & Radial Orbit Track Lines (Desktop Only) */}
              <svg
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 hidden lg:block h-full w-full"
                viewBox="0 0 580 580"
                fill="none"
              >
                {/* Concentric Rotating HUD Orbit Rings */}
                <circle
                  cx="290"
                  cy="290"
                  r="170"
                  stroke="rgba(0, 240, 255, 0.24)"
                  strokeWidth="1.2"
                  strokeDasharray="6 8"
                  className="animate-hud-spin"
                />
                <circle
                  cx="290"
                  cy="290"
                  r="230"
                  stroke="rgba(168, 85, 247, 0.2)"
                  strokeWidth="1"
                  strokeDasharray="4 12"
                  className="animate-hud-spin-reverse"
                />
                <circle
                  cx="290"
                  cy="290"
                  r="270"
                  stroke="rgba(56, 189, 248, 0.12)"
                  strokeWidth="1"
                  strokeDasharray="2 10"
                />

                {/* HUD Cardinal Axis Crosshairs */}
                <line
                  x1="290"
                  y1="25"
                  x2="290"
                  y2="65"
                  stroke="rgba(0, 240, 255, 0.4)"
                  strokeWidth="1.5"
                />
                <line
                  x1="290"
                  y1="515"
                  x2="290"
                  y2="555"
                  stroke="rgba(0, 240, 255, 0.4)"
                  strokeWidth="1.5"
                />
                <line
                  x1="25"
                  y1="290"
                  x2="65"
                  y2="290"
                  stroke="rgba(0, 240, 255, 0.4)"
                  strokeWidth="1.5"
                />
                <line
                  x1="515"
                  y1="290"
                  x2="555"
                  y2="290"
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
                      className={`absolute ${badge.pos} z-10 flex h-7 w-7 items-center justify-center rounded-full border border-white/10 bg-[#070d1e]/85 shadow-sm backdrop-blur-md`}
                      style={{ color: badge.color }}
                    >
                      <Icon className="text-xs" />
                    </motion.div>
                  );
                })}
              </div>

              {/* Central Large Circular Profile Core (Diameter 300-320px on desktop) */}
              <motion.div
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-20 group"
              >
                {/* Outer Circular Neon Shield Frame */}
                <div className="relative h-52 w-52 sm:h-60 sm:w-60 lg:h-68 lg:w-68 xl:h-[315px] xl:w-[315px] rounded-full p-1 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-[0_0_45px_-8px_rgba(0,240,255,0.45)] transition-all duration-500 group-hover:shadow-[0_0_60px_-5px_rgba(0,240,255,0.65)]">
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
                    <div className="absolute top-2.5 sm:top-3 inset-x-3 sm:inset-x-4 flex items-center justify-between pointer-events-none">
                      <span className="font-mono text-[8px] sm:text-[9px] font-bold uppercase tracking-wider text-cyan-300 bg-slate-950/85 px-1.5 py-0.5 rounded-full border border-cyan-500/30 backdrop-blur-md">
                        SYS_CORE // MS-01
                      </span>
                      <span className="flex items-center gap-1 font-mono text-[8px] sm:text-[9px] font-bold text-emerald-400 bg-slate-950/85 px-1.5 py-0.5 rounded-full border border-emerald-500/30 backdrop-blur-md">
                        <span className="h-1 w-1 rounded-full bg-emerald-400 animate-pulse" />
                        ONLINE
                      </span>
                    </div>

                    {/* Bottom HUD Tag */}
                    <div className="absolute bottom-2.5 sm:bottom-3 inset-x-0 flex justify-center pointer-events-none">
                      <span className="font-mono text-[8.5px] sm:text-[9px] font-bold text-slate-300 bg-slate-950/85 px-2.5 py-0.5 rounded-full border border-white/15 backdrop-blur-md">
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
                        className={`group relative flex items-center gap-2.5 rounded-2xl border px-3.5 py-2 backdrop-blur-xl transition-all duration-300 cursor-pointer shadow-md ${
                          mod.borderClass
                        } ${mod.bgClass} ${
                          isHovered
                            ? "scale-105 bg-[#060e1c]/95 shadow-xl -translate-y-1"
                            : "bg-[#060e1c]/88"
                        }`}
                        style={{
                          boxShadow: isHovered
                            ? `0 0 24px ${mod.glowColor}`
                            : undefined,
                        }}
                      >
                        {/* Module Icon Pod */}
                        <span
                          className={`flex h-7.5 w-7.5 items-center justify-center rounded-lg bg-white/[0.08] ${mod.textClass} text-base shrink-0 border border-white/10`}
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
        <span className="hidden sm:inline tracking-[0.2em]">SCROLL DOWN</span>
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