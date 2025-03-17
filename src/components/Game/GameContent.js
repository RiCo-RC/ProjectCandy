import { View } from "react-native";

import styles from "@styles/main";

import GameBoard from "./GameBoard";

const GameContent = ({
  board,
  setBoard,
  calculateScore,
}) => {
  console.log("gameContent", board);
  return (
    <View style={[styles.viewBase, styles.gameScreenContentView]}>
      <GameBoard
        board={board}
        setBoard={setBoard}
        calculateScore={calculateScore}
      />
    </View>
  );
};

export default GameContent;
