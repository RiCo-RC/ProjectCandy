import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "@styles/main";
import { generateBoard } from "@scripts";
import { GameHeader, GameContent, GameAction, GameModal } from "@components";

const GameScreen = ({ user }) => {
  const navigation = useNavigation();
  const [board, setBoard] = useState([]);
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [lifeLeft, setLifeLeft] = useState(3);
  const [progress, setProgress] = useState(50);
  const [progressThreshold, setProgressThreshold] = useState(100);
  const [isModalFormVisible, setModalFormVisible] = useState(false);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBoard = async () => {
      const newBoard = await generateBoard();
      setBoard(newBoard);
    };
    fetchBoard();
  }, []);

  const calculateScore = (matches) => {
    let pointsEarned = 0;

    console.log("matches", matches);

    // Regrouper les tuiles par couleur et par alignement
    const groupedMatches = [];
    let currentMatch = [];

    matches.forEach((tile, index) => {
      if (index === 0 || tile.color === matches[index - 1].color) {
        currentMatch.push(tile);
      } else {
        groupedMatches.push(currentMatch);
        currentMatch = [tile];
      }
    });

    if (currentMatch.length > 0) {
      groupedMatches.push(currentMatch);
    }

    console.log("groupedMatches", groupedMatches);

    // Appliquer le scoring basé sur la taille des groupes
    groupedMatches.forEach((match) => {
      console.log("match", match);

      if (match.length === 3) pointsEarned += 50 * level;
      if (match.length === 4) pointsEarned += 150 * level;
      if (match.length >= 5) pointsEarned += 500 * level;
    });

    console.log("pointsEarned", pointsEarned);
    updateProgress(pointsEarned);
  };

  const updateProgress = (points) => {
    let newScore = score + points;
    let newLevel = level;
    let newProgress = progress + points;
    let newThreshold = progressThreshold;

    while (newProgress >= newThreshold) {
      newProgress -= newThreshold;
      newLevel++;
      newThreshold = newLevel * 100;
    }

    setScore(newScore);
    setLevel(newLevel);
    setProgress(newProgress);
    setProgressThreshold(newThreshold);
    console.log("newscore", score);
    console.log("newlevel", level);
    console.log("newprogress", progress);
    console.log("newprogressthreshold", progressThreshold);
  };

  const handleResume = () => {
    setModalFormVisible(false);
  };
  const handleGiveUp = () => {
    setModalFormVisible(false);
    navigation.navigate("HomeScreen");
  };

  return (
    <View style={[styles.viewBase, styles.viewFull, styles.gameScreenView]}>
      <GameHeader
        score={score}
        level={level}
        lifeLeft={lifeLeft}
        progress={progress}
      />
      <GameContent
        board={board}
        setBoard={setBoard}
        calculateScore={calculateScore}
      />
      <GameAction
        board={board}
        setBoard={setBoard}
        isModalFormVisible={isModalFormVisible}
        setModalFormVisible={setModalFormVisible}
        setScore={setScore}
        setLevel={setLevel}
        setLifeLeft={setLifeLeft}
        setProgress={setProgress}
        setProgressThreshold={setProgressThreshold}
      />
      <GameModal
        isModalFormVisible={isModalFormVisible}
        isLoading={isLoading}
        handleResume={handleResume}
        handleGiveUp={handleGiveUp}
      />
    </View>
  );
};

export default GameScreen;
