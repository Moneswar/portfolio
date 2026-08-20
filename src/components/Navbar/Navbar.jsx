import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  FiHome,
  FiUser,
  FiCode,
  FiFolder,
  FiBookOpen,
  FiCheckCircle,
  FiMail,
  FiSend,
  FiMoon,
  FiSun,
} from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";
import { navLinks } from "../../data/resumeData";
import useActiveSection from "../../hooks/useActiveSection";
import useTheme from "../../hooks/useTheme";

const sectionIcons = {
  home: FiHome,
  about: FiUser,
  skills: FiCode,
  projects: FiFolder,
  education: FiBookOpen,
  certifications: FiCheckCircle,
  contact: FiMail,
};

const sectionIds = navLinks.map((link) =>
  link.href.replace("/#", "").replace("#", "")
);

/**
 * Navbar
 * Futuristic Floating Glass Command Bar.
 * Matches the reference design with rounded rectangular glass container,
 * glowing cyan/purple border, icon-enhanced navigation, functional theme toggle button, and "LET'S TALK" CTA.
 */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const activeId = useActiveSection(sectionIds);
  const { toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu is active
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const handleNavClick = (e, href) => {
    setMobileOpen(false);
    const targetId = href.replace("/#", "").replace("#", "");

    if (isHomePage) {
      e.preventDefault();
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${targetId}`);
      }
    } else {
      e.preventDefault();
      navigate(`/#${targetId}`);
    }
  };

  return (
    <header className="fixed top-2.5 sm:top-3.5 inset-x-0 z-50 px-4 sm:px-6 pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className={`mx-auto flex h-14 sm:h-16 max-w-[1440px] items-center justify-between px-4 sm:px-6 rounded-2xl border transition-all duration-300 pointer-events-auto ${
          scrolled
            ? "border-cyan-500/35 bg-[#030712]/92 backdrop-blur-2xl shadow-[0_0_35px_-5px_rgba(0,240,255,0.2)] shadow-black/80"
            : "border-white/10 bg-[#030712]/75 backdrop-blur-xl shadow-[0_0_20px_-5px_rgba(0,240,255,0.1)]"
        }`}
      >
        {/* Brand Mark with Cybernetic Neon Glow */}
        <Link
          to="/#home"
          onClick={(e) => handleNavClick(e, "/#home")}
          className="group flex items-center gap-2.5 font-display text-base font-bold tracking-tight text-white focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-xl"
        >
          <span className="flex h-8.5 w-8.5 sm:h-9.5 sm:w-9.5 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 text-xs sm:text-sm font-black text-slate-950 shadow-md shadow-cyan-500/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-cyan-500/40">
            MS
          </span>
          <div className="flex flex-col">
            <span className="leading-none text-xs sm:text-sm tracking-wide font-extrabold text-white">
              Moneswar<span className="text-cyan-400">.</span>
            </span>
            <span className="text-[8.5px] sm:text-[9px] font-mono font-medium tracking-wider text-slate-400 uppercase">
              ENGINEER
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links with Icons & Micro-motion */}
        <ul className="hidden items-center gap-0.5 lg:gap-1 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("/#", "").replace("#", "");
            const isActive = isHomePage && activeId === id;
            const Icon = sectionIcons[id] || FiCode;

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`group relative flex items-center gap-1.5 px-2.5 lg:px-3 py-1.5 text-xs lg:text-[13px] font-medium transition-all duration-200 rounded-lg focus-visible:outline-2 focus-visible:outline-cyan-400 ${
                    isActive
                      ? "text-cyan-300 font-semibold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  <Icon className="text-xs opacity-75 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:opacity-100 group-hover:text-cyan-300" />
                  <span>{link.label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="navbar-active-underline"
                      className="absolute inset-x-2 -bottom-1 h-[2px] rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 shadow-sm shadow-cyan-400/50"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA & Functional Theme Controls */}
        <div className="hidden md:flex items-center gap-2 sm:gap-2.5">
          <a
            href="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact")}
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 px-4 py-1.5 sm:px-4.5 sm:py-2 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-slate-950 shadow-md shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/45 hover:-translate-y-0.5"
          >
            <span>Let's Talk</span>
            <FiSend className="text-xs" />
          </a>

          {/* Functional Theme Toggle Button */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
            title={`Switch to ${isDark ? "light" : "dark"} mode`}
            className="flex h-8.5 w-8.5 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-slate-300 transition-all duration-200 hover:border-cyan-400/50 hover:text-cyan-300 hover:bg-white/[0.08] cursor-pointer"
          >
            {isDark ? (
              <FiMoon className="text-xs transition-transform duration-200 hover:rotate-12" />
            ) : (
              <FiSun className="text-xs text-amber-400 transition-transform duration-200 hover:rotate-45" />
            )}
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-lg text-slate-200 transition-colors hover:border-white/20 hover:text-white focus-visible:outline-2 focus-visible:outline-cyan-400 md:hidden"
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="mt-2 mx-auto max-w-[1440px] overflow-hidden rounded-2xl border border-cyan-500/30 bg-[#030712]/98 backdrop-blur-2xl md:hidden shadow-2xl pointer-events-auto"
          >
            <ul className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((link) => {
                const id = link.href.replace("/#", "").replace("#", "");
                const isActive = isHomePage && activeId === id;
                const Icon = sectionIcons[id] || FiCode;

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`flex items-center justify-between rounded-xl px-3.5 py-2.5 text-sm font-medium transition-all ${
                        isActive
                          ? "bg-cyan-500/10 text-cyan-300 font-semibold border border-cyan-500/30 shadow-sm"
                          : "text-slate-300 hover:bg-white/[0.04] hover:text-white"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <Icon className="text-sm text-cyan-400" />
                        <span>{link.label}</span>
                      </div>
                      {isActive && (
                        <span className="h-2 w-2 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />
                      )}
                    </a>
                  </li>
                );
              })}
              {/* Mobile Drawer Theme Toggle & Contact Action */}
              <li className="pt-2 mt-1 border-t border-white/10 flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label={`Switch to ${isDark ? "light" : "dark"} mode`}
                  className="flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 py-2 text-xs font-mono text-slate-300 transition-colors hover:border-cyan-400/50 hover:text-white"
                >
                  {isDark ? (
                    <FiMoon className="text-sm text-cyan-300" />
                  ) : (
                    <FiSun className="text-sm text-amber-400" />
                  )}
                  <span>{isDark ? "Dark" : "Light"}</span>
                </button>
                <a
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, "/#contact")}
                  className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-4 py-2 text-center text-xs font-bold uppercase tracking-wider text-slate-950 shadow-md"
                >
                  <span>Contact Me</span>
                  <FiSend className="text-xs" />
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
