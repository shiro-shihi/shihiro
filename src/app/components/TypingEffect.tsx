"use client";
import { useEffect, useState } from 'react';

type TypingEffectProps = {
  text: string;
  speed?: number;
  onComplete?: () => void;
};

const TypingEffect: React.FC<TypingEffectProps> = ({ text, speed = 100, onComplete }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);

      return () => clearTimeout(timeout);
    } else if (onComplete) {
      onComplete();
    }
  }, [index, text, speed, onComplete]);

  return <span>{displayedText}</span>;
};

export default TypingEffect;