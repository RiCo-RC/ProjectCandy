import { View, Text } from "react-native";

import styles from "@styles/main";

const LeaderboardHeader = () => {
  return (
    <View style={[styles.viewBase, styles.leaderboardScreenHeaderView]}>
      <Text style={styles.leaderboardScreenHeaderTitle}>Leaderboard</Text>
    </View>
  );
};

export default LeaderboardHeader;
