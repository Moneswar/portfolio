import { motion } from "framer-motion";

/**
 * Button
 * Two visual variants used throughout the site:
 *  - "primary": filled cyan→purple gradient, for the main call-to-action
 *  - "ghost": glass outline, for secondary actions
 * Renders an <a> when `href` is provided, otherwise a <button>.
 */
const Button = ({
  children,
  href,
  onClick,
  variant = "primary",
  icon: Icon,
  download = false,
  target,
  type = "button",
  className = "",
}) => {
  const base =
    "group relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-transform duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--color-cyan)";

  const styles =
    variant === "primary"
      ? "bg-gradient-to-r from-(--color-cyan) to-(--color-purple) text-(--color-bg) shadow-(--shadow-glow-cyan) hover:-translate-y-0.5"
      : "glass-panel text-(--color-text) hover:-translate-y-0.5 hover:border-(--color-cyan)/50";

  const content = (
    <>
      {/* Ripple/shine sweep on hover */}
      <span className="pointer-events-none absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-700 group-hover:translate-x-full" />
      <span className="relative z-10 flex items-center gap-2">
        {Icon && <Icon className="text-base" />}
        {children}
      </span>
    </>
  );

  const motionProps = {
    whileTap: { scale: 0.96 },
  };

  if (href) {
    return (
      <motion.a
        href={href}
        download={download}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={`${base} ${styles} ${className}`}
        {...motionProps}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button type={type} onClick={onClick} className={`${base} ${styles} ${className}`} {...motionProps}>
      {content}
    </motion.button>
  );
};

export default Button;
