import styles from './page.module.css'
import HomeHero from "@/components/landing/HomeHero";
import AppHeader from "@/components/shared/Header";

export default function Home() {
  return (
    <main className={styles.main}>
      <AppHeader/>
      <HomeHero/>
    </main>
  )
}
