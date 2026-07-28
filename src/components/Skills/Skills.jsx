import { motion } from "framer-motion";
import { FiCode, FiLayout, FiServer, FiDatabase, FiTool } from "react-icons/fi";
import { skillGroups } from "../../data/resumeData";
import SectionHeading from "../shared/SectionHeading";

// Distinct icon + accent per group keeps the grid visually scannable
const groupMeta = {
  programming: { icon: FiCode, accent: "cyan" },
  frontend: { icon: FiLayout, accent: "purple" },
  backend: { icon: FiServer, accent: "cyan" },
  database: { icon: FiDatabase, accent: "purple" },
  tools: { icon: FiTool, accent: "cyan" },
};

/**
 * Skills
 * Renders each resume skill category as a glass card. Instead of fake
 * "progress bar percentages" (which the resume doesn't provide numbers
 * for), skills are shown as animated chips — an honest, still-dynamic
 * way to present them.
 */
const Skills = () => {
  return (
    <section id="skills" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Skills"
          title="Tools I build with"
          highlight="build"
          subtitle="A snapshot of the languages, frameworks, and tools from my technical toolkit."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, groupIndex) => {
            const meta = groupMeta[group.id] ?? { icon: FiCode, accent: "cyan" };
            const Icon = meta.icon;
            const accentVar = meta.accent === "cyan" ? "var(--color-cyan)" : "var(--color-purple)";

            return (
              <motion.div
                key={group.id}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.55, delay: groupIndex * 0.08 }}
                whileHover={{ y: -6 }}
                className="glass-panel group relative overflow-hidden p-7"
              >
                {/* Soft glow accent in the corner */}
                <div
                  className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full opacity-20 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
                  style={{ background: accentVar }}
                />

                <div className="relative mb-5 flex items-center gap-3">
                  <span
                    className="flex h-11 w-11 items-center justify-center rounded-xl text-xl"
                    style={{ background: `${accentVar}22`, color: accentVar }}
                  >
                    <Icon />
                  </span>
                  <h3 className="section-heading text-lg text-(--color-text)">{group.title}</h3>
                </div>

                <div className="relative flex flex-wrap gap-2">
                  {group.skills.map((skill, skillIndex) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.35, delay: groupIndex * 0.08 + skillIndex * 0.05 }}
                      className="rounded-full border border-(--color-border) bg-white/5 px-3.5 py-1.5 text-sm text-(--color-text-muted) transition-colors duration-300 hover:text-(--color-text)"
                    >
                      {skill}
                    </motion.span>
                  ))}
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
