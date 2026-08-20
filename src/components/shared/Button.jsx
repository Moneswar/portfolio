import { motion } from "framer-motion";

/**
 * Button
 * High-accessibility, responsive interactive button component.
 * Variants:
 *  - "primary": High-visibility cyan/purple gradient for key conversions (e.g. View Projects, Live Demo)
 *  - "secondary" / "outline": Crisp frosted-glass border for secondary actions (e.g. Download Resume, GitHub)
 *  - "ghost": Minimalist hover style for tertiary actions (e.g. Contact Me)
 */
const Button = ({
  children,
  href,
  onClick,
  variant = "primary",
  icon: Icon,
  download = false,
  target,
  rel,
  type = "button",
  className = "",
  size = "md",
}) => {
  const sizeClasses =
    size === "sm"
      ? "px-4 py-2 text-xs"
      : size === "lg"
      ? "px-7 py-3.5 text-base"
      : "px-5 py-2.5 sm:px-6 sm:py-3 text-sm";

  const base = `group relative inline-flex items-center justify-center gap-2.5 overflow-hidden rounded-full font-semibold transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-cyan) cursor-pointer select-none ${sizeClasses}`;

  let variantStyles = "";
  if (variant === "primary") {
    variantStyles =
      "bg-gradient-to-r from-[#06b6d4] via-[#0284c7] to-[#8b5cf6] text-slate-950 font-bold shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0";
  } else if (variant === "outline" || variant === "secondary") {
    variantStyles =
      "border border-white/15 bg-white/[0.04] text-slate-200 backdrop-blur-md hover:border-(--color-cyan)/60 hover:bg-white/[0.08] hover:text-white hover:-translate-y-0.5 active:translate-y-0";
  } else {
    variantStyles =
      "border border-white/10 bg-transparent text-slate-300 hover:border-white/20 hover:bg-white/5 hover:text-white hover:-translate-y-0.5 active:translate-y-0";
  }

  const content = (
    <>
      {/* Subtle shine sweep on hover */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full"
      />
      <span className="relative z-10 flex items-center gap-2 whitespace-nowrap">
        {Icon && <Icon className="text-base shrink-0 transition-transform duration-300 group-hover:scale-110" />}
        {children}
      </span>
    </>
  );

  const motionProps = {
    whileTap: { scale: 0.98 },
  };

  if (href) {
    const isExternal = href.startsWith("http");
    const computedTarget = target || (isExternal ? "_blank" : undefined);
    const computedRel = rel || (isExternal ? "noopener noreferrer" : undefined);

    return (
      <motion.a
        href={href}
        download={download}
        target={computedTarget}
        rel={computedRel}
        className={`${base} ${variantStyles} ${className}`}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={`${base} ${variantStyles} ${className}`}
      {...motionProps}
    >
      {content}
    </motion.button>
  );
};

export default Button;
