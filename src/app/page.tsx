"use client";
import styles from './page.module.css'
import HomeHero from "@/components/landing/HomeHero";
import AppHeader from "@/components/shared/Header";
import ThemeProvider from "@/components/providers/ThemeProvider";
import Story from "@/components/sections/Story";

export default function Home() {
  return (
    <main className={styles.main}>
      <ThemeProvider>
        <AppHeader/>
        <HomeHero/>
        <Story/>
      </ThemeProvider>
    </main>
  )
}
