import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiArrowLeft,
  FiCheckCircle,
  FiCpu,
  FiActivity,
  FiShield,
  FiMaximize2,
  FiX,
  FiLayers,
} from "react-icons/fi";
import { projects } from "../data/resumeData";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AnimatedBackground from "../components/shared/AnimatedBackground";
import CursorGlow from "../components/shared/CursorGlow";
import ScrollProgressBar from "../components/shared/ScrollProgressBar";

const project =
  projects.find((p) => p.id === "smart-healthcare") || projects[1];

const domainIcons = {
  "Embedded Systems": FiCpu,
  Sensors: FiActivity,
  IoT: FiLayers,
  "Hardware Design": FiShield,
  "Real-time Monitoring": FiActivity,
};

const SmartHealthcareDetail = () => {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-(--color-bg) text-(--color-text)">
      <ScrollProgressBar />
      <CursorGlow />
      <Navbar />

      <main className="relative pt-28 pb-20 sm:pt-32 sm:pb-28">
        <AnimatedBackground />

        <div className="container-px relative z-10 mx-auto max-w-5xl">
          {/* Back Button / Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="mb-8"
          >
            <Link
              to="/#projects"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs font-semibold text-slate-300 backdrop-blur-md transition-all hover:border-cyan-500/50 hover:bg-white/[0.08] hover:text-white"
            >
              <FiArrowLeft className="text-sm" /> Back to Portfolio Projects
            </Link>
          </motion.div>

          {/* Project Hero Header */}
          <motion.header
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-purple-300">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-400">
                Physical Prototype &amp; IoT System
              </span>
            </div>

            <h1 className="section-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {project.title}
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300 max-w-3xl">
              {project.description}
            </p>

            {/* Actions */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-5 py-3 text-xs sm:text-sm font-medium text-amber-300">
                <span className="h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
                Hardware Prototype (Demo Coming Soon)
              </span>
            </div>
          </motion.header>

          {/* Main Visual: Exact 2x2 Real Hardware Collage */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.15 }}
            className="glass-panel overflow-hidden mb-16 border-white/15 p-4 sm:p-6 shadow-2xl"
          >
            <div className="mb-4 flex items-center justify-between">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-cyan-400 font-semibold">
                  Authentic Documentation
                </span>
                <h2 className="section-heading text-xl sm:text-2xl font-bold text-white mt-1">
                  Physical Hardware Prototype — 4-View Assembly
                </h2>
              </div>
              <button
                type="button"
                onClick={() => setLightboxOpen(true)}
                className="hidden sm:inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2 text-xs font-medium text-slate-200 transition-colors hover:border-cyan-400 hover:text-white"
              >
                <FiMaximize2 /> View Full Resolution
              </button>
            </div>

            <div
              onClick={() => setLightboxOpen(true)}
              className="group relative cursor-pointer overflow-hidden rounded-2xl border border-white/10 bg-slate-950/90 p-2 sm:p-4 transition-all duration-300 hover:border-cyan-500/40"
            >
              <img
                src={project.previewImage}
                alt={project.imageAlt || project.title}
                className="w-full max-h-[700px] object-contain rounded-xl transition-transform duration-500 group-hover:scale-[1.01]"
              />

              {/* Hover Zoom Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/30 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100 rounded-xl">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-500/90 text-slate-950 text-xl shadow-lg">
                  <FiMaximize2 />
                </span>
              </div>
            </div>

            <div className="mt-4 grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-[11px] sm:text-xs font-mono text-slate-400">
              <span className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
                Top-Left: Inside / Top View
              </span>
              <span className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
                Top-Right: Side View
              </span>
              <span className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
                Bottom-Left: Front View
              </span>
              <span className="p-2 rounded-lg bg-white/[0.02] border border-white/5">
                Bottom-Right: Side / Rear View
              </span>
            </div>
          </motion.section>

          {/* System Architecture & Features */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr] mb-16 items-start">
            {/* System Overview */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="glass-panel p-7 sm:p-9 border-purple-500/20"
            >
              <h2 className="section-heading text-xl sm:text-2xl font-bold text-white mb-4">
                System Architecture &amp; Overview
              </h2>
              <p className="text-base leading-relaxed text-slate-300">
                {project.detailedOverview || project.description}
              </p>

              <div className="mt-8 border-t border-white/10 pt-6">
                <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-purple-400 mb-4">
                  Hardware &amp; Safety Features
                </h3>
                <div className="flex flex-col gap-3">
                  {project.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2.5 rounded-xl border border-white/5 bg-white/[0.02] p-3 text-xs sm:text-sm text-slate-300"
                    >
                      <FiCheckCircle className="mt-0.5 shrink-0 text-purple-400 text-base" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Technical Domains */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="glass-panel p-6 sm:p-8"
            >
              <h2 className="section-heading text-lg sm:text-xl font-bold text-white mb-4">
                Technical Domains
              </h2>
              <div className="flex flex-col gap-3">
                {project.techStack.map((tech) => {
                  const Icon = domainIcons[tech] || FiCpu;
                  return (
                    <div
                      key={tech}
                      className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs sm:text-sm font-semibold text-slate-200"
                    >
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-purple-500/15 text-purple-400">
                        <Icon />
                      </span>
                      <span>{tech}</span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>

          {/* Bottom Navigation CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-panel flex flex-col sm:flex-row items-center justify-between gap-6 p-6 sm:p-8 text-center sm:text-left border-cyan-500/20"
          >
            <div>
              <h3 className="section-heading text-lg sm:text-xl font-bold text-white">
                Next Project
              </h3>
              <p className="text-xs sm:text-sm text-slate-400 mt-1">
                Explore the FarmDirect full-stack agricultural trading platform.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/projects/farmdirect"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 transition-all hover:-translate-y-0.5"
              >
                FarmDirect Marketplace →
              </Link>
              <Link
                to="/#projects"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-xs sm:text-sm font-semibold text-white transition-all hover:bg-white/[0.08]"
              >
                All Projects
              </Link>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-md"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[95vh] max-w-4xl overflow-hidden rounded-2xl border border-white/20 bg-slate-900 p-4 shadow-2xl"
            >
              <button
                type="button"
                aria-label="Close image preview"
                onClick={() => setLightboxOpen(false)}
                className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/80 text-white transition-colors hover:bg-cyan-500 hover:text-slate-950"
              >
                <FiX className="text-xl" />
              </button>

              <img
                src={project.previewImage}
                alt={project.imageAlt || project.title}
                className="max-h-[80vh] w-auto rounded-xl object-contain mx-auto"
              />

              <p className="mt-3 text-center text-xs sm:text-sm font-medium text-slate-300">
                Smart Healthcare Hardware System — Real Prototype 4-View Collage
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
    </div>
  );
};

export default SmartHealthcareDetail;
