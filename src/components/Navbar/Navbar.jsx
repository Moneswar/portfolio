import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { navLinks, personalInfo } from "../../data/resumeData";
import useActiveSection from "../../hooks/useActiveSection";

const sectionIds = navLinks.map((link) => link.href.replace("#", ""));

/**
 * Navbar
 * Sticky top nav that gains a glass background after the user scrolls
 * past the hero, highlights the active section with a sliding underline,
 * and collapses into a full-screen mobile menu below md.
 */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? "border-b border-(--color-border) bg-(--color-bg)/80 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="container-px mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between py-4">
        {/* Logo — initials mark */}
        <a href="#home" className="group flex items-center gap-2 font-display text-lg font-semibold">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-(--color-cyan) to-(--color-purple) text-sm font-bold text-(--color-bg) transition-transform duration-300 group-hover:rotate-6">
            MS
          </span>
          <span className="hidden sm:inline">Moneswar<span className="text-(--color-cyan)">.</span></span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = activeId === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                    isActive ? "text-(--color-text)" : "text-(--color-text-muted) hover:text-(--color-text)"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.span
                      layoutId="navbar-underline"
                      className="absolute inset-x-3 -bottom-0.5 h-[2px] rounded-full bg-gradient-to-r from-(--color-cyan) to-(--color-purple)"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:block">
          <a
            href="#contact"
            className="rounded-full bg-gradient-to-r from-(--color-cyan) to-(--color-purple) px-5 py-2.5 text-sm font-semibold text-(--color-bg) transition-transform hover:-translate-y-0.5"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="glass-panel flex h-10 w-10 items-center justify-center rounded-xl text-xl md:hidden"
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden border-t border-(--color-border) bg-(--color-bg)/95 backdrop-blur-xl md:hidden"
          >
            <ul className="container-px mx-auto flex max-w-6xl flex-col gap-1 py-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={handleLinkClick}
                    className="block rounded-lg px-3 py-3 text-base font-medium text-(--color-text-muted) transition-colors hover:bg-white/5 hover:text-(--color-text)"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href={`mailto:${personalInfo.email}`}
                  onClick={handleLinkClick}
                  className="block rounded-lg bg-gradient-to-r from-(--color-cyan) to-(--color-purple) px-3 py-3 text-center text-base font-semibold text-(--color-bg)"
                >
                  Let's Talk
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
