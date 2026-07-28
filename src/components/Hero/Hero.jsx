import { motion } from "framer-motion";
import { FiArrowDown, FiDownload } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { personalInfo, careerObjective } from "../../data/resumeData";
import useTypewriter from "../../hooks/useTypewriter";
import AnimatedBackground from "../shared/AnimatedBackground";
import Button from "../shared/Button";
import profileImg from "../../assets/favicon.png";

const roles = [
  "Computer Science & Design Student",
  "UI/UX Designer",
  "Full-Stack Developer",
];

/**
 * Hero
 * First thing visitors see. Two-column layout on desktop: intro + CTAs on
 * the left, a floating profile card on the right.
 */
const Hero = () => {
  const typedRole = useTypewriter(roles, { pause: 1600 });

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-28 pb-20"
    >
      <AnimatedBackground />

      <div className="container-px relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-[1.15fr_0.85fr]">
        {/* Left Side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-(--color-border) bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-(--color-cyan)">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-(--color-cyan)" />
            Open to Opportunities
          </span>

          <h1 className="section-heading text-4xl leading-[1.1] sm:text-5xl lg:text-6xl">
            Hi, I'm{" "}
            <span className="text-gradient">
              {personalInfo.name.split(" ")[0]}
            </span>
            <br />
            building thoughtful,{" "}
            <span className="text-gradient">human-centered</span> tech.
          </h1>

          <div className="mt-5 flex h-8 items-center font-mono text-lg text-(--color-text-muted) sm:text-xl">
            <span>{typedRole}</span>
            <span className="ml-1 h-6 w-[2px] animate-pulse bg-(--color-cyan)" />
          </div>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-(--color-text-muted) sm:text-lg">
            {careerObjective}
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Button href={personalInfo.resumeFile} download icon={FiDownload}>
              Download Resume
            </Button>

            <Button href="#contact" variant="ghost" icon={HiOutlineMail}>
              Contact Me
            </Button>
          </div>

          <div className="mt-9 flex items-center gap-4">
            {[
              {
                icon: FaGithub,
                href: personalInfo.github,
                label: "GitHub",
              },
              {
                icon: FaLinkedin,
                href: personalInfo.linkedin,
                label: "LinkedIn",
              },
              {
                icon: HiOutlineMail,
                href: `mailto:${personalInfo.email}`,
                label: "Email",
              },
            ].map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="glass-panel flex h-11 w-11 items-center justify-center rounded-full text-lg text-(--color-text-muted) transition-all duration-300 hover:-translate-y-1 hover:text-(--color-cyan)"
              >
                <Icon />
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative mx-auto flex h-64 w-64 items-center justify-center sm:h-80 sm:w-80"
        >
          {/* Animated Rings */}
          <div className="absolute inset-0 animate-spin rounded-full border border-dashed border-(--color-cyan)/30 [animation-duration:20s]" />
          <div className="absolute inset-6 rounded-full border border-(--color-purple)/20" />

          {/* Floating Profile Card */}
          <div className="animate-[float_6s_ease-in-out_infinite]">
            <div className="glass-panel relative h-56 w-56 overflow-hidden rounded-[32px] border border-white/10 shadow-2xl sm:h-72 sm:w-72">
              <img
                src={profileImg}
                alt="Moneswar Sundareswaran"
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </div>

          {/* Floating Tags */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="glass-panel absolute -left-4 top-6 rounded-2xl px-3 py-2 text-xs font-semibold sm:-left-8"
          >
            🎨 Figma
          </motion.div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
            className="glass-panel absolute -right-2 bottom-8 rounded-2xl px-3 py-2 text-xs font-semibold sm:-right-6"
          >
            ⚛️ React
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Down */}
      <motion.a
        href="#about"
        aria-label="Scroll to About"
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-(--color-text-muted) transition-colors hover:text-(--color-cyan)"
      >
        <FiArrowDown className="text-xl" />
      </motion.a>
    </section>
  );
};

export default Hero;