import { Text } from "react-native";

import CustomButton from './CustomButton';
import CustomIcon from "./CustomIcon";

const CustomButtonWithLabel = ({
  label,
  text,
  type = "primary",
  buttonType = "text",
  buttonIconType = "custom",
  icon, 
  iconSize,
  iconColor,
  buttonStyle,
  labelStyle,
  textStyle,
  iconStyle,
  onPress,
  disabled = false,
}) => {
  return (
    <CustomButton type={type} style={[buttonStyle]} onPress={onPress} disabled={disabled}>
      <Text style={labelStyle}>{label}{" "}</Text>
      {buttonType == "text" && <Text style={textStyle}>{text}</Text>}
      {buttonType == "icon" && <CustomIcon buttonType={buttonIconType} icon={icon} iconSize={iconSize} iconColor={iconColor} style={iconStyle} />}
    </CustomButton>
  )
};

export default CustomButtonWithLabel;