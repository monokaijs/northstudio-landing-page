import React from "react";
import styles from "./Header.module.scss";

export default function AppHeader() {
  return <div
    className={styles.container}
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
