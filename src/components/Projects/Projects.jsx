import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiCheckCircle } from "react-icons/fi";
import { projects } from "../../data/resumeData";
import SectionHeading from "../shared/SectionHeading";

/**
 * ProjectCard
 * Recruiter-optimized project presentation card.
 * High visual hierarchy, clear feature checklist, and distinct action buttons.
 */
const ProjectCard = ({ project, index }) => {
  const reversed = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-panel grid grid-cols-1 overflow-hidden lg:grid-cols-[0.85fr_1.15fr] transition-all duration-300 hover:border-cyan-500/30"
    >
      {/* Category banner / card visual side */}
      <div
        className={`relative flex min-h-[180px] sm:min-h-[220px] lg:min-h-full items-center justify-center overflow-hidden border-b lg:border-b-0 ${
          reversed
            ? "lg:order-2 lg:border-l border-white/10"
            : "lg:border-r border-white/10"
        } bg-gradient-to-br from-cyan-500/10 via-slate-900/60 to-purple-500/10 p-8`}
      >
        {/* Radial ambient spotlight */}
        <div
          aria-hidden="true"
          className="absolute inset-0 opacity-40 pointer-events-none"
          style={{
            backgroundImage:
              "radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.2), transparent 70%)",
          }}
        />

        <div className="relative z-10 flex flex-col items-center gap-3 text-center">
          <span className="rounded-full border border-cyan-500/30 bg-slate-900/80 px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-widest text-cyan-300 backdrop-blur-xl shadow-lg">
            {project.category}
          </span>
          <p className="text-xs font-medium text-slate-400 max-w-[200px]">
            {project.techStack.join(" · ")}
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="flex flex-col justify-between p-6 sm:p-8 lg:p-10">
        <div>
          {/* Project Title */}
          <h3 className="section-heading text-2xl sm:text-3xl font-bold text-white">
            {project.title}
          </h3>

          {/* Description */}
          <p className="mt-3.5 text-base leading-relaxed text-slate-300">
            {project.description}
          </p>

          {/* Key Features List */}
          <div className="mt-6">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 mb-3">
              Key Features &amp; Implementation
            </h4>
            <ul className="flex flex-col gap-2.5">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2.5 text-sm text-slate-300"
                >
                  <FiCheckCircle className="mt-0.5 shrink-0 text-cyan-400 text-base" />
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
        <div className="mt-8 flex flex-wrap items-center gap-3.5 border-t border-white/10 pt-6">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-2.5 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-cyan-400/60 hover:bg-white/[0.08] hover:text-white hover:-translate-y-0.5"
            >
              <FaGithub className="text-base" /> GitHub
            </a>
          )}

          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-[#06b6d4] via-[#0284c7] to-[#8b5cf6] px-5 py-2.5 text-sm font-bold text-slate-950 shadow-md shadow-cyan-500/20 transition-all duration-300 hover:shadow-cyan-500/35 hover:-translate-y-0.5"
            >
              <FiExternalLink className="text-base" /> Live Demo
            </a>
          ) : (
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-4 py-2 text-xs font-medium text-slate-400">
              <FiExternalLink /> Demo Coming Soon
            </span>
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

        <div className="flex flex-col gap-8 sm:gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
