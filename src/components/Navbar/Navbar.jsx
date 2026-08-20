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
} from "react-icons/fi";
import { HiMenu, HiX } from "react-icons/hi";
import { navLinks } from "../../data/resumeData";
import useActiveSection from "../../hooks/useActiveSection";

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
 * Futuristic Engineering Command Bar.
 * Synchronized with max-w-[1500px] container, rounded glass container,
 * icon navigation with upward hover micro-motion, and "LET'S TALK" gradient CTA.
 */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHomePage = location.pathname === "/";
  const activeId = useActiveSection(sectionIds);

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
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/10 bg-[#030712]/92 backdrop-blur-xl shadow-2xl shadow-black/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main Navigation"
        className="mx-auto flex h-16 sm:h-[4.25rem] max-w-[1500px] items-center justify-between px-6 sm:px-10 lg:px-12 xl:px-16"
      >
        {/* Brand Mark with Cybernetic Neon Glow */}
        <Link
          to="/#home"
          onClick={(e) => handleNavClick(e, "/#home")}
          className="group flex items-center gap-3 font-display text-base sm:text-lg font-bold tracking-tight text-white focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-xl"
        >
          <span className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 text-sm font-black text-slate-950 shadow-md shadow-cyan-500/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-cyan-500/40">
            MS
          </span>
          <div className="flex flex-col">
            <span className="leading-none text-sm sm:text-base tracking-wide font-extrabold text-white">
              Moneswar<span className="text-cyan-400">.</span>
            </span>
            <span className="text-[9.5px] sm:text-[10px] font-mono font-medium tracking-wider text-slate-400 uppercase">
              ENGINEER
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links with Icons & Micro-motion */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("/#", "").replace("#", "");
            const isActive = isHomePage && activeId === id;
            const Icon = sectionIcons[id] || FiCode;

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`group relative flex items-center gap-1.5 px-3 py-1.5 text-xs lg:text-sm font-medium transition-all duration-200 rounded-lg focus-visible:outline-2 focus-visible:outline-cyan-400 ${
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
                      className="absolute inset-x-2 -bottom-1 h-[2.5px] rounded-full bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 shadow-sm shadow-cyan-400/50"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="/#contact"
            onClick={(e) => handleNavClick(e, "/#contact")}
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 px-5 py-2 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-md shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/45 hover:-translate-y-0.5"
          >
            <span>Let's Talk</span>
            <FiSend className="text-xs" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((prev) => !prev)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/[0.04] text-xl text-slate-200 transition-colors hover:border-white/20 hover:text-white focus-visible:outline-2 focus-visible:outline-cyan-400 md:hidden"
        >
          {mobileOpen ? <HiX /> : <HiMenu />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="overflow-hidden border-b border-white/10 bg-[#030712]/98 backdrop-blur-2xl md:hidden shadow-2xl"
          >
            <ul className="mx-auto flex max-w-[1500px] flex-col gap-1.5 px-6 py-5">
              {navLinks.map((link) => {
                const id = link.href.replace("/#", "").replace("#", "");
                const isActive = isHomePage && activeId === id;
                const Icon = sectionIcons[id] || FiCode;

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-all ${
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
              <li className="pt-3">
                <a
                  href="/#contact"
                  onClick={(e) => handleNavClick(e, "/#contact")}
                  className="flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-4 py-3 text-center text-sm font-bold text-slate-950 shadow-md"
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
