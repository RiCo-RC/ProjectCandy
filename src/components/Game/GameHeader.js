import { View, Text } from "react-native";

import styles from "@styles/main";

const GameHeader = ({
  score,
  level,
  lifeLeft,
  progress,
}) => {
  return (
    <View style={[styles.viewBase, styles.gameScreenHeaderView]}>
      <Text style={styles.gameScreenHeaderTextScore}>Score: {score || 0}</Text>
      <Text style={styles.gameScreenHeaderTextLevel}>
        Level: {level || 1} ({progress || 0}%)
      </Text>
      <Text style={styles.gameScreenHeaderTextLife}>Life: {lifeLeft || 3}</Text>
    </View>
  );
};

export default GameHeader;
