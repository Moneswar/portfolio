import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FiExternalLink, FiCheckCircle, FiArrowRight } from "react-icons/fi";
import { projects } from "../../data/resumeData";
import SectionHeading from "../shared/SectionHeading";

/**
 * ProjectShowcaseCard
 * Premium cinematic project showcase layout.
 * Directly integrates the real visual asset (FarmDirect web UI & Smart Healthcare 2x2 collage)
 * seamlessly into the dark card with multi-layer gradient blending, ambient lighting, and zero harsh borders.
 */
const ProjectShowcaseCard = ({ project, index }) => {
  const isHealthcare = project.id === "smart-healthcare";

  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.65, delay: index * 0.1 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#080d18] shadow-2xl backdrop-blur-2xl transition-all duration-500 hover:border-cyan-500/30"
    >
      {/* Cinematic Ambient Glow Behind Card */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 -top-32 h-[30rem] w-[30rem] rounded-full bg-cyan-500/[0.07] blur-3xl transition-opacity duration-700 group-hover:opacity-100"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-[30rem] w-[30rem] rounded-full bg-purple-500/[0.07] blur-3xl transition-opacity duration-700 group-hover:opacity-100"
      />

      <div className="relative z-10 grid grid-cols-1 items-stretch lg:grid-cols-12 min-h-[560px] lg:min-h-[600px] xl:min-h-[640px]">
        {/* Left Column (40–42% on desktop): Project Information */}
        <div className="relative z-20 flex flex-col justify-between p-6 sm:p-8 lg:p-10 xl:p-12 lg:col-span-5 bg-gradient-to-b from-[#080d18] via-[#080d18]/95 to-[#080d18] lg:bg-transparent">
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

        {/* Right Column (58–60% on desktop): Immersive Cinematic Visual Showcase */}
        <div className="relative flex items-center justify-center overflow-hidden lg:col-span-7 min-h-[380px] sm:min-h-[480px] lg:min-h-[560px] xl:min-h-[640px] bg-[#060a12]/80">
          {/* Subtle Radial Ambient Spotlight directly behind the hardware */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-40"
            style={{
              backgroundImage:
                "radial-gradient(circle at 55% 50%, rgba(6, 182, 212, 0.15), rgba(139, 92, 246, 0.08), transparent 72%)",
            }}
          />

          {/* Interactive Link wrapper for the visual */}
          <Link
            to={project.detailsPath}
            aria-label={`View details for ${project.title}`}
            className="relative z-10 flex h-full w-full items-center justify-center p-4 sm:p-6 lg:p-8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-2xl"
          >
            <img
              src={project.previewImage}
              alt={project.imageAlt || project.title}
              className={`w-full max-w-full object-contain transition-transform duration-700 ease-out group-hover:scale-[1.02] filter contrast-[1.02] ${
                isHealthcare
                  ? "max-h-[500px] sm:max-h-[580px] lg:max-h-[620px] xl:max-h-[660px]"
                  : "max-h-[360px] sm:max-h-[440px] lg:max-h-[500px] xl:max-h-[540px]"
              }`}
              loading="lazy"
            />
          </Link>

          {/* Cinematic Blend Layer 1: Horizontal gradient from info side over image */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 hidden lg:block"
            style={{
              background:
                "linear-gradient(90deg, #080d18 0%, rgba(8, 13, 24, 0.85) 12%, rgba(8, 13, 24, 0.2) 35%, rgba(8, 13, 24, 0) 70%)",
            }}
          />

          {/* Cinematic Blend Layer 2: Soft Top & Bottom Vignette */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(180deg, rgba(8, 13, 24, 0.5) 0%, transparent 12%, transparent 88%, rgba(8, 13, 24, 0.6) 100%)",
            }}
          />

          {/* Cinematic Blend Layer 3: Soft Right Edge Falloff */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 right-0 z-10 w-12 hidden lg:block"
            style={{
              background:
                "linear-gradient(270deg, #080d18 0%, transparent 100%)",
            }}
          />
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

        <div className="flex flex-col gap-14 sm:gap-20">
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
