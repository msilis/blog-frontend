import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <header>
        <h2>Blog</h2>
      </header>
      <nav>
        <Link href="/blog">Blog page</Link>
      </nav>
    </main>
  );
}
