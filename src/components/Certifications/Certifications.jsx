import { motion } from "framer-motion";
import {
  FiAward,
  FiBookOpen,
  FiCalendar,
  FiCheckCircle,
  FiExternalLink,
  FiShield,
} from "react-icons/fi";
import { certifications } from "../../data/resumeData";
import SectionHeading from "../shared/SectionHeading";

/**
 * Certifications
 * Premium recruiter-focused credential showcase.
 * Features side-by-side balanced cards with structured row-based course and provider information.
 */
const Certifications = () => {
  return (
    <section id="certifications" className="relative py-20 sm:py-28 lg:py-32">
      <div className="container-px mx-auto max-w-[1240px]">
        <SectionHeading
          eyebrow="CREDENTIALS"
          title="Certifications & Training"
          highlight="Certifications"
          subtitle="Technical coursework and certifications completed during my academic studies."
        />

        {/* Two Equal-Width Professional Certification Cards */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.article
              key={cert.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              whileHover={{ y: -4 }}
              className="glass-panel group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-white/12 bg-[#090e1a]/95 p-7 sm:p-9 shadow-2xl backdrop-blur-2xl transition-all duration-300 hover:border-cyan-500/40"
            >
              {/* Subtle ambient corner glow */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-16 -top-16 h-36 w-36 rounded-full bg-cyan-500/[0.08] blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -bottom-16 -left-16 h-36 w-36 rounded-full bg-purple-500/[0.06] blur-2xl transition-opacity duration-500 group-hover:opacity-100"
              />

              <div className="relative z-10">
                {/* Top: Icon + Year Badge */}
                <div className="mb-5 flex items-center justify-between">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/20 via-cyan-500/10 to-purple-500/20 text-2xl text-cyan-300 shadow-inner border border-cyan-500/20 transition-transform duration-300 group-hover:scale-105">
                    <FiAward />
                  </span>
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1 font-mono text-xs font-semibold uppercase tracking-wider text-cyan-300 shadow-sm">
                    <FiCalendar className="text-xs" />
                    {cert.year}
                  </span>
                </div>

                {/* Title & Issuer Heading */}
                <h3 className="section-heading font-display text-xl sm:text-2xl font-bold leading-snug text-white group-hover:text-cyan-200 transition-colors">
                  {cert.title}
                </h3>
                <p className="mt-1.5 text-xs sm:text-sm font-medium text-slate-400">
                  {cert.issuer || cert.provider}
                </p>

                {/* Subtle Divider */}
                <div className="my-6 border-t border-white/10" />

                {/* Structured Icon + Label + Value Rows */}
                <div className="flex flex-col gap-3.5">
                  {/* Course Row */}
                  <div className="flex items-center justify-between gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-3 sm:p-3.5 transition-colors group-hover:border-white/10">
                    <div className="flex items-center gap-2.5 text-xs font-mono font-medium text-slate-400">
                      <FiBookOpen className="text-cyan-400 text-sm shrink-0" />
                      <span>Course</span>
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200 text-right">
                      {cert.course}
                    </span>
                  </div>

                  {/* Provider Row */}
                  <div className="flex items-center justify-between gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-3 sm:p-3.5 transition-colors group-hover:border-white/10">
                    <div className="flex items-center gap-2.5 text-xs font-mono font-medium text-slate-400">
                      <FiShield className="text-cyan-400 text-sm shrink-0" />
                      <span>Provider</span>
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200 text-right">
                      {cert.provider}
                    </span>
                  </div>

                  {/* Year Row */}
                  <div className="flex items-center justify-between gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-3 sm:p-3.5 transition-colors group-hover:border-white/10">
                    <div className="flex items-center gap-2.5 text-xs font-mono font-medium text-slate-400">
                      <FiCalendar className="text-cyan-400 text-sm shrink-0" />
                      <span>Year</span>
                    </div>
                    <span className="text-xs sm:text-sm font-semibold text-slate-200 text-right">
                      {cert.year}
                    </span>
                  </div>

                  {/* Optional Real Performance / Result (Only if real data exists) */}
                  {cert.performance && (
                    <div className="flex items-center justify-between gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-3 sm:p-3.5">
                      <div className="flex items-center gap-2.5 text-xs font-mono font-medium text-slate-400">
                        <FiAward className="text-cyan-400 text-sm shrink-0" />
                        <span>Performance</span>
                      </div>
                      <span className="text-xs sm:text-sm font-semibold text-slate-200 text-right">
                        {cert.performance}
                      </span>
                    </div>
                  )}

                  {/* Optional Real Credential ID (Only if real data exists) */}
                  {cert.credentialId && (
                    <div className="flex items-center justify-between gap-4 rounded-xl border border-white/5 bg-white/[0.02] p-3 sm:p-3.5">
                      <div className="flex items-center gap-2.5 text-xs font-mono font-medium text-slate-400">
                        <FiCheckCircle className="text-cyan-400 text-sm shrink-0" />
                        <span>Credential ID</span>
                      </div>
                      <span className="text-xs sm:text-sm font-mono font-semibold text-slate-200 text-right">
                        {cert.credentialId}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Bottom Credential Action */}
              <div className="mt-7 pt-4 border-t border-white/10">
                {cert.credentialUrl ? (
                  <a
                    href={cert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-cyan-400 transition-colors hover:text-white"
                  >
                    View Credential <FiExternalLink className="text-sm" />
                  </a>
                ) : (
                  <div className="flex items-center justify-between text-xs text-slate-400">
                    <span className="inline-flex items-center gap-1.5 text-[11px] font-mono text-cyan-300/90">
                      <FiCheckCircle className="text-cyan-400" /> Verified Academic Credential
                    </span>
                    <span className="font-mono text-[11px] text-slate-400">
                      {cert.year}
                    </span>
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
