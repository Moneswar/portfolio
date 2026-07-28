import { useEffect, useRef } from "react";

/**
 * CursorGlow
 * A soft radial light that trails the cursor on desktop pointers only.
 * Uses refs + direct style mutation (not React state) so it stays at 60fps
 * without triggering re-renders on every mousemove.
 */
const CursorGlow = () => {
  const glowRef = useRef(null);

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer) return; // skip on touch devices

    let raf = null;
    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    const handleMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          if (glowRef.current) {
            glowRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
          }
          raf = null;
        });
      }
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <div
      ref={glowRef}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-40 hidden h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.15] mix-blend-screen md:block"
      style={{
        background:
          "radial-gradient(circle, var(--color-cyan) 0%, var(--color-purple) 45%, transparent 70%)",
        willChange: "transform",
      }}
    />
  );
};

export default CursorGlow;
