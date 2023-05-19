"use client";
import AuthDialog from "@/components/ui/authDialog/authDialog";
import Navbar from "../components/ui/navbar/navbar";
import Sidebar from "@/components/ui/sidebar/sidebar";
import styles from "../styles/homepage.module.scss";

export default function Home() {
  return (
    <>
      <header className={styles.header}>
        <h1>BetFactor</h1>
        <Navbar />
        <AuthDialog />
      </header>
      <main className={styles.main}>
        <Sidebar title="Categories" className={styles.sidebar}></Sidebar>
      </main>
    </>
  );
}
