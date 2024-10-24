import styles from "../styles/header.module.css"

export default function Header() {
  return (
    <header className={styles.header}>
      <a href="/"><h1>Shihiro&apos;s Site</h1></a>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </nav>
    </header>
  )
}