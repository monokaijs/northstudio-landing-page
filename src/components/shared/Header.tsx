import React from "react";
import styles from "./Header.module.scss";
import {useThemeContext} from "@/components/providers/ThemeProvider";

export default function AppHeader() {
  const {heroColors} = useThemeContext();
  return <div
    className={styles.container}
    style={{
      color: heroColors.text
    }}
  >
    <div className={styles.branding}>
      NorthStudio
    </div>
    <div className={styles.links}>
      <a>
        Home
      </a>
      <a>
        Story
      </a>
      <a>
        Career
      </a>
      <a>
        Contact
      </a>
    </div>
  </div>
}
