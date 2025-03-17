import { useState } from "react";
import { TouchableOpacity } from "react-native";

import styles from "@styles/main";

const CustomButton = ({
  children,
  type = "primary",
  style,
  onPress,
  disabled = false,
}) => {
  const [opacity, setOpacity] = useState(1);

  const defTypeStyle = {
    primary: styles.buttonPrimary,
    secondary: styles.buttonSecondary,
    tertiairy: styles.buttonTertiary,
  };
  const getTypeStyle = defTypeStyle[type];

  const disabledStyle = disabled ? {opacity: 0.5} : {};

  return (
    <TouchableOpacity
      style={[styles.buttonBase, getTypeStyle, opacity, style, disabledStyle]}
      onPress={disabled ? null : onPress}
      onPressIn={() => !disabled && setOpacity(0.8)}
      onPressOut={() => !disabled && setOpacity(1)}
      disabled={disabled}
    >
      {children}
    </TouchableOpacity>
  )
};

export default CustomButton;