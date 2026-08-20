import { motion } from "framer-motion";
import { FiArrowDown, FiDownload, FiEye } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { personalInfo } from "../../data/resumeData";
import useTypewriter from "../../hooks/useTypewriter";
import AnimatedBackground from "../shared/AnimatedBackground";
import Button from "../shared/Button";
import profileImg from "../../assets/favicon.png";

const roles = [
  "BE Computer Science & Design Student",
  "Full-Stack Web Developer",
  "Embedded & Hardware Enthusiast",
  "UI/UX Designer",
];

/**
 * Hero
 * High-impact, recruiter-focused hero section.
 * Clean typography hierarchy and clear primary/secondary call-to-actions.
 */
const Hero = () => {
  const typedRole = useTypewriter(roles, { pause: 1600 });

  return (
    <section
      id="home"
      className="relative flex min-h-[92vh] items-center overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-24"
    >
      <AnimatedBackground />

      <div className="container-px relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        {/* Left: Headline, Bio & Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, ease: "easeOut" }}
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
        >
          {/* Status pill */}
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-(--color-border) bg-white/[0.04] px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-(--color-cyan) shadow-sm backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-(--color-cyan) animate-ping" />
            <span className="-ml-1 h-2 w-2 rounded-full bg-(--color-cyan)" />
            Open to Internship &amp; Job Opportunities
          </div>

          {/* Main Headline */}
          <h1 className="section-heading text-3xl sm:text-5xl lg:text-[3.4rem] font-bold leading-[1.14] text-white">
            Hi, I'm{" "}
            <span className="text-gradient">
              {personalInfo.name.split(" ")[0]}
            </span>
            .<br />
            Building practical{" "}
            <span className="text-gradient">software and hardware</span> solutions.
          </h1>

          {/* Typewriter role */}
          <div className="mt-4 flex h-8 items-center font-mono text-base font-medium text-slate-300 sm:text-lg">
            <span>{typedRole}</span>
            <span className="ml-1.5 inline-block h-5 w-[2px] bg-(--color-cyan) animate-pulse" />
          </div>

          {/* Supporting text */}
          <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-300/90 sm:text-lg">
            {personalInfo.supportingText}
          </p>

          {/* CTA Button Group: Primary & Secondary */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5 sm:gap-4 lg:justify-start">
            {/* Primary: View Projects */}
            <Button href="#projects" variant="primary" icon={FiEye}>
              View Projects
            </Button>

            {/* Secondary: Download Resume */}
            <Button
              href={personalInfo.resumeFile}
              download="Moneswar_Sundareswaran_Resume.pdf"
              variant="outline"
              icon={FiDownload}
            >
              Download Resume
            </Button>

            {/* Tertiary / Ghost: Contact Me */}
            <Button href="#contact" variant="ghost" icon={HiOutlineMail}>
              Contact Me
            </Button>
          </div>

          {/* Social Icons */}
          <div className="mt-8 flex items-center justify-center gap-3.5 lg:justify-start">
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
                className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-lg text-slate-300 backdrop-blur-md transition-all duration-300 hover:-translate-y-1 hover:border-(--color-cyan)/60 hover:bg-white/[0.08] hover:text-(--color-cyan) shadow-sm"
              >
                <Icon className="transition-transform duration-300 group-hover:scale-110" />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right: Profile Visual with Layered Glow & Badges */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.75, delay: 0.15, ease: "easeOut" }}
          className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80 lg:h-96 lg:w-96"
        >
          {/* Subtle spinning dashed ring */}
          <div
            aria-hidden="true"
            className="absolute inset-0 rounded-full border border-dashed border-(--color-cyan)/25 animate-spin [animation-duration:25s]"
          />
          {/* Inner ambient glow ring */}
          <div
            aria-hidden="true"
            className="absolute inset-4 rounded-full border border-(--color-purple)/20 bg-gradient-to-tr from-(--color-cyan)/10 to-(--color-purple)/10 blur-sm"
          />

          {/* Profile Card */}
          <div className="relative animate-[float_6s_ease-in-out_infinite]">
            <div className="relative h-56 w-56 overflow-hidden rounded-[28px] border border-white/15 bg-slate-900/80 shadow-2xl backdrop-blur-xl sm:h-68 sm:w-68 lg:h-76 lg:w-76">
              <img
                src={profileImg}
                alt="Moneswar Sundareswaran - Computer Science & Design Undergraduate"
                className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                loading="eager"
              />
              {/* Subtle bottom gradient tint */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a]/60 via-transparent to-transparent pointer-events-none" />
            </div>
          </div>

          {/* Floating Highlight Badges */}
          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="glass-panel absolute -left-2 top-4 rounded-2xl px-3.5 py-2 text-xs font-semibold text-slate-200 border-white/15 sm:-left-6 sm:top-6 shadow-lg backdrop-blur-xl"
          >
            ⚡ Embedded Systems
          </motion.div>

          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.6,
            }}
            className="glass-panel absolute -right-2 bottom-6 rounded-2xl px-3.5 py-2 text-xs font-semibold text-slate-200 border-white/15 sm:-right-6 sm:bottom-8 shadow-lg backdrop-blur-xl"
          >
            ⚛️ Full-Stack Web
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.a
        href="#about"
        aria-label="Scroll to About section"
        animate={{ y: [0, 6, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 flex flex-col items-center gap-1 text-xs font-mono uppercase tracking-widest text-slate-400 transition-colors hover:text-(--color-cyan)"
      >
        <span className="hidden sm:inline">Scroll</span>
        <FiArrowDown className="text-lg" />
      </motion.a>
    </section>
  );
};

export default Hero;