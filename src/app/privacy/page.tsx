import Header from "../components/header";
import Footer from '../components/footer';
import styles from "../styles/privacy.module.css";

export default function Privacy() {
  return (
    <div>
      <Header />
      <div className={styles.main}>
        <h1>プライバシーポリシー</h1>
        <p>本サイトでは、Googleアナリティクスによるアクセス解析を利用しています。</p>
        <p>このアクセス解析は匿名で行われ、個人を特定するものではありません。</p>
        <p>また、このアクセス解析は、本サイトの利用状況を把握し、より良いサービスを提供する目的でのみ利用します。</p>
      </div>
      <Footer />
    </div>
  )
}