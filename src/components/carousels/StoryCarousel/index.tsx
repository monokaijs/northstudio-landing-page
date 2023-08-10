import React, {useEffect, useRef, useState} from "react";
import Story01 from "@/assets/figures/story-01.jpg";
import styles from './styles.module.scss';

interface StoryCarouselProps {
  activated: boolean;
}

export default function StoryCarousel({activated}: StoryCarouselProps) {
  return <div
    className={`${styles.container} ${activated ? styles.active : ''}`}
  >
    <div className={styles.figureContainer}>
      <div
        className={styles.figure}
        style={{
          backgroundImage: `url('${Story01.src}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
        }}
      >
        <div className={styles.figureMeta}>
          <div>
            MAY, 2023
          </div>
        </div>
      </div>
    </div>
    <div className={styles.controls}>
      <div className={styles.btn}>
        ← Previous
      </div>
      <div className={styles.btn}>
        Next →
      </div>
    </div>
  </div>
}
