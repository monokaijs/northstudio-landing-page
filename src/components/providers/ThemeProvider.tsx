"use client";
import React, {ReactNode, useContext, useState} from "react";

interface ThemeSettings {
  heroColors: {
    text: string;
    background: string;
  }
  setHeroColors?: React.Dispatch<React.SetStateAction<ThemeSettings['heroColors']>>,
}

const defaultThemeSettings: ThemeSettings = {
  heroColors: {
    text: '#232323',
    background: '#ffffff'
  },
};

const ThemeContext = React.createContext(defaultThemeSettings);
export const useThemeContext = () => useContext(ThemeContext);

export default function ThemeProvider({children}: {children: ReactNode}) {
  const [heroColors, setHeroColors] = useState<ThemeSettings['heroColors']>(defaultThemeSettings.heroColors);

  return <ThemeContext.Provider value={{
    heroColors,
    setHeroColors,
  }}>
    {children}
  </ThemeContext.Provider>
}
