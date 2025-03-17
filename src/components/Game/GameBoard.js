import { View } from "react-native";
import { useState, useEffect } from "react";
import styles from "@styles/main";
import { isValidMove, getUpdatedBoardAfterMatch } from "@scripts";
import GameTile from "./GameTile";

const GameBoard = ({
  board,
  setBoard,
  calculateScore,
}) => {
  const [selectedTileOne, setSelectedTileOne] = useState(null);
  const [selectedTileTwo, setSelectedTileTwo] = useState(null);

  const handleTilePress = (index) => {
    if (!selectedTileOne) {
      setSelectedTileOne(index);
      return;
    }

    if (selectedTileOne === index) return;

    setSelectedTileTwo(index);
  };

  useEffect(() => {
    if (selectedTileOne !== null && selectedTileTwo !== null) {
      const currentBoard = [...board];

      if (isValidMove(selectedTileOne, selectedTileTwo, currentBoard)) {
        // Swap:
        [currentBoard[selectedTileOne], currentBoard[selectedTileTwo]] = [
          currentBoard[selectedTileTwo],
          currentBoard[selectedTileOne],
        ];

        // Update the set after a match:
        let { newBoard, matches } = getUpdatedBoardAfterMatch(currentBoard);
        setBoard(newBoard);

        // Score updated if a match is found:
        if (matches.length > 0) {
          console.log("calculatescore");
          calculateScore(matches);
        }
      }

      setSelectedTileOne(null);
      setSelectedTileTwo(null);
    }
  }, [selectedTileOne, selectedTileTwo]);

  return (
    <View style={[styles.viewBase, styles.gameScreenBoardView]}>
      {board.map((color, index) => (
        <GameTile
          key={index}
          color={color}
          onPress={() => handleTilePress(index)}
        />
      ))}
    </View>
  );
};

export default GameBoard;
