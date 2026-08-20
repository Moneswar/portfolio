import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FiArrowLeft,
  FiExternalLink,
  FiCheckCircle,
  FiLayers,
  FiDatabase,
  FiServer,
  FiLayout,
  FiAlertCircle,
  FiCheck,
} from "react-icons/fi";
import { projects } from "../data/resumeData";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import AnimatedBackground from "../components/shared/AnimatedBackground";
import CursorGlow from "../components/shared/CursorGlow";
import ScrollProgressBar from "../components/shared/ScrollProgressBar";

const project = projects.find((p) => p.id === "farmdirect") || projects[0];

const techIcons = {
  React: FiLayout,
  "Node.js": FiServer,
  "Express.js": FiLayers,
  MongoDB: FiDatabase,
};

const FarmDirectDetail = () => {
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
          {/* Back button / Breadcrumb */}
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
              <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300">
                {project.category}
              </span>
              <span className="text-xs font-mono text-slate-400">
                Full-Stack Marketplace Platform
              </span>
            </div>

            <h1 className="section-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
              {project.title}
            </h1>

            <p className="mt-5 text-base sm:text-lg leading-relaxed text-slate-300 max-w-3xl">
              {project.description}
            </p>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#06b6d4] via-[#0284c7] to-[#8b5cf6] px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/40 hover:-translate-y-0.5"
                >
                  <FiExternalLink className="text-base" /> Open Live Demo
                </a>
              )}
            </div>
          </motion.header>

          {/* Main Visual Showcase */}
          {project.previewImage && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15 }}
              className="glass-panel overflow-hidden mb-16 border-white/15 p-3 sm:p-5 shadow-2xl"
            >
              <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-950/80">
                <img
                  src={project.previewImage}
                  alt={project.imageAlt || project.title}
                  className="w-full h-auto object-cover transition-transform duration-700 hover:scale-[1.01]"
                />
              </div>
              <p className="mt-3.5 text-center text-xs font-mono text-slate-400">
                FarmDirect full-stack farmer to customer marketplace platform preview
              </p>
            </motion.div>
          )}

          {/* Problem & Solution Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="glass-panel p-6 sm:p-8 border-rose-500/20"
            >
              <div className="flex items-center gap-2.5 text-rose-400 text-sm font-mono font-bold uppercase tracking-wider mb-3">
                <FiAlertCircle className="text-base" /> The Problem
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                {project.problemStatement ||
                  "Traditional agricultural supply chains rely heavily on middlemen, which lowers revenue for local farmers and inflates fresh produce prices for consumers."}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-panel p-6 sm:p-8 border-emerald-500/20"
            >
              <div className="flex items-center gap-2.5 text-emerald-400 text-sm font-mono font-bold uppercase tracking-wider mb-3">
                <FiCheck className="text-base" /> The Solution
              </div>
              <p className="text-sm sm:text-base leading-relaxed text-slate-300">
                {project.solutionOverview ||
                  "A decentralized marketplace allowing farmers to list produce with transparent pricing and consumers to purchase fresh goods with order management."}
              </p>
            </motion.div>
          </div>

          {/* Project Overview & Key Highlights */}
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_0.8fr] mb-16 items-start">
            {/* Overview & Workflow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55 }}
              className="glass-panel p-7 sm:p-9"
            >
              <h2 className="section-heading text-xl sm:text-2xl font-bold text-white mb-4">
                Project Overview
              </h2>
              <p className="text-base leading-relaxed text-slate-300">
                {project.detailedOverview || project.description}
              </p>

              {/* How it Works / Workflow Steps */}
              {project.howItWorks && (
                <div className="mt-8 border-t border-white/10 pt-6">
                  <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-cyan-400 mb-4">
                    Platform Workflow
                  </h3>
                  <div className="flex flex-col gap-4">
                    {project.howItWorks.map((step) => (
                      <div
                        key={step.step}
                        className="flex gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-4"
                      >
                        <span className="font-mono text-sm font-bold text-cyan-400">
                          {step.step}
                        </span>
                        <div>
                          <h4 className="font-semibold text-sm text-white mb-1">
                            {step.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                            {step.desc}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>

            {/* Key Features & Tech Stack */}
            <div className="flex flex-col gap-8">
              {/* Features Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.1 }}
                className="glass-panel p-6 sm:p-8"
              >
                <h2 className="section-heading text-lg sm:text-xl font-bold text-white mb-4">
                  Implemented Features
                </h2>
                <ul className="flex flex-col gap-3">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                    >
                      <FiCheckCircle className="mt-0.5 shrink-0 text-cyan-400 text-base" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Tech Stack Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.55, delay: 0.15 }}
                className="glass-panel p-6 sm:p-8"
              >
                <h2 className="section-heading text-lg sm:text-xl font-bold text-white mb-4">
                  Technology Stack
                </h2>
                <div className="grid grid-cols-2 gap-3">
                  {project.techStack.map((tech) => {
                    const Icon = techIcons[tech] || FiLayers;
                    return (
                      <div
                        key={tech}
                        className="flex items-center gap-2.5 rounded-xl border border-white/10 bg-white/[0.03] p-3 text-xs sm:text-sm font-semibold text-slate-200"
                      >
                        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                          <Icon />
                        </span>
                        <span>{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            </div>
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
                Explore the Smart Healthcare Hardware System real prototype.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/projects/smart-healthcare"
                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#06b6d4] to-[#8b5cf6] px-5 py-2.5 text-xs sm:text-sm font-bold text-slate-950 transition-all hover:-translate-y-0.5"
              >
                Smart Healthcare System →
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

      <Footer />
    </div>
  );
};

export default FarmDirectDetail;
