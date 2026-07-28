import { motion } from "framer-motion";
import { HiOutlineAcademicCap } from "react-icons/hi";
import { education } from "../../data/resumeData";
import SectionHeading from "../shared/SectionHeading";

/**
 * Education
 * A single-column vertical timeline: a gradient connecting line on the
 * left with a node + glass card per entry. Kept single-column (rather
 * than alternating sides) so it stays robust across every breakpoint.
 */
const Education = () => {
  return (
    <section id="education" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto max-w-3xl">
        <SectionHeading eyebrow="Education" title="Academic background" highlight="background" />

        <div className="relative pl-14 sm:pl-16">
          {/* Connecting gradient line */}
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-(--color-cyan) via-(--color-purple) to-transparent sm:left-6" />

          <div className="flex flex-col gap-8">
            {education.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                className="relative"
              >
                {/* Node */}
                <span className="absolute -left-14 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-(--color-bg) ring-2 ring-(--color-cyan)/60 sm:-left-16">
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-br from-(--color-cyan)/20 to-(--color-purple)/20 text-(--color-cyan)">
                    <HiOutlineAcademicCap className="text-lg" />
                  </span>
                </span>

                <div className="glass-panel w-full p-6 transition-colors duration-300 hover:border-(--color-cyan)/40 sm:p-7">
                  <span className="font-mono text-xs uppercase tracking-widest text-(--color-cyan)">
                    {item.duration}
                  </span>
                  <h3 className="section-heading mt-2 text-lg text-(--color-text) sm:text-xl">
                    {item.degree}
                  </h3>
                  <p className="mt-1 text-sm text-(--color-text-muted)">{item.institution}</p>
                  <p className="mt-3 inline-block rounded-full border border-(--color-border) bg-white/5 px-3 py-1 text-xs font-semibold text-(--color-text)">
                    {item.score}
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
