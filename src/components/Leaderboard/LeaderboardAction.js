import { View } from "react-native";

import styles from "@styles/main";

import CustomButtonIconAndText from "@components/CustomButtonIconAndText";

const LeaderboardAction = ({navigation}) => {
  return (
    <View style={[styles.viewBase, styles.leaderboardScreenActionView]}>
      <CustomButtonIconAndText
        type="primary"
        buttonIconType="ionicon"
        icon="home-outline"
        iconSize={30}
        iconColor="white"
        onPress={() => navigation.navigate("HomeScreen")}
        disabled={false}
        textStyle={styles.leaderboardScreenButtonBack}
      >
        Go back
      </CustomButtonIconAndText>
    </View>
  );
};

export default LeaderboardAction;
