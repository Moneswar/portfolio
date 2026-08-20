import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiCheckCircle, FiArrowRight } from "react-icons/fi";
import { projects } from "../../data/resumeData";
import SectionHeading from "../shared/SectionHeading";

/**
 * ProjectCard
 * Recruiter-focused project presentation card.
 * Highlights live deployment for FarmDirect and the real 4-view prototype collage for Smart Healthcare.
 */
const ProjectCard = ({ project }) => {
  const isHealthcare = project.id === "smart-healthcare";

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6 }}
      className="glass-panel grid grid-cols-1 overflow-hidden lg:grid-cols-[1.1fr_0.9fr] transition-all duration-300 hover:border-cyan-500/40 shadow-2xl items-stretch"
    >
      {/* Left Column: Project Information */}
      <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10 order-2 lg:order-1">
        <div>
          {/* Category Badge */}
          <div className="flex items-center gap-2 mb-3">
            <span className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-widest text-cyan-300 backdrop-blur-md">
              {project.shortCategory || project.category}
            </span>
          </div>

          {/* Project Title */}
          <h3 className="section-heading text-2xl sm:text-3xl font-bold text-white leading-tight">
            {project.title}
          </h3>

          {/* Description */}
          <p className="mt-3.5 text-sm sm:text-base leading-relaxed text-slate-300">
            {project.description}
          </p>

          {/* Key Features List */}
          <div className="mt-6">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
              Key Features &amp; Implementation
            </h4>
            <ul className="flex flex-col gap-2.5">
              {project.features.slice(0, 4).map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300"
                >
                  <FiCheckCircle className="mt-0.5 shrink-0 text-cyan-400 text-sm sm:text-base" />
                  <span className="leading-snug">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack Chips */}
          <div className="mt-6 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-lg border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-slate-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/10 pt-6">
          {/* FarmDirect Primary: Live Demo */}
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#06b6d4] via-[#0284c7] to-[#8b5cf6] px-5 py-2.5 text-sm font-bold text-slate-950 shadow-md shadow-cyan-500/20 transition-all duration-300 hover:shadow-cyan-500/35 hover:-translate-y-0.5"
            >
              <FiExternalLink className="text-base" /> Live Demo
            </a>
          )}

          {/* View Project Detail Page */}
          {project.detailsPath && (
            <Link
              to={project.detailsPath}
              className={`inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${
                !project.demo
                  ? "bg-gradient-to-r from-[#06b6d4] via-[#0284c7] to-[#8b5cf6] text-slate-950 font-bold shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/35"
                  : "border border-white/15 bg-white/[0.04] text-slate-200 backdrop-blur-md hover:border-cyan-400/60 hover:bg-white/[0.08] hover:text-white"
              }`}
            >
              View Project <FiArrowRight className="text-base" />
            </Link>
          )}

          {/* Source Code (Only if verified URL exists) */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs font-semibold text-slate-300 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:text-white hover:-translate-y-0.5"
            >
              <FaGithub className="text-sm" /> Source Code
            </a>
          )}

          {/* Healthcare Disabled State: Demo Coming Soon */}
          {!project.demo && (
            <span className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.02] px-3.5 py-2 text-xs font-medium text-slate-400">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400/80" />
              Demo Coming Soon
            </span>
          )}
        </div>
      </div>

      {/* Right Column: Project Visual / Exact Hardware Collage */}
      <div
        className={`relative flex items-center justify-center overflow-hidden border-b lg:border-b-0 lg:border-l border-white/10 bg-slate-950/60 p-4 sm:p-6 order-1 lg:order-2 ${
          isHealthcare ? "min-h-[300px] sm:min-h-[360px]" : "min-h-[240px] sm:min-h-[300px]"
        }`}
      >
        {/* Subtle background ambient spotlight */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.15), transparent 70%)",
          }}
        />

        <div className="relative z-10 w-full h-full flex flex-col items-center justify-center">
          {project.previewImage && (
            <div className="relative w-full max-w-md overflow-hidden rounded-2xl border border-white/10 bg-slate-900/90 shadow-xl">
              <img
                src={project.previewImage}
                alt={project.imageAlt || project.title}
                className={`w-full h-auto ${
                  isHealthcare
                    ? "object-contain max-h-[380px] sm:max-h-[440px]"
                    : "object-cover max-h-[260px] sm:max-h-[300px]"
                } transition-transform duration-500 hover:scale-[1.02]`}
                loading="lazy"
              />
              {isHealthcare && (
                <div className="absolute bottom-2 right-2 rounded-md bg-slate-950/85 px-2.5 py-1 text-[10px] font-mono font-medium text-cyan-300 border border-white/10 backdrop-blur-md">
                  Real 4-View Prototype
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
};

/**
 * Projects
 * Crucial recruiter section presenting practical software and hardware projects.
 */
const Projects = () => {
  return (
    <section id="projects" className="relative py-20 sm:py-28 lg:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Practical Work"
          title="Featured Projects"
          highlight="Projects"
          subtitle="Full-stack marketplace applications and hardware-embedded IoT systems."
        />

        <div className="flex flex-col gap-8 sm:gap-12">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
