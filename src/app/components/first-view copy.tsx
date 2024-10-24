"use client";

import styles from "../styles/fv.module.css";
import TypingEffect from "./TypingEffect";
import { useState } from "react";

export default function FirstView() {
    const [isTypingComplete, setIsTypingComplete] = useState(false);
    return (
        <div className={styles.firstview}>
          <h1>
            <TypingEffect text="冒険しよう、その先の未来へ" speed={150} onComplete={() => setIsTypingComplete(true)}/>
              <span className={styles.typingCursor}></span>
          </h1>
            {/* <h1>冒険しよう、その先の未来へ</h1> */}
            {/* {isTypingComplete && <p>Go Adventure, to The NEXT.</p>} */}
            <p className={isTypingComplete ? styles.show : styles.hide}>Go Adventure, to The NEXT.</p>
            {/* <p>Go Adventure, to The NEXT.</p> */}
        </div>
    )
}