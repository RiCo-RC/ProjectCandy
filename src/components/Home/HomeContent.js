import { View } from "react-native";

import styles from "@styles/main";

import HomeLatestScore from "./HomeLatestScore";

const HomeContent = ({ navigation }) => {
  return (
    <View style={[styles.viewBase, styles.homeScreenContentView]}>
      <HomeLatestScore navigation={navigation} />
    </View>
  );
};

export default HomeContent;
