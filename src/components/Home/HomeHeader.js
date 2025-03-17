import { View, Text } from "react-native";

import styles from "@styles/main";

import { VERSION } from "@utils";

const HomeHeader = () => {
  return (
    <View style={[styles.viewBase, styles.homeScreenHeaderView]}>
      <Text style={styles.homeScreenHeaderTitle}>Stellar Colors Match</Text>
      <Text style={styles.homeScreenHeaderVersion}>v{VERSION}</Text>
    </View>
  );
};

export default HomeHeader;
