import React from "react";
import styles from "./HomeHeroContent.module.scss";
import FlowerFigure from "@/components/landing/FlowerFigure";
import {HeroItem} from "@/components/landing/HomeHero";

interface HomeHeroContentProps {
  item: HeroItem
}

export default function HomeHeroContent({item}: HomeHeroContentProps) {
  return <div className={styles.container}>
    <div className={styles.figure}>
      <FlowerFigure
        image1={item.meta.images[0]}
        image2={item.meta.images[1]}
        bgColor={item.txtColor}
      />
    </div>
    <div className={styles.metaInfo}>
      <div className={styles.title}>
        {item.meta.title}
      </div>
      <div className={styles.description}>
        {item.meta.description}
      </div>
    </div>
  </div>
}
