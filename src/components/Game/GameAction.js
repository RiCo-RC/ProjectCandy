import { View } from "react-native";

import styles from "@styles/main";

import { CustomButtonIcon } from "@components";
import { generateBoard } from "@scripts";

const GameAction = ({
  setBoard,
  setModalFormVisible,
  setScore,
  setLevel,
  setLifeLeft,
  setProgress,
  setProgressThreshold,
}) => {
  const generateNewBoard = async () => {
    const newBoard = await generateBoard();
    setScore(0);
    setLevel(1);
    setLifeLeft(3);
    setProgress(50);
    setProgressThreshold(100);
    setBoard(newBoard);
  };

  const handlePause = async () => {
    setModalFormVisible(true);
  };

  return (
    <View style={[styles.viewBase, styles.gameScreenActionView]}>
      <CustomButtonIcon
        type="primary"
        buttonIconType="ionicon"
        icon="shuffle-outline"
        iconSize={22}
        iconColor="white"
        buttonStyle={{ width: "auto" }}
        onPress={generateNewBoard}
      />
      <CustomButtonIcon
        type="primary"
        buttonIconType="ionicon"
        icon="pause-outline"
        iconSize={22}
        iconColor="white"
        buttonStyle={{ width: "auto" }}
        onPress={handlePause}
      />
      <CustomButtonIcon
        type="primary"
        buttonIconType="ionicon"
        icon="help-outline"
        iconSize={22}
        iconColor="white"
        buttonStyle={{ width: "auto" }}
        onPress={null}
      />
    </View>
  );
};

export default GameAction;
