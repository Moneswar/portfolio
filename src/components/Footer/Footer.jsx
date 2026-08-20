import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiArrowUp } from "react-icons/hi";
import { personalInfo, navLinks } from "../../data/resumeData";

/**
 * Footer
 * Minimal, polished footer with brand mark, navigation links, socials, and back-to-top action.
 */
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/10 bg-[#070b14] py-12">
      <div className="container-px mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row md:justify-between">
        {/* Brand & Name */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 font-display text-base sm:text-lg font-bold tracking-tight text-white focus-visible:outline-2 focus-visible:outline-(--color-cyan) rounded-lg"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-(--color-cyan) to-(--color-purple) text-sm font-bold text-slate-950 shadow-md transition-transform duration-300 group-hover:scale-105">
            MS
          </span>
          <span>{personalInfo.name}</span>
        </a>

        {/* Quick Nav */}
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs sm:text-sm text-slate-300">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="transition-colors hover:text-(--color-cyan) focus-visible:outline-2 focus-visible:outline-(--color-cyan) rounded px-1"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Socials & Back to Top */}
        <div className="flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-300 hover:border-cyan-500/50 hover:bg-white/[0.08] hover:text-cyan-400"
          >
            <FaGithub />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-300 hover:border-cyan-500/50 hover:bg-white/[0.08] hover:text-cyan-400"
          >
            <FaLinkedin />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-300 hover:border-cyan-500/50 hover:bg-white/[0.08] hover:text-cyan-400"
          >
            <HiOutlineMail />
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-(--color-cyan) to-(--color-purple) text-slate-950 font-bold shadow-md transition-transform hover:-translate-y-0.5"
          >
            <HiArrowUp className="text-base" />
          </a>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-slate-400">
        © {year} {personalInfo.name}. Built with React, Tailwind CSS and Framer Motion.
      </p>
    </footer>
  );
};

export default Footer;
