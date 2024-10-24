import styles from '../styles/works.module.css';

export default function Works() {
  return (
    <section className={styles.body}>
      <h1>Works</h1>
      <div className={styles.works}>
        <ul>
          <a href="/dev/loading">
            <li>
              <h3>無限ローディング</h3>
              <p>ローディング画面を見続けられます</p>
            </li>
          </a>
          <a href="/dev/qr-code">
            <li>
              <h3>QRコードジェネレータ</h3>
              <p>QRコードを作れます</p>
            </li>
          </a>
          <a href="/">
            <li>
              <h3>仮置き</h3>
              <p>仮置き</p>
            </li>
          </a>
        </ul>
      </div>
    </section>
  );
}