import { Text } from "react-native";
import CustomButton from "./CustomButton";
import CustomIcon from "./CustomIcon";

const CustomButtonIconAndText = ({
  children,
  type = "primary",
  buttonIconType = "custom",
  icon,
  iconSize,
  iconColor,
  buttonStyle,
  iconStyle,
  textStyle = {}, 
  onPress,
  disabled = false,
}) => {
  return (
    <CustomButton type={type} style={buttonStyle} onPress={onPress} disabled={disabled}>
      <CustomIcon buttonType={buttonIconType} icon={icon} iconSize={iconSize} iconColor={iconColor} style={iconStyle} />
      <Text style={Array.isArray(textStyle) ? [...textStyle] : [textStyle]}>{children}</Text>
    </CustomButton>
  );
};

export default CustomButtonIconAndText;
