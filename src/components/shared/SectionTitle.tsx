import React, {ReactNode} from "react";
import styles from "./SectionTitle.module.scss";

interface SectionTitleProps {
  children: ReactNode
}

export default function SectionTitle({children}: SectionTitleProps) {
  return <div className={styles.wrapper}>
    <div className={styles.shadow}>
      {children}
    </div>
    <div className={styles.title}>
      {children}
    </div>
  </div>
}
