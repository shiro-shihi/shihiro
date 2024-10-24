"use client";

import styles from "../styles/fv.module.css";
import TypingEffect from "./TypingEffect";
import { useState, useEffect } from "react";

export default function FirstView() {
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showParagraph, setShowParagraph] = useState(false);

  useEffect(() => {
    if (isTypingComplete) {
      const timer = setTimeout(() => {
        setShowParagraph(true);
      }, 150);
      return () => clearTimeout(timer);
    }
  }, [isTypingComplete]);

  return (
    <div className={styles.firstview}>
      <h1>
      <TypingEffect text="冒険しよう、その先の未来へ" speed={150} onComplete={() => setIsTypingComplete(true)}/>
      </h1>
      <p className={showParagraph ? styles.show : styles.hide}>Go Adventure, to The NEXT.</p>
    </div>
  )
}