import { motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { education } from "../../data/resumeData";
import SectionHeading from "../shared/SectionHeading";

/**
 * Education
 * Single-column vertical timeline emphasizing degree, institution, and scores.
 */
const Education = () => {
  return (
    <section id="education" className="relative py-20 sm:py-28 lg:py-32">
      <div className="container-px mx-auto max-w-3xl">
        <SectionHeading
          eyebrow="Academic History"
          title="Education"
          highlight="Education"
          subtitle="Formal engineering degree and foundational academic background."
        />

        <div className="relative pl-12 sm:pl-16">
          {/* Vertical connecting gradient line */}
          <div
            aria-hidden="true"
            className="absolute left-4 sm:left-5 top-3 bottom-3 w-[2px] bg-gradient-to-b from-cyan-500 via-purple-500 to-transparent opacity-40"
          />

          <div className="flex flex-col gap-7 sm:gap-8">
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative"
              >
                {/* Node with academic icon */}
                <span className="absolute -left-12 sm:-left-16 top-4 z-10 flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-[#0a0e1a] ring-2 ring-cyan-500/40 shadow-lg">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-cyan-500/10 text-cyan-400">
                    <HiOutlineAcademicCap className="text-lg sm:text-xl" />
                  </span>
                </span>

                {/* Timeline Card */}
                <div className="glass-panel p-6 sm:p-7 transition-all duration-300 hover:border-cyan-500/40">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400">
                      {item.duration}
                    </span>
                    <span className="inline-block rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-0.5 text-xs font-semibold text-cyan-300">
                      {item.score}
                    </span>
                  </div>

                  {/* Degree - Strongest visual emphasis */}
                  <h3 className="section-heading text-lg sm:text-xl font-bold text-white leading-snug">
                    {item.degree}
                  </h3>

                  {/* Institution */}
                  <p className="mt-1.5 text-sm sm:text-base text-slate-300">
                    {item.institution}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
