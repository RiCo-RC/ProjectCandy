import { View } from "react-native";

import styles from "@styles/main";

import CustomButtonIconAndText from "@components/CustomButtonIconAndText";

const HomeAction = ({ handleGamePress, isLoading }) => {
  return (
    <View style={[styles.viewBase, styles.homeScreenActionView]}>
      <CustomButtonIconAndText
        type="primary"
        buttonIconType="ionicon"
        icon="play-circle"
        iconSize={30}
        iconColor="white"
        onPress={handleGamePress}
        disabled={false}
        textStyle={styles.homeScreenButtonReady}
      >
        {isLoading ? "Loading..." : "Ready to play!"}
      </CustomButtonIconAndText>
    </View>
  );
};

export default HomeAction;
