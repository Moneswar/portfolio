import { useEffect, useState } from "react";

/**
 * useTypewriter
 * Cycles through `phrases`, typing and deleting each one character at a
 * time. Pure setTimeout-driven — no dependency needed.
 *
 * @param {string[]} phrases
 * @param {{typingSpeed?: number, deletingSpeed?: number, pause?: number}} options
 */
const useTypewriter = (phrases, options = {}) => {
  const { typingSpeed = 70, deletingSpeed = 40, pause = 1800 } = options;
  const [text, setText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex % phrases.length];
    let timeout;

    if (!isDeleting && text === currentPhrase) {
      timeout = setTimeout(() => setIsDeleting(true), pause);
    } else if (isDeleting && text === "") {
      setIsDeleting(false);
      setPhraseIndex((prev) => prev + 1);
    } else {
      const nextText = isDeleting
        ? currentPhrase.substring(0, text.length - 1)
        : currentPhrase.substring(0, text.length + 1);

      timeout = setTimeout(
        () => setText(nextText),
        isDeleting ? deletingSpeed : typingSpeed
      );
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, phraseIndex, phrases, typingSpeed, deletingSpeed, pause]);

  return text;
};

export default useTypewriter;
