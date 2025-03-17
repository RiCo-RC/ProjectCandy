import { Image } from "react-native";
import { Ionicons } from '@expo/vector-icons';

import styles from "@styles/main";

const CustomIcon = ({ 
  buttonType = "custom",
  icon = "loading", 
  iconSize = 0,
  iconColor = "transparent",
  style = {} 
}) => {
  const defSource = {
    loading: require("@assets/custom/logo.png"),
  };

  const getSource = defSource[icon];

  return (
    <>
    {buttonType == "custom" && (
      <Image source={getSource} style={[styles.imageBase, style]} />
    )}
    {buttonType == "ionicon" && (
      <Ionicons name={icon} size={iconSize} color={iconColor} />
    )}
    </>
  );
};

export default CustomIcon;