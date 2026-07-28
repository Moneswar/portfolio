import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail, HiArrowUp } from "react-icons/hi";
import { personalInfo, navLinks } from "../../data/resumeData";

/**
 * Footer
 * Minimal closing section: brand mark, quick nav, socials, and a
 * back-to-top action. No fabricated legal/newsletter content since
 * that isn't part of the resume-driven scope.
 */
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-(--color-border) py-12">
      <div className="container-px mx-auto flex max-w-6xl flex-col items-center gap-8 md:flex-row md:justify-between">
        <div className="flex items-center gap-2 font-display text-lg font-semibold">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-(--color-cyan) to-(--color-purple) text-sm font-bold text-(--color-bg)">
            MS
          </span>
          <span>{personalInfo.name}</span>
        </div>

        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-(--color-text-muted)">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href} className="transition-colors hover:text-(--color-cyan)">
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <a
            href={personalInfo.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-(--color-text-muted) transition-colors hover:text-(--color-cyan)"
          >
            <FaGithub />
          </a>
          <a
            href={personalInfo.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-(--color-text-muted) transition-colors hover:text-(--color-cyan)"
          >
            <FaLinkedin />
          </a>
          <a
            href={`mailto:${personalInfo.email}`}
            aria-label="Email"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-(--color-text-muted) transition-colors hover:text-(--color-cyan)"
          >
            <HiOutlineMail />
          </a>
          <a
            href="#home"
            aria-label="Back to top"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-(--color-cyan) to-(--color-purple) text-(--color-bg) transition-transform hover:-translate-y-1"
          >
            <HiArrowUp />
          </a>
        </div>
      </div>

      <p className="mt-8 text-center text-xs text-(--color-text-muted)/70">
        © {year} {personalInfo.name}. Designed &amp; built with React, Tailwind CSS and Framer Motion.
      </p>
    </footer>
  );
};

export default Footer;
