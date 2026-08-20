import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiExternalLink,
  FiCheckCircle,
  FiArrowRight,
  FiMaximize2,
  FiX,
} from "react-icons/fi";
import { projects } from "../../data/resumeData";
import SectionHeading from "../shared/SectionHeading";

/**
 * ProjectShowcaseCard
 * Premium project showcase layout with integrated image panel.
 * The real project visual serves as the dominant visual canvas,
 * with UI badge and technology tags layered directly over the image.
 */
const ProjectShowcaseCard = ({ project, index, onOpenLightbox }) => {
  const isHealthcare = project.id === "smart-healthcare";

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.65, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-3xl border border-white/12 bg-[#090e1a]/95 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-cyan-500/35"
    >
      {/* Background Ambient Spotlight */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[30rem] w-[30rem] rounded-full bg-cyan-500/[0.08] blur-3xl transition-opacity duration-700 group-hover:opacity-100"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-[30rem] w-[30rem] rounded-full bg-purple-500/[0.08] blur-3xl transition-opacity duration-700 group-hover:opacity-100"
      />

      <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10 xl:gap-12">
        {/* Left Column (40–45%): Project Information */}
        <div className="flex flex-col justify-between lg:col-span-5">
          <div>
            {/* Category Badge */}
            <div className="mb-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-500/35 bg-cyan-500/10 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-cyan-300 backdrop-blur-md shadow-sm">
                {project.shortCategory || project.category}
              </span>
            </div>

            {/* Project Title */}
            <h3 className="section-heading font-display text-2xl sm:text-3xl lg:text-[2.1rem] font-bold leading-tight text-white">
              {project.title}
            </h3>

            {/* Description */}
            <p className="mt-4 text-sm sm:text-base leading-relaxed text-slate-300/95">
              {project.description}
            </p>

            {/* Key Features List */}
            <div className="mt-6 sm:mt-7">
              <h4 className="mb-3 text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Key Features
              </h4>
              <ul className="flex flex-col gap-2.5">
                {project.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-3 text-xs sm:text-sm text-slate-200"
                  >
                    <FiCheckCircle className="mt-0.5 shrink-0 text-cyan-400 text-base" />
                    <span className="leading-snug">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack / Domain Pills */}
            <div className="mt-6 sm:mt-7">
              <h4 className="mb-3 text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                {isHealthcare ? "Domain Tags" : "Technology Stack"}
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-lg border border-white/12 bg-white/[0.05] px-3.5 py-1.5 text-xs font-medium text-slate-200 backdrop-blur-md transition-colors hover:border-cyan-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="mt-8 sm:mt-9 flex flex-wrap items-center gap-3.5 border-t border-white/10 pt-6">
            {/* FarmDirect Primary Action: Live Demo */}
            {project.demo && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 rounded-full bg-gradient-to-r from-[#06b6d4] via-[#0284c7] to-[#8b5cf6] px-6 py-3 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/25 transition-all duration-300 hover:shadow-cyan-500/45 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-cyan-400"
              >
                <FiExternalLink className="text-base" /> Live Demo
              </a>
            )}

            {/* View Project Detail Page */}
            {project.detailsPath && (
              <Link
                to={project.detailsPath}
                className={`inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-cyan-400 ${
                  !project.demo
                    ? "bg-gradient-to-r from-[#06b6d4] via-[#0284c7] to-[#8b5cf6] text-slate-950 font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/45"
                    : "border border-white/20 bg-white/[0.06] text-white backdrop-blur-md hover:border-cyan-400/60 hover:bg-white/[0.1]"
                }`}
              >
                View Project <FiArrowRight className="text-base" />
              </Link>
            )}

            {/* Healthcare Disabled State: Demo Coming Soon */}
            {!project.demo && (
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-4 py-2.5 text-xs font-medium text-slate-400 cursor-not-allowed">
                <span className="h-2 w-2 rounded-full bg-amber-400/80 animate-pulse" />
                Demo Coming Soon
              </span>
            )}
          </div>
        </div>

        {/* Right Column (55–60%): Large Integrated Image Showcase with Layered UI */}
        <div className="lg:col-span-7">
          <div className="group/panel relative flex flex-col justify-center overflow-hidden rounded-2xl border border-white/12 bg-[#050811] min-h-[420px] sm:min-h-[500px] lg:min-h-[560px] xl:min-h-[600px] shadow-2xl transition-all duration-500 hover:border-cyan-500/40">
            {/* Subtle Ambient Radial Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 opacity-40"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.16), rgba(139, 92, 246, 0.08), transparent 70%)",
              }}
            />

            {/* Clickable Image Container */}
            <div
              onClick={() => {
                if (isHealthcare) {
                  onOpenLightbox(project.previewImage);
                }
              }}
              className={`relative z-10 flex h-full w-full items-center justify-center p-4 sm:p-6 lg:p-7 ${
                isHealthcare ? "cursor-pointer" : ""
              }`}
            >
              <img
                src={project.previewImage}
                alt={project.imageAlt || project.title}
                className={`w-full max-w-full object-contain transition-transform duration-700 ease-out group-hover/panel:scale-[1.02] filter contrast-[1.02] ${
                  isHealthcare
                    ? "max-h-[480px] sm:max-h-[540px] lg:max-h-[580px] xl:max-h-[620px]"
                    : "max-h-[340px] sm:max-h-[420px] lg:max-h-[460px] xl:max-h-[500px]"
                }`}
                loading="lazy"
              />
            </div>

            {/* Subtle Dark Gradient Overlay */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-20"
              style={{
                background:
                  "linear-gradient(180deg, rgba(5, 8, 17, 0.15) 0%, rgba(5, 8, 17, 0.02) 40%, rgba(5, 8, 17, 0.7) 85%, rgba(5, 8, 17, 0.92) 100%)",
              }}
            />

            {/* Top-Right Quick Action Button */}
            {isHealthcare ? (
              <button
                type="button"
                onClick={() => onOpenLightbox(project.previewImage)}
                aria-label="Open full-resolution hardware prototype view"
                className="absolute top-4 right-4 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-slate-950/80 text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500 hover:text-slate-950 shadow-lg"
              >
                <FiMaximize2 className="text-sm" />
              </button>
            ) : (
              <Link
                to={project.detailsPath}
                aria-label={`View details for ${project.title}`}
                className="absolute top-4 right-4 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-slate-950/80 text-white backdrop-blur-md transition-all duration-300 hover:border-cyan-400 hover:bg-cyan-500 hover:text-slate-950 shadow-lg"
              >
                <FiArrowRight className="text-sm" />
              </Link>
            )}

            {/* UI Information Layered DIRECTLY OVER THE IMAGE */}
            <div className="absolute inset-x-0 bottom-0 z-30 flex flex-col items-center justify-end p-4 sm:p-5 text-center pointer-events-none">
              {/* Floating Badge directly on image */}
              <span className="mb-2 inline-flex items-center gap-2 rounded-full border border-cyan-400/40 bg-slate-950/90 px-4 py-1.5 font-mono text-xs font-bold uppercase tracking-widest text-cyan-300 shadow-xl backdrop-blur-md">
                <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
                {project.shortCategory || project.category}
              </span>

              {/* Supporting Tech Line layered on image */}
              <p className="max-w-md font-mono text-[11px] sm:text-xs font-medium text-slate-300/90 backdrop-blur-sm bg-slate-950/60 px-3.5 py-1 rounded-full border border-white/10 shadow-sm">
                {isHealthcare
                  ? "Embedded Systems · Sensors · IoT · Hardware Design · Monitoring"
                  : "React · Node.js · Express.js · MongoDB"}
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
};

/**
 * Projects
 * Recruiter-focused showcase presenting practical software and hardware projects.
 */
const Projects = () => {
  const [lightboxImage, setLightboxImage] = useState(null);

  return (
    <section id="projects" className="relative py-20 sm:py-28 lg:py-32">
      <div className="container-px mx-auto max-w-[1240px]">
        <SectionHeading
          eyebrow="Practical Work"
          title="Featured Projects"
          highlight="Projects"
          subtitle="Real deployed web applications and authentic physical hardware prototypes."
        />

        <div className="flex flex-col gap-14 sm:gap-20">
          {projects.map((project, index) => (
            <ProjectShowcaseCard
              key={project.id}
              project={project}
              index={index}
              onOpenLightbox={(img) => setLightboxImage(img)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Modal for Smart Healthcare Prototype */}
      <AnimatePresence>
        {lightboxImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/95 p-4 backdrop-blur-md"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[95vh] max-w-4xl overflow-hidden rounded-2xl border border-white/20 bg-slate-900 p-4 shadow-2xl"
            >
              <button
                type="button"
                aria-label="Close image preview"
                onClick={() => setLightboxImage(null)}
                className="absolute right-5 top-5 z-20 flex h-10 w-10 items-center justify-center rounded-full bg-slate-950/80 text-white transition-colors hover:bg-cyan-500 hover:text-slate-950"
              >
                <FiX className="text-xl" />
              </button>

              <img
                src={lightboxImage}
                alt="Smart Healthcare Hardware System prototype collage"
                className="max-h-[80vh] w-auto rounded-xl object-contain mx-auto"
              />

              <p className="mt-3 text-center text-xs sm:text-sm font-medium text-slate-300">
                Smart Healthcare Hardware System — Real Prototype 4-View Collage
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
