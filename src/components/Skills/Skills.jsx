import { motion } from "framer-motion";
import { FiCode, FiLayout, FiServer, FiDatabase, FiTool, FiCpu } from "react-icons/fi";
import { skillGroups } from "../../data/resumeData";
import SectionHeading from "../shared/SectionHeading";

// Metadata mapping for categories
const groupMeta = {
  programming: { icon: FiCode, accent: "#06b6d4", bg: "rgba(6, 182, 212, 0.12)" },
  frontend: { icon: FiLayout, accent: "#38bdf8", bg: "rgba(56, 189, 248, 0.12)" },
  backend: { icon: FiServer, accent: "#8b5cf6", bg: "rgba(139, 92, 246, 0.12)" },
  database: { icon: FiDatabase, accent: "#a855f7", bg: "rgba(168, 85, 247, 0.12)" },
  tools: { icon: FiTool, accent: "#06b6d4", bg: "rgba(6, 182, 212, 0.12)" },
  embedded: { icon: FiCpu, accent: "#8b5cf6", bg: "rgba(139, 92, 246, 0.12)" },
};

/**
 * Skills
 * Recruiter-scannable grid of technical skills organized into 6 clear categories.
 */
const Skills = () => {
  return (
    <section id="skills" className="relative py-20 sm:py-28 lg:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Technical Stack"
          title="Technical Skills"
          highlight="Skills"
          subtitle="Core programming languages, web technologies, databases, tools, and embedded concepts."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, groupIndex) => {
            const meta = groupMeta[group.id] ?? {
              icon: FiCode,
              accent: "#06b6d4",
              bg: "rgba(6, 182, 212, 0.12)",
            };
            const Icon = meta.icon;

            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: groupIndex * 0.06 }}
                whileHover={{ y: -4 }}
                className="glass-panel group relative flex flex-col justify-between overflow-hidden p-6 sm:p-7"
              >
                {/* Soft ambient corner glow */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
                  style={{ background: meta.accent }}
                />

                <div>
                  {/* Category Header */}
                  <div className="relative mb-5 flex items-center gap-3.5">
                    <span
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-xl shadow-inner transition-transform duration-300 group-hover:scale-105"
                      style={{ background: meta.bg, color: meta.accent }}
                    >
                      <Icon />
                    </span>
                    <h3 className="section-heading text-lg sm:text-xl font-bold text-white">
                      {group.title}
                    </h3>
                  </div>

                  {/* Skill Chips */}
                  <div className="relative flex flex-wrap gap-2 pt-1">
                    {group.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.3,
                          delay: groupIndex * 0.05 + skillIndex * 0.03,
                        }}
                        className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-xs sm:text-sm font-medium text-slate-300 transition-all duration-200 hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-white"
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
