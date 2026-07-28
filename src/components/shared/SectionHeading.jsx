import { motion } from "framer-motion";

/**
 * SectionHeading
 * Consistent "eyebrow + title + subtitle" header used at the top of every
 * section, so the rhythm of the page stays predictable and intentional.
 *
 * @param {string} eyebrow - small uppercase label above the title
 * @param {string} title - main heading text
 * @param {string} highlight - substring of `title` to render with gradient
 * @param {string} subtitle - optional supporting line
 * @param {"left"|"center"} align
 */
const SectionHeading = ({ eyebrow, title, highlight, subtitle, align = "center" }) => {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`mb-14 flex flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"}`}
    >
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-(--color-border) bg-white/5 px-4 py-1.5 font-mono text-xs uppercase tracking-[0.2em] text-(--color-cyan)">
          <span className="h-1.5 w-1.5 rounded-full bg-(--color-cyan)" />
          {eyebrow}
        </span>
      )}
      <h2 className="section-heading max-w-2xl text-3xl text-(--color-text) sm:text-4xl md:text-5xl">
        {parts.length > 1 ? (
          <>
            {parts[0]}
            <span className="text-gradient">{highlight}</span>
            {parts[1]}
          </>
        ) : (
          title
        )}
      </h2>
      {subtitle && (
        <p className="mt-4 max-w-xl text-base text-(--color-text-muted) sm:text-lg">{subtitle}</p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
