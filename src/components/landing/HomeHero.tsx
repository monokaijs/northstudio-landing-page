"use client";
import React, {useEffect, useState} from "react";
import styles from "./styles.module.scss";
import NorthStudioIcon from "@/assets/icons/NorthStudio";
import NorthStudioPattern from "@/assets/northstudio-pattern.svg";
import NorthStudioPatternLight from "@/assets/northstudio-pattern-light.svg";
import HomeHeroContent from "@/components/landing/HomeHeroContent";
import {useThemeContext} from "@/components/providers/ThemeProvider";

export interface HeroItem {
  title: string;
  bgColor: string;
  txtColor: string;
  meta: {
    images: string[];
    title: string;
    description: string;
  }
}

const items: HeroItem[] = [{
  title: 'Young',
  bgColor: '#cafe0e',
  txtColor: '#232323',
  meta: {
    images: [
      'https://northstudio.vn/wp-content/uploads/2021/04/hero-1.jpg',
      'https://northstudio.vn/wp-content/uploads/2021/04/hero-2.jpg',
    ],
    title: `We're young buddies`,
    description: `We focus on building young personnel with the belief that the strength comes from creativity. With the desire to create and the desire to contribute, our team uses our youth to create practical values and continuously improve.`
  }
}, {
  title: 'Passionate',
  bgColor: '#ff6000',
  txtColor: '#ffffff',
  meta: {
    images: [
      'https://northstudio.vn/wp-content/uploads/2021/04/hero-1.jpg',
      'https://northstudio.vn/wp-content/uploads/2021/04/hero-2.jpg',
    ],
    title: `Empowered by passion`,
    description: `Born with products from passion, we understand that bringing inspiration into the product development process is the foundation of creating truly quality products.`
  }
}, {
  title: 'Dedicated',
  bgColor: '#232323',
  txtColor: '#ffffff',
  meta: {
    images: [
      'https://northstudio.vn/wp-content/uploads/2021/04/hero-1.jpg',
      'https://northstudio.vn/wp-content/uploads/2021/04/hero-2.jpg',
    ],
    title: `Product first, time prioritized`,
    description: `Time is a factor we always put first when developing products. The development process is optimized in terms of time and product quality is something we are always aware of the importance.`
  }
}]

export default function HomeHero() {
  const [textColor, setTextColor] = useState('#232323');
  const [locked, setLocked] = useState(false);
  const [bgColor, setBgColor] = useState('white');
  const [isLight, setIsLight] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[0]);
  const [studio, setStudio] = useState('Studio');
  const {setHeroColors} = useThemeContext();

  const swapStudio = () => {
    if (studio === 'Studio') {
      setStudio('Apps');
    } else if (studio === 'Apps') {
      setStudio('Lab');
    } else if (studio === 'Lab') {
      setStudio('Minds');
    } else {
      setStudio('Studio');
    }
  }

  const reset = () => {
    if (locked) return;
    setTextColor('#232323');
    setBgColor('white');
    setIsLight(true);
    setShowContent(false);
  }

  useEffect(() => {
    if (setHeroColors) setHeroColors({
      text: textColor,
      background: bgColor,
    })
  }, [bgColor, textColor]);


  useEffect(() => {
    setTimeout(() => {
      setLocked(false);
    }, 30000);
  }, [locked]);

  return <div
    className={styles.homeHero}
    style={{
      backgroundImage: `url(${isLight ? NorthStudioPattern.src : NorthStudioPatternLight.src})`,
      backgroundColor: bgColor,
      color: textColor,
    }}
  >
    <div className={styles.homeHeroMeta}>
      {showContent ? (
        <HomeHeroContent
          item={selectedItem}
        />
      ) : (
        <div className={styles.logoWrapper}>
          <NorthStudioIcon className={styles.icon} fill={textColor} onClick={swapStudio}/>
          <div className={styles.companyMeta}>
            <div className={styles.companyName}>
              North
              <div className={styles.studioPart} onClick={swapStudio}>
                {studio}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>

    <div className={styles.companyKeyPoints}>
      {items.map(item => (
        <div
          key={item.title}
          onMouseEnter={() => {
            if (!locked) {
              setBgColor(item.bgColor);
              setTextColor(item.txtColor);
              setShowContent(true);
              setSelectedItem(item);
            }
          }}
          onMouseLeave={reset}
          onClick={() => {
            if (locked) {
              setBgColor(item.bgColor);
              setTextColor(item.txtColor);
              setShowContent(true);
              setSelectedItem(item);
            }
            setLocked(!locked);
          }}
          className={(selectedItem.title === item.title && locked) ? styles.pickerSelected : undefined}
        >
          {item.title}
        </div>
      ))}
    </div>
  </div>
}
