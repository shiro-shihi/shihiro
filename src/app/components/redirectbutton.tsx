'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

const RedirectButton = () => {
  const [countdown, setCountdown] = useState<number | null>(null);
  const router = useRouter();

  const handleClick = () => {
    setCountdown(5);  // 5秒のカウントダウンを開始
  };

  useEffect(() => {
    if (countdown === null) return;

    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer); // クリーンアップ
    } else {
      router.push('/');  // カウントが0になったら/homeへ遷移
    }
  }, [countdown, router]);

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <button onClick={handleClick} style={{ padding: '10px 20px', fontSize: '16px' }}>
        諦めて人生をやりなおす。
      </button>

      {countdown !== null && countdown > 0 && (
        <p>{countdown}秒後にホームに戻ります...</p>
      )}
    </div>
  );
};

export default RedirectButton;
