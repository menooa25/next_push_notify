import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Message } from "@components/uniq";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Next Push Notify</title>
        <meta name="description" content="testing next push notify" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Message />
      </main>
    </div>
  );
}
