import { View, Text, FlatList } from "react-native";

import { LEADERBOARD_MAX } from "@utils";
import styles from "@styles/main";

import CustomButton from "./../CustomButton";

const LeaderboardContent = ({ leaderboard, navigation }) => {
  return (
    <View style={[styles.viewBase, styles.leaderboardScreenContentView]}>
      {leaderboard.length > 0 && (
        <FlatList
          data={leaderboard.slice(0, LEADERBOARD_MAX)}
          keyExtractor={(item, index) =>
            // Checks if the ID is present:
            item.id?.toString() || index.toString()
          }
          renderItem={({ item, index }) => (
            <CustomButton
              type="tertiary"
              style={styles.leaderboardScreenButtonRow}
              // onPress={() =>
              //   navigation.navigate("DetailsScreen", {
              //     username: item.username,
              //   })
              // }
              onPress={null}
              disabled={false}
            >
              <Text style={styles.leaderboardScreenTextRank}>{index + 1}</Text>
              <Text style={styles.leaderboardScreenTextUser}>
                {item.username}
              </Text>
              <Text style={styles.leaderboardScreenTextScore}>
                {item.bestScore}
              </Text>
            </CustomButton>
          )}
        />
      )}
      {leaderboard.length == 0 && <Text style={styles.leaderboardScreenTextScoreNoScore}>No score !</Text>}
    </View>
  );
};

export default LeaderboardContent;
