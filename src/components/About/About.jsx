import { motion } from "framer-motion";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiCpu, FiLayout, FiCode } from "react-icons/fi";
import { aboutContent, areasOfInterest, personalInfo } from "../../data/resumeData";
import SectionHeading from "../shared/SectionHeading";

// Distinct icons and color accents for Areas of Interest
const interestMeta = {
  "Full-Stack Development": { icon: FiCode, accent: "#06b6d4", bgGradient: "from-cyan-500/20 to-sky-500/20" },
  "Embedded Systems / Hardware Development": { icon: FiCpu, accent: "#8b5cf6", bgGradient: "from-purple-500/20 to-indigo-500/20" },
  "UI/UX Design": { icon: FiLayout, accent: "#38bdf8", bgGradient: "from-sky-500/20 to-cyan-500/20" },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

/**
 * About
 * Recruiter-aligned About Me and Areas of Interest section.
 * Clean two-column card structure with subtle micro-interactions.
 */
const About = () => {
  return (
    <section id="about" className="relative py-20 sm:py-28 lg:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Background"
          title="About Me"
          highlight="Me"
          subtitle="Computer Science & Design undergraduate building practical solutions across software and hardware."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-10 items-stretch">
          {/* Main About Me Glass Card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55 }}
            className="glass-panel flex flex-col justify-between p-7 sm:p-9 lg:p-10"
          >
            <div>
              <h3 className="section-heading mb-4 text-xl sm:text-2xl text-white">
                {aboutContent.title}
              </h3>
              <p className="text-base sm:text-lg leading-relaxed text-slate-300">
                {aboutContent.description}
              </p>
            </div>

            <div className="mt-8 flex items-center gap-2.5 text-sm font-medium text-slate-400 border-t border-white/10 pt-5">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-400">
                <HiOutlineLocationMarker className="text-base" />
              </span>
              <span>{personalInfo.location}</span>
            </div>
          </motion.div>

          {/* Areas of Interest Cards */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="glass-panel flex flex-col justify-between gap-4 p-7 sm:p-9 lg:p-10"
          >
            <h3 className="section-heading text-xl sm:text-2xl text-white mb-2">
              Areas of Interest
            </h3>

            <div className="flex flex-col gap-3.5 my-auto">
              {areasOfInterest.map((interest, index) => {
                const meta = interestMeta[interest] ?? {
                  icon: FiCode,
                  accent: "#06b6d4",
                  bgGradient: "from-cyan-500/20 to-purple-500/20",
                };
                const Icon = meta.icon;

                return (
                  <motion.div
                    key={interest}
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: index * 0.08 }}
                    whileHover={{ x: 4 }}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:border-cyan-500/40 hover:bg-white/[0.06]"
                  >
                    <span
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${meta.bgGradient} text-xl transition-transform duration-300 group-hover:scale-110`}
                      style={{ color: meta.accent }}
                    >
                      <Icon />
                    </span>
                    <span className="font-semibold text-sm sm:text-base text-slate-200 group-hover:text-white">
                      {interest}
                    </span>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
