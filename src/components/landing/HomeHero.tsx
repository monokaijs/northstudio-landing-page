"use client";
import React, {useState} from "react";
import styles from "./styles.module.scss";
import NorthStudioIcon from "@/assets/icons/NorthStudio";
import NorthStudioPattern from "@/assets/northstudio-pattern.svg";
import NorthStudioPatternLight from "@/assets/northstudio-pattern-light.svg";
import HomeHeroContent from "@/components/landing/HomeHeroContent";

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
  const [bgColor, setBgColor] = useState('white');
  const [isLight, setIsLight] = useState(true);
  const [showContent, setShowContent] = useState(false);
  const [selectedItem, setSelectedItem] = useState(items[0]);

  const reset = () => {
    setTextColor('#232323');
    setBgColor('white');
    setIsLight(true);
    setShowContent(false);
  }

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
      ): (
        <div className={styles.logoWrapper}>
          <NorthStudioIcon fill={textColor}/>
          <div className={styles.companyMeta}>
            <div className={styles.companyName}>
              North<div className={styles.studioPart}>Studio</div>
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
            setBgColor(item.bgColor);
            setTextColor(item.txtColor);
            setShowContent(true);
            setSelectedItem(item);
          }}
          onMouseLeave={reset}
        >
          {item.title}
        </div>
      ))}
    </div>
  </div>
}
