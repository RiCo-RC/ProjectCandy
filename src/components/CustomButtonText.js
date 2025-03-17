import { Text } from "react-native";

import CustomButton from './CustomButton';

const CustomButtonText = ({
  text,
  type = "primary",
  buttonStyle,
  textStyle,
  onPress,
  disabled = false,
}) => {
  return (
    <CustomButton type={type} style={[buttonStyle]} onPress={onPress} disabled={disabled}>
      <Text style={[textStyle]}>{text || "Texte manquant"}</Text>
    </CustomButton>
  )
};

export default CustomButtonText;