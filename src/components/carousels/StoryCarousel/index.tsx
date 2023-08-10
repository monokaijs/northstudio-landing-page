import React, {useEffect, useRef, useState} from "react";
import styles from './styles.module.scss';

interface StoryCarouselProps {
  date: string;
  index: number;
  activated: boolean;
  image: string;
  onNext: () => any;
  onPrev: () => any;
  canGoNext: boolean;
  canGoPrev: boolean;
  slides: any[];
}

export default function StoryCarousel({slides, index, date, activated, image, onNext, onPrev, canGoPrev, canGoNext}: StoryCarouselProps) {
  return <div
    className={`${styles.container}`}
  >
    <div className={styles.figureContainer}>
      <div
        className={styles.figure}
        style={{
          backgroundImage: `url('${image}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflow: 'hidden',
        }}
        key={index}
      >
        <div className={styles.figureMeta}>
          <div>
            {date}
          </div>
        </div>
      </div>
    </div>
    <div className={styles.controls}>
      <div className={styles.navigation}>
        {canGoPrev && (
          <div className={styles.btn} onClick={onPrev}>
            ← Previous
          </div>
        )}
        {canGoNext && (
          <div className={styles.btn} onClick={onNext}>
            Next →
          </div>
        )}
      </div>
      <div className={styles.dotsContainer}>
        {slides.map((slide, i) => (
          <div className={styles.dot} key={i}>
            {i === index && (
              <div className={styles.dotSelected}></div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
}
