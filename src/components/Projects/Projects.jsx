import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiExternalLink, FiCheckCircle, FiArrowRight } from "react-icons/fi";
import { projects } from "../../data/resumeData";
import SectionHeading from "../shared/SectionHeading";

/**
 * ProjectShowcaseCard
 * Large-format recruiter showcase layout with 42% info / 58% image split.
 * Features uncropped, high-resolution visual proof of real work (FarmDirect live web UI & Smart Healthcare 2x2 collage).
 */
const ProjectShowcaseCard = ({ project, index }) => {
  const isHealthcare = project.id === "smart-healthcare";

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.65, delay: index * 0.1 }}
      className="glass-panel relative overflow-hidden rounded-3xl border border-white/15 bg-[#0a0f1d]/90 p-6 sm:p-8 lg:p-10 shadow-2xl backdrop-blur-xl transition-all duration-500 hover:border-cyan-500/40"
    >
      {/* Ambient background glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[28rem] w-[28rem] rounded-full bg-cyan-500/[0.08] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-[28rem] w-[28rem] rounded-full bg-purple-500/[0.08] blur-3xl"
      />

      {/* 42% Info / 58% Image Balanced Grid */}
      <div className="relative z-10 grid grid-cols-1 items-center gap-8 lg:grid-cols-[42fr_58fr] lg:gap-12 xl:gap-14">
        {/* Left Column (42%): Project Information */}
        <div className="flex flex-col justify-between py-1">
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

        {/* Right Column (58%): Large Project Image Showcase */}
        <div className="flex w-full items-center justify-center">
          <div className="group relative flex w-full items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-[#060a14] p-3 sm:p-5 lg:p-6 shadow-2xl transition-all duration-500 hover:border-cyan-500/40">
            {/* Subtle background ambient spotlight */}
            <div
              aria-hidden="true"
              className="absolute inset-0 opacity-30 pointer-events-none"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 50% 50%, rgba(6, 182, 212, 0.18), transparent 70%)",
              }}
            />

            <Link
              to={project.detailsPath}
              className="relative z-10 block w-full overflow-hidden rounded-xl bg-slate-950/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
            >
              <img
                src={project.previewImage}
                alt={project.imageAlt || project.title}
                className={`w-full h-auto ${
                  isHealthcare
                    ? "max-h-[560px] sm:max-h-[640px] lg:max-h-[720px] object-contain"
                    : "max-h-[380px] sm:max-h-[460px] lg:max-h-[520px] object-contain"
                } rounded-lg transition-transform duration-500 group-hover:scale-[1.015]`}
                loading="lazy"
              />

              {/* Corner badge indicating real visual */}
              <div className="absolute bottom-3 right-3 rounded-lg border border-white/15 bg-slate-950/85 px-3.5 py-1.5 text-[11px] font-mono font-medium text-cyan-300 backdrop-blur-md shadow-md">
                {isHealthcare
                  ? "Exact 4-View Prototype Collage"
                  : "Real Application Preview"}
              </div>
            </Link>
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
  return (
    <section id="projects" className="relative py-20 sm:py-28 lg:py-32">
      <div className="container-px mx-auto max-w-[1240px]">
        <SectionHeading
          eyebrow="Practical Work"
          title="Featured Projects"
          highlight="Projects"
          subtitle="Real deployed web applications and authentic physical hardware prototypes."
        />

        <div className="flex flex-col gap-14 sm:gap-18">
          {projects.map((project, index) => (
            <ProjectShowcaseCard
              key={project.id}
              project={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
