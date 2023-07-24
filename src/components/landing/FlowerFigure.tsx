import React from "react";
import styles from "./FlowerFigure.module.scss";

interface FlowerFigureProps {
  image1: string;
  image2: string;
  bgColor?: string;
}

export default function FlowerFigure(props: FlowerFigureProps) {
  return <div className={styles.container}>
    <div className={styles.col1}>
      <div
        className={styles.image1}
        style={{
          backgroundImage: `url(${props.image1})`,
        }}
      ></div>
    </div>
    <div className={styles.col2}>
      <div
        className={styles.image2}
        style={{
          backgroundImage: `url(${props.image2})`
        }}
      ></div>
      <div
        className={styles.symbol}
        style={{
          backgroundColor: props.bgColor || "#000000",
          opacity: .1
        }}
      ></div>
    </div>
  </div>
}
