import { useState, useEffect } from "react";

export const useTypingAnimation = (text: string, duration: number = 2500) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    setDisplayedText("");
    setIsComplete(false);
    
    const chars = text.split("");
    const timePerChar = duration / chars.length;
    let currentIndex = 0;

    const interval = setInterval(() => {
      if (currentIndex < chars.length) {
        setDisplayedText(text.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        setIsComplete(true);
        clearInterval(interval);
      }
    }, timePerChar);

    return () => clearInterval(interval);
  }, [text, duration]);

  return { displayedText, isComplete };
};
