import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink, FiCheckCircle } from "react-icons/fi";
import { projects } from "../../data/resumeData";
import SectionHeading from "../shared/SectionHeading";

/**
 * ProjectCard
 * A single project — image placeholder, description, feature list, tech
 * chips, and action buttons. Extracted so Projects.jsx stays declarative.
 */
const ProjectCard = ({ project, index }) => {
  const reversed = index % 2 === 1;

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="glass-panel grid grid-cols-1 overflow-hidden lg:grid-cols-2"
    >
      {/* Image placeholder */}
      <div
        className={`relative flex min-h-[220px] items-center justify-center overflow-hidden bg-gradient-to-br from-(--color-cyan)/15 to-(--color-purple)/15 ${
          reversed ? "lg:order-2" : ""
        }`}
      >
        <div className="absolute inset-0 opacity-40" style={{
          backgroundImage: "radial-gradient(circle at 30% 30%, rgba(255,255,255,0.08), transparent 60%)",
        }} />
        <span className="relative rounded-full border border-(--color-border) bg-(--color-bg)/40 px-4 py-1.5 font-mono text-xs uppercase tracking-widest text-(--color-cyan)">
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div className="flex flex-col justify-center p-8 sm:p-10">
        <h3 className="section-heading text-2xl text-(--color-text)">{project.title}</h3>
        <p className="mt-3 text-base leading-relaxed text-(--color-text-muted)">
          {project.description}
        </p>

        {/* Features */}
        <ul className="mt-5 flex flex-col gap-2.5">
          {project.features.map((feature) => (
            <li key={feature} className="flex items-start gap-2.5 text-sm text-(--color-text-muted)">
              <FiCheckCircle className="mt-0.5 shrink-0 text-(--color-cyan)" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>

        {/* Tech stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-(--color-border) bg-white/5 px-3 py-1 text-xs font-medium text-(--color-text-muted)"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="mt-7 flex flex-wrap gap-3">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="glass-panel inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-transform hover:-translate-y-0.5"
          >
            <FaGithub /> GitHub
          </a>
          {project.demo ? (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-(--color-cyan) to-(--color-purple) px-5 py-2.5 text-sm font-semibold text-(--color-bg) transition-transform hover:-translate-y-0.5"
            >
              <FiExternalLink /> Live Demo
            </a>
          ) : (
            <span className="inline-flex cursor-not-allowed items-center gap-2 rounded-full border border-(--color-border) px-5 py-2.5 text-sm font-semibold text-(--color-text-muted)/60">
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
 * Lists the two resume projects as alternating, media-rich cards.
 */
const Projects = () => {
  return (
    <section id="projects" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Projects"
          title="Things I've built"
          highlight="built"
          subtitle="A mix of full-stack software and hardware systems — from concept to working prototype."
        />

        <div className="flex flex-col gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
