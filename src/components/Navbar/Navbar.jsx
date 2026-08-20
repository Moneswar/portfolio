import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { HiMenu, HiX } from "react-icons/hi";
import { navLinks } from "../../data/resumeData";
import useActiveSection from "../../hooks/useActiveSection";

const sectionIds = navLinks.map((link) =>
  link.href.replace("/#", "").replace("#", "")
);

/**
 * Navbar
 * Futuristic Cyber-Tech Navigation Bar.
 * Sticky glassmorphic header with active neon indicator, glowing brand mark, and smooth multi-route navigation.
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
          ? "border-b border-white/10 bg-[#060913]/90 backdrop-blur-xl shadow-2xl shadow-black/60"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <nav
        aria-label="Main Navigation"
        className="container-px mx-auto flex h-[4.5rem] max-w-6xl items-center justify-between"
      >
        {/* Brand Mark with Cybernetic Neon Glow */}
        <Link
          to="/#home"
          onClick={(e) => handleNavClick(e, "/#home")}
          className="group flex items-center gap-3 font-display text-base sm:text-lg font-bold tracking-tight text-white focus-visible:outline-2 focus-visible:outline-cyan-400 rounded-xl"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 text-sm font-black text-slate-950 shadow-lg shadow-cyan-500/20 transition-all duration-300 group-hover:scale-105 group-hover:shadow-cyan-500/40">
            MS
          </span>
          <div className="flex flex-col">
            <span className="leading-none text-sm sm:text-base tracking-wide font-extrabold text-white">
              Moneswar<span className="text-cyan-400">.</span>
            </span>
            <span className="text-[10px] font-mono font-medium tracking-wider text-slate-400 uppercase">
              Engineer
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => {
            const id = link.href.replace("/#", "").replace("#", "");
            const isActive = isHomePage && activeId === id;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3.5 py-2 text-sm font-medium transition-colors duration-200 rounded-lg focus-visible:outline-2 focus-visible:outline-cyan-400 ${
                    isActive
                      ? "text-cyan-300 font-semibold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {link.label}
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
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-slate-950 shadow-md shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/45 hover:-translate-y-0.5"
          >
            Let's Talk
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
            className="overflow-hidden border-b border-white/10 bg-[#060913]/98 backdrop-blur-2xl md:hidden shadow-2xl"
          >
            <ul className="container-px mx-auto flex flex-col gap-1.5 py-5">
              {navLinks.map((link) => {
                const id = link.href.replace("/#", "").replace("#", "");
                const isActive = isHomePage && activeId === id;
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
                      <span>{link.label}</span>
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
                  className="flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 px-4 py-3 text-center text-sm font-bold text-slate-950 shadow-md"
                >
                  Contact Me
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
