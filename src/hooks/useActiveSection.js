import { useEffect, useState } from "react";

/**
 * useActiveSection
 * Watches a set of section ids with IntersectionObserver and returns
 * whichever one currently occupies the most vertical space near the
 * top of the viewport. Powers the navbar's animated underline.
 *
 * @param {string[]} sectionIds - ids without the leading "#"
 * @returns {string} the id of the currently active section
 */
const useActiveSection = (sectionIds) => {
  const [activeId, setActiveId] = useState(sectionIds[0]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0.1, 0.25, 0.5, 0.75] }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sectionIds]);

  return activeId;
};

export default useActiveSection;
