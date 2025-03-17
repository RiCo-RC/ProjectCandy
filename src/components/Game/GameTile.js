import { TouchableOpacity, View, Text } from "react-native";
import styles from "@styles/main";

const GameTile = ({ color, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
        <View
          style={[
            styles.gameScreenBoardCellView,
            { backgroundColor: color },
          ]}
        >
          <Text style={styles.gameScreenTextBoardCell}></Text>
      </View>
    </TouchableOpacity>
  );
};

export default GameTile;
