import { motion } from "framer-motion";
import { FiAward, FiExternalLink } from "react-icons/fi";
import { certifications } from "../../data/resumeData";
import SectionHeading from "../shared/SectionHeading";

/**
 * Certifications
 * Displays verified technical certifications and credentials in a balanced 2-column grid.
 */
const Certifications = () => {
  return (
    <section id="certifications" className="relative py-20 sm:py-28 lg:py-32">
      <div className="container-px mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Credentials"
          title="Certifications & Training"
          highlight="Certifications"
          subtitle="Technical coursework and certifications completed during my academic studies."
        />

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="glass-panel group relative flex flex-col justify-between overflow-hidden p-6 sm:p-8 transition-all duration-300 hover:border-cyan-500/40"
            >
              {/* Corner ambient glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full bg-cyan-500/10 blur-2xl transition-opacity duration-500 group-hover:opacity-40"
              />

              <div>
                <div className="mb-4 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/20 to-purple-500/20 text-xl text-cyan-400 shadow-inner transition-transform duration-300 group-hover:scale-105">
                    <FiAward />
                  </span>
                  <span className="font-mono text-xs font-semibold uppercase tracking-wider text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full">
                    {cert.year}
                  </span>
                </div>

                <h3 className="section-heading text-lg sm:text-xl font-bold text-white leading-snug">
                  {cert.title}
                </h3>
                <p className="mt-2 text-sm sm:text-base text-slate-300">
                  {cert.issuer}
                </p>
              </div>

              {cert.credentialUrl && (
                <div className="mt-6 pt-4 border-t border-white/10">
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-semibold text-cyan-400 transition-colors hover:text-white"
                  >
                    View Credential <FiExternalLink />
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
