import styles from "../styles/footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      <p>© 2024 shihiro.com</p>
      <nav aria-label="Footer navigation">
        <ul>
          <li><a href="/about">About Me</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/privacy">Privacy Policy</a></li>
        </ul>
      </nav>
    </footer>
  );
}