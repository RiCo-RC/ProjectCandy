import { createContext, useContext } from "react";
import { useFonts } from "expo-font";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const fonts = useFonts({
    "montserrat-regular": require("@montserrat/regular.ttf"),
    "roboto-regular": require("@roboto/regular.ttf"),
    "roboto-condensed-regular": require("@robotoCondensed/regular.ttf"),
    "roboto-condensed-italic": require("@robotoCondensed/italic.ttf"),
    "roboto-mono-regular": require("@robotoMono/regular.ttf"),
    "roboto-serif-regular": require("@robotoSerif/regular.ttf"),
    "roboto-slab-regular": require("@robotoSlab/regular.ttf"),
  });

  return (
    <ThemeContext.Provider value={{ fonts }}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
