import React from "react";
import styles from "./Header.module.scss";
import {useThemeContext} from "@/components/providers/ThemeProvider";
import Hamburger from "@/assets/icons/Hamburger";
import {NavigationConfig} from "@/configs/app.config";
import NorthStudioIcon from "@/assets/icons/NorthStudio";

export default function AppHeader() {
  const {heroColors} = useThemeContext();
  return <div
    className={styles.container}
    style={{
      color: heroColors.text
    }}
  >
    <div className={styles.headerContent}>
      <div className={styles.branding}>
        <NorthStudioIcon width={16} height={16} fill={heroColors.text} />
        NorthStudio
      </div>
      <div className={styles.links}>
        {NavigationConfig.map(item => (
          <a
            href={item.url} key={item.key} style={{color: heroColors.text}}
            onClick={function (e) {
              e.preventDefault();
              const id = (e.target as HTMLLinkElement).href.split('/').pop();
              if (!id) return;
              document.querySelector(id as string)?.scrollIntoView({
                behavior: 'smooth'
              });
            }}
          >
            {item.title}
          </a>
        ))}
        <a className={styles.hamburgerBtn}>
          <Hamburger color={heroColors.text}/>
        </a>
      </div>
    </div>
  </div>
}
