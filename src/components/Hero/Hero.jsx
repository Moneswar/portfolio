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
  "Embedded & Hardware Enthusiast",
  "UI/UX Designer",
];

// 5 Verified Technical Skill Areas (Strictly NO AI/ML)
const skillCards = [
  {
    id: "embedded",
    title: "Embedded Systems",
    desc: "Building smart hardware solutions.",
    icon: FiCpu,
    color: "emerald",
    badgeClass: "text-emerald-400 border-emerald-500/30 bg-emerald-500/10 shadow-emerald-500/10",
    glowClass: "from-emerald-500/20 to-cyan-500/20",
    desktopPos: "top-[-3.25rem] left-1/2 -translate-x-1/2",
    animation: "animate-float-slow",
  },
  {
    id: "mern",
    title: "MERN Stack Development",
    desc: "Full-stack web applications.",
    icon: FiLayers,
    color: "cyan",
    badgeClass: "text-cyan-400 border-cyan-500/30 bg-cyan-500/10 shadow-cyan-500/10",
    glowClass: "from-cyan-500/20 to-blue-500/20",
    desktopPos: "top-[12%] -left-[4.5rem] xl:-left-[5.5rem]",
    animation: "animate-float-reverse",
  },
  {
    id: "web",
    title: "Web Development",
    desc: "Responsive modern web experiences.",
    icon: FiGlobe,
    color: "sky",
    badgeClass: "text-sky-400 border-sky-500/30 bg-sky-500/10 shadow-sky-500/10",
    glowClass: "from-sky-500/20 to-indigo-500/20",
    desktopPos: "top-[12%] -right-[4.5rem] xl:-right-[5.5rem]",
    animation: "animate-float-slow",
  },
  {
    id: "software",
    title: "Software Development",
    desc: "Clean, scalable and maintainable software.",
    icon: FiCode,
    color: "purple",
    badgeClass: "text-purple-400 border-purple-500/30 bg-purple-500/10 shadow-purple-500/10",
    glowClass: "from-purple-500/20 to-pink-500/20",
    desktopPos: "bottom-[8%] -left-[4.5rem] xl:-left-[5.5rem]",
    animation: "animate-float-slow",
  },
  {
    id: "uiux",
    title: "UI/UX Design",
    desc: "User-focused digital experiences.",
    icon: FiLayout,
    color: "pink",
    badgeClass: "text-pink-400 border-pink-500/30 bg-pink-500/10 shadow-pink-500/10",
    glowClass: "from-pink-500/20 to-rose-500/20",
    desktopPos: "bottom-[8%] -right-[4.5rem] xl:-right-[5.5rem]",
    animation: "animate-float-reverse",
  },
];

/**
 * Hero
 * Futuristic Cyber-Tech Developer & Engineering Showcase.
 * Features a dual-column layout with status pill, neon-highlighted headline,
 * and a central Engineering Hub surrounded by 5 interconnected floating skill cards with circuit traces.
 */
const Hero = () => {
  const typedRole = useTypewriter(roles, { pause: 1600 });

  return (
    <section
      id="home"
      className="relative flex min-h-[95vh] items-center overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-28"
    >
      <AnimatedBackground />

      <div className="container-px relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 lg:grid-cols-[1.12fr_0.88fr] lg:gap-12 xl:gap-16">
        {/* Left Column: Headline, Bio, Buttons & Socials */}
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

          {/* Professional Introduction */}
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

        {/* Right Column: Central Engineering Hub & 5 Connected Floating Skill Cards */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto flex flex-col items-center justify-center w-full max-w-[540px] lg:max-w-none"
        >
          {/* Desktop Central Visual Canvas */}
          <div className="relative flex items-center justify-center h-[340px] w-[340px] sm:h-[400px] sm:w-[400px] xl:h-[440px] xl:w-[440px]">
            {/* Cyber Circuit Overlay Graphic (Desktop Only) */}
            <svg
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 hidden lg:block h-full w-full opacity-60"
              viewBox="0 0 440 440"
              fill="none"
            >
              {/* Central Concentric Tech Rings */}
              <circle
                cx="220"
                cy="220"
                r="140"
                stroke="rgba(0, 240, 255, 0.2)"
                strokeWidth="1.5"
                strokeDasharray="4 6"
              />
              <circle
                cx="220"
                cy="220"
                r="180"
                stroke="rgba(168, 85, 247, 0.15)"
                strokeWidth="1"
              />

              {/* Circuit Connector Traces to the 5 Cards */}
              {/* Path to Top: Embedded Systems */}
              <path
                d="M 220 90 L 220 40"
                stroke="rgba(16, 185, 129, 0.45)"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
              <circle cx="220" cy="40" r="3.5" fill="#10b981" />

              {/* Path to Upper-Left: MERN Stack */}
              <path
                d="M 120 140 L 50 90"
                stroke="rgba(0, 240, 255, 0.45)"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
              <circle cx="50" cy="90" r="3.5" fill="#00f0ff" />

              {/* Path to Upper-Right: Web Dev */}
              <path
                d="M 320 140 L 390 90"
                stroke="rgba(56, 189, 248, 0.45)"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
              <circle cx="390" cy="90" r="3.5" fill="#38bdf8" />

              {/* Path to Lower-Left: Software Dev */}
              <path
                d="M 120 300 L 50 350"
                stroke="rgba(168, 85, 247, 0.45)"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
              <circle cx="50" cy="350" r="3.5" fill="#a855f7" />

              {/* Path to Lower-Right: UI/UX Design */}
              <path
                d="M 320 300 L 390 350"
                stroke="rgba(236, 72, 153, 0.45)"
                strokeWidth="1.5"
                strokeDasharray="3 3"
              />
              <circle cx="390" cy="350" r="3.5" fill="#ec4899" />
            </svg>

            {/* Ambient Radial Spotlight behind Profile */}
            <div
              aria-hidden="true"
              className="absolute inset-4 rounded-full bg-gradient-to-tr from-cyan-500/15 via-blue-500/10 to-purple-500/15 blur-2xl animate-cyber-pulse"
            />

            {/* Central Framed Portrait */}
            <div className="relative z-20 group">
              {/* Outer Cyber Frame */}
              <div className="relative h-48 w-48 sm:h-56 sm:w-56 xl:h-64 xl:w-64 rounded-3xl p-1 bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 shadow-2xl shadow-cyan-500/20">
                {/* Inner Container */}
                <div className="relative h-full w-full overflow-hidden rounded-[22px] bg-[#070b14]">
                  <img
                    src={profileImg}
                    alt="Moneswar Sundareswaran - Computer Science & Design Undergraduate"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="eager"
                  />
                  {/* Subtle vignette gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#060913]/70 via-transparent to-transparent pointer-events-none" />

                  {/* Cyber Corner Brackets */}
                  <span className="absolute top-2 left-2 text-[10px] font-mono text-cyan-400/80 leading-none">
                    ┌
                  </span>
                  <span className="absolute top-2 right-2 text-[10px] font-mono text-cyan-400/80 leading-none">
                    ┐
                  </span>
                  <span className="absolute bottom-2 left-2 text-[10px] font-mono text-cyan-400/80 leading-none">
                    └
                  </span>
                  <span className="absolute bottom-2 right-2 text-[10px] font-mono text-cyan-400/80 leading-none">
                    ┘
                  </span>
                </div>
              </div>
            </div>

            {/* Desktop Floating Skill Cards (Surrounding the central hub) */}
            <div className="hidden lg:block">
              {skillCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.id}
                    className={`absolute z-30 ${card.desktopPos} ${card.animation}`}
                  >
                    <div className="glass-panel group relative flex items-center gap-3 rounded-2xl border border-white/12 bg-[#080d1a]/90 px-3.5 py-2.5 shadow-xl backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-cyan-400/50">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border ${card.badgeClass} text-lg`}
                      >
                        <Icon />
                      </span>
                      <div className="flex flex-col text-left">
                        <span className="font-display text-xs font-bold text-white whitespace-nowrap">
                          {card.title}
                        </span>
                        <span className="text-[10px] font-mono text-slate-400 whitespace-nowrap">
                          {card.desc}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile & Tablet Responsive Skill Grid (< lg) */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 w-full lg:hidden">
            {skillCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.id}
                  className="glass-panel flex items-center gap-3 rounded-xl border border-white/10 bg-[#080d1a]/85 p-3 shadow-md"
                >
                  <span
                    className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border ${card.badgeClass} text-base`}
                  >
                    <Icon />
                  </span>
                  <div className="flex flex-col text-left overflow-hidden">
                    <span className="font-display text-xs font-bold text-white truncate">
                      {card.title}
                    </span>
                    <span className="text-[10px] font-mono text-slate-400 truncate">
                      {card.desc}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Futuristic Scroll Down Indicator */}
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