import { motion } from "framer-motion";

/**
 * SectionHeading
 * Consistent eyebrow + title + subtitle header for all sections.
 * Optimized for recruiter scannability and responsive typography.
 */
const SectionHeading = ({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = "center",
}) => {
  const parts = highlight ? title.split(highlight) : [title];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`mb-12 sm:mb-16 flex flex-col ${
        align === "center"
          ? "items-center text-center mx-auto"
          : "items-start text-left"
      } max-w-3xl`}
    >
      {eyebrow && (
        <span className="mb-3.5 inline-flex items-center gap-2 rounded-full border border-(--color-border) bg-white/[0.04] px-4 py-1.5 font-mono text-xs font-semibold uppercase tracking-[0.18em] text-(--color-cyan) shadow-sm backdrop-blur-md">
          <span className="h-1.5 w-1.5 rounded-full bg-(--color-cyan) animate-pulse" />
          {eyebrow}
        </span>
      )}

      <h2 className="section-heading text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-white">
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
        <p className="mt-4 text-base sm:text-lg leading-relaxed text-(--color-text-muted) max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
};

export default SectionHeading;
