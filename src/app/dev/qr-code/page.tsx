"use client";

import React, { useState, useRef } from 'react';
import { QRCodeCanvas } from 'qrcode.react';
import styles from "....../styles/qrcode.module.css"

const QRCodeGenerator: React.FC = () => {
  const [text, setText] = useState('');
  const [size, setSize] = useState(256);
  const qrRef = useRef<HTMLDivElement>(null);

  const handleTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const handleSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSize(Number(e.target.value));
  };

  const handleDownload = () => {
    if (qrRef.current) {
      const canvas = qrRef.current.querySelector('canvas');
      if (canvas) {
        const url = canvas.toDataURL();
        const link = document.createElement('a');
        link.href = url;
        link.download = 'qrcode.png';
        link.click();
      }
    }
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>QRコードジェネレーター</h1>
      <p>入力された情報はサーバには送信されず、あなたのみ表示できます。</p>
      <div style={{ marginBottom: '20px' }}>
        <input
          type="text"
          placeholder="テキストを入力してください"
          value={text}
          onChange={handleTextChange}
          style={{ padding: '10px', width: '80%', fontSize: '16px' }}
        />
      </div>
      <div>
        <button onClick={() => setText("https://")} style={{marginBottom: "10px"}}>Webサイト</button>
        <button onClick={() => setText("mailto:")} style={{marginLeft: "10px", marginBottom: "10px"}}>メール</button>
        <button onClick={() => setText("WIFI:")} style={{marginLeft: "10px", marginBottom: "10px"}}>WiFi共有</button>
        {text.startsWith("WIFI:") && (
          <div>
            <input
              type="text"
              placeholder="SSIDを入力してください"
              onChange={(e) => {
                const ssid = e.target.value;
                const password = text.match(/P:(.*?);;/)?.[1] || '';
                const security = text.match(/T:(.*?);/)?.[1] || 'WPA';
                setText(`WIFI:S:${ssid};T:${security};P:${password};;`);
              }}
              style={{ padding: '10px', width: '80%', fontSize: '16px', marginBottom: '10px' }}
            />
            <input
              type="text"
              placeholder="パスワードを入力してください"
              onChange={(e) => {
                const password = e.target.value;
                const ssid = text.match(/S:(.*?);/)?.[1] || '';
                const security = text.match(/T:(.*?);/)?.[1] || 'WPA';
                setText(`WIFI:S:${ssid};T:${security};P:${password};;`);
              }}
              style={{ padding: '10px', width: '80%', fontSize: '16px', marginBottom: '10px' }}
            />
            <select
              onChange={(e) => {
                const security = e.target.value;
                const ssid = text.match(/S:(.*?);/)?.[1] || '';
                const password = text.match(/P:(.*?);;/)?.[1] || '';
                setText(`WIFI:S:${ssid};T:${security};P:${password};;`);
              }}
              className={styles.select}
            >
              <option value="WPA">WPA</option>
              <option value="WEP">WEP</option>
              <option value="nopass">No Password</option>
            </select>
          </div>
        )}
      </div>
      <div style={{ marginBottom: '20px' }}>
        <label>
          サイズ:
          <input
            type="number"
            value={size}
            onChange={handleSizeChange}
            style={{ padding: '10px', fontSize: '16px', marginLeft: '10px' }}
          />
        </label>
      </div>
      <div ref={qrRef}>
        <QRCodeCanvas value={text} size={size} />
      </div>
      <button onClick={handleDownload} style={{ padding: '10px 20px', fontSize: '16px', marginTop: '20px' }}>
        ダウンロード
      </button>
      <div style={{marginTop: "50px"}}>
        <p>© shihiro.com 2024<br />
          QRコードは株式会社デンソーウェーブの登録商標です。</p>
      </div>
    </div>
  );
};

export default QRCodeGenerator;