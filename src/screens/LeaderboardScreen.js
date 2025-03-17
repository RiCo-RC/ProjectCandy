import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "@styles/main";

import { getLeaderboard } from "@utils";
import {
  LeaderboardHeader,
  LeaderboardContent,
  LeaderboardAction,
} from "@components";

const LeaderboardScreen = () => {
  const navigation = useNavigation();
  const [leaderboard, setLeaderboard] = useState([]);

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const data = await getLeaderboard();
        setLeaderboard(data);
        console.log("✅", "Leaderboard fetched:", data);
      } catch (error) {
        console.log("❌", "Error fetching leaderboard:", error);
      }
    };

    fetchLeaderboard();
  }, []);

  return (
    <View
      style={[styles.viewBase, styles.viewFull, styles.leaderboardScreenView]}
    >
      <LeaderboardHeader />
      <LeaderboardContent leaderboard={leaderboard} navigation={navigation} />
      <LeaderboardAction navigation={navigation} />
    </View>
  );
};

export default LeaderboardScreen;
