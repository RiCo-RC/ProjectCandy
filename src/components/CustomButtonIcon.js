import CustomButton from "./CustomButton";
import CustomIcon from "./CustomIcon";

const CustomButtonIcon = ({
  type = "primary",
  buttonIconType = "custom",
  icon,
  iconSize,
  iconColor,
  iconStyle,
  buttonStyle,
  onPress,
  disabled = false,
}) => {
  return (
    <CustomButton
      type={type}
      style={[buttonStyle]}
      onPress={onPress}
      disabled={disabled}
    >
      <CustomIcon buttonType={buttonIconType} icon={icon} iconSize={iconSize} iconColor={iconColor} style={iconStyle} />
    </CustomButton>
  );
};

export default CustomButtonIcon;
