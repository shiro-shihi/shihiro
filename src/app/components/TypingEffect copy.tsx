"use client";
import { useEffect, useState } from 'react';

type TypingEffectProps = {
  text: string;
  speed?: number;
  onComplete?: () => void;
};

/**
 * タイピングエフェクトを表示するコンポーネント。
 *
 * @param {TypingEffectProps} props - コンポーネントのプロパティ。
 * @param {string} props.text - 表示するテキスト。
 * @param {number} [props.speed=100] - 文字が表示される速度（ミリ秒単位）。
 * @param {() => void} [props.onComplete] - テキストの表示が完了したときに呼び出されるコールバック関数。
 *
 * @returns {JSX.Element} タイピングエフェクトを表示するためのスパン要素。
 */


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