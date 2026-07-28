import { motion } from "framer-motion";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { FiCpu, FiLayout, FiCode } from "react-icons/fi";
import { careerObjective, areasOfInterest, personalInfo } from "../../data/resumeData";
import SectionHeading from "../shared/SectionHeading";

// Icon mapping for the "Areas of Interest" pulled straight from the resume
const interestIcons = {
  "UX/UI Design": FiLayout,
  "Full-Stack Development": FiCode,
  "Hardware Project Development": FiCpu,
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0 },
};

/**
 * About
 * Presents the resume's career objective verbatim, alongside the areas of
 * interest, in a clean two-column glass layout.
 */
const About = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="About Me"
          title="A little about my journey"
          highlight="journey"
          subtitle="Currently pursuing my degree while building projects that sit at the intersection of design and engineering."
        />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.4fr_1fr]">
          {/* Career objective card */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-8 sm:p-10"
          >
            <h3 className="section-heading mb-4 text-xl text-(--color-text)">Career Objective</h3>
            <p className="text-base leading-relaxed text-(--color-text-muted) sm:text-lg">
              {careerObjective}
            </p>

            <div className="mt-8 flex items-center gap-2 text-sm text-(--color-text-muted)">
              <HiOutlineLocationMarker className="text-(--color-cyan)" />
              {personalInfo.location}
            </div>
          </motion.div>

          {/* Areas of interest */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-panel flex flex-col gap-4 p-8 sm:p-10"
          >
            <h3 className="section-heading mb-2 text-xl text-(--color-text)">Areas of Interest</h3>
            {areasOfInterest.map((interest, index) => {
              const Icon = interestIcons[interest] ?? FiCode;
              return (
                <motion.div
                  key={interest}
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex items-center gap-4 rounded-2xl border border-(--color-border) bg-white/[0.03] px-5 py-4 transition-colors hover:border-(--color-cyan)/40 hover:bg-white/[0.06]"
                >
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-(--color-cyan)/20 to-(--color-purple)/20 text-lg text-(--color-cyan) transition-transform duration-300 group-hover:scale-110">
                    <Icon />
                  </span>
                  <span className="font-medium text-(--color-text)">{interest}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
