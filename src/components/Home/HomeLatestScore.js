import { useEffect, useState } from "react";
import { View, Text } from "react-native";

import styles from "@styles/main";
import { getLatestScore } from "@database";

import CustomButtonIcon from "../CustomButtonIcon";

const HomeLatestScore = ({ navigation }) => {
  const [latestScore, setLatestScore] = useState(null);

  useEffect(() => {
    const fetchLatestScore = async () => {
      try {
        const data = await getLatestScore();
        setLatestScore(data);
        console.log("✅","Latest score fetched:", data);
      } catch (error) {
        console.log("❌","Error fetching latest score:", error);
      }
    };

    fetchLatestScore();
  }, []);

  return (
    <View style={[styles.viewBase, styles.homeScreenLatestScoreView]}>
      <Text style={styles.homeScreenLatestScoreTitle}>Latest score:</Text>
      {latestScore ? (
        <>
          <Text style={styles.homeScreenLatestScorePoints}>
            {latestScore.score_points}
          </Text>
          <Text style={styles.homeScreenLatestScoreUsername}>
            {latestScore.user_username}
          </Text>
          <Text style={styles.homeScreenLatestScoreDateTime}>
            {latestScore.score_registered_on}
          </Text>
        </>
      ) : (
        <Text style={styles.homeScreenLatestScoreNoScore}>
          No scores available
        </Text>
      )}
      <CustomButtonIcon
        type="tertiary"
        buttonIconType="ionicon"
        icon="trophy"
        iconSize={32}
        iconColor="#FF4500"
        buttonStyle={styles.homeScreenLatestScoreButtonIconScore}
        onPress={() => navigation.navigate("LeaderboardScreen")}
        disabled={false}
      />
    </View>
  );
};

export default HomeLatestScore;
