import { useState, useEffect, useRef, useCallback } from "react";

interface UseTypewriterOptions {
  speed?: number;
}

const useTypewriter = (
  text: string,
  { speed = 150 }: UseTypewriterOptions = {}
) => {
  const [displayedText, setDisplayedText] = useState("");
  const currentIndexRef = useRef(0);

  const typeText = useCallback(() => {
    const interval = setInterval(() => {
      if (currentIndexRef.current < text.length) {
        setDisplayedText((prev) => prev + text[currentIndexRef.current]);
        currentIndexRef.current++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [text, speed]);

  useEffect(() => {
    setDisplayedText("");
    currentIndexRef.current = 0;
    const cleanup = typeText();
    return cleanup;
  }, [typeText]);

  return displayedText;
};

export default useTypewriter;
