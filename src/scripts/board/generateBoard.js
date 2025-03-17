import { BOARD_SIZE, BOARD_GRID_SIZE, BOARD_ELEMENTS } from "@utils";

import { isMatchAtIndex, isMatchAtIndex2, matchExists } from "./matchBoard";

export const colorGenerator = (listElement = BOARD_ELEMENTS) => {
  return listElement[Math.floor(Math.random() * listElement.length)];
};

export const generateBoard = async () => {
  let board = [];
  let elements = [...BOARD_ELEMENTS];

  for (let i = 0; i < BOARD_SIZE; i++) board.push(colorGenerator());

  while (matchExists(board)) {
    for (let i = 0; i < BOARD_SIZE; i++) {
      if (isMatchAtIndex(board, i)) {
        elements.splice(i, 1);
        board[i] = colorGenerator(elements);
        elements = [...BOARD_ELEMENTS];
      }
    }
  }
  return board;
};

export const getUpdatedBoardAfterMatch = (board) => {
  let newBoard = [...board];
  let hasMatch = false;
  let matches = [];

  // Mark tiles to be deleted
  for (let i = 0; i < newBoard.length; i++) {
    if (isMatchAtIndex2(newBoard, i, BOARD_GRID_SIZE)) {
      matches.push({ index: i, color: newBoard[i] });
      hasMatch = true;
    }
  }

  if (!hasMatch) return { newBoard, matches: [] };

  console.log(">>","Match found, tiles removed...");
  matches.forEach(({ index, color }) =>
    console.log(`">>","Index ${index}, Couleur ${color}`)
  );

  // Deletion of marked tiles (set to null)
  matches.forEach(({ index }) => (newBoard[index] = null));

  console.log(">>","Tray status after removal:");
  newBoard.forEach((color, index) =>
    console.log(`Index: ${index}, Color: ${color !== null ? color : "❌, (null)"}`)
  );

  // Move tiles down until stabilized
  let hasFallingTiles = true;
  while (hasFallingTiles) {
    hasFallingTiles = false;

    for (let i = 0; i < BOARD_SIZE - BOARD_GRID_SIZE; i++) {
      if (newBoard[i] !== null && newBoard[i + BOARD_GRID_SIZE] === null) {
        [newBoard[i], newBoard[i + BOARD_GRID_SIZE]] = [
          newBoard[i + BOARD_GRID_SIZE],
          newBoard[i],
        ];
        hasFallingTiles = true;
      }
    }
  }

  console.log(">>","Stabilized plateau after lowering the tiles:");
  newBoard.forEach((color, index) =>
    console.log(`Index: ${index}, Color: ${color !== null ? color : "❌, (null)"}`)
  );

  // Remplissage des cases vides avec de nouvelles couleurs
  for (let i = 0; i < BOARD_SIZE; i++) {
    if (newBoard[i] === null) {
      newBoard[i] = colorGenerator();
    }
  }

  console.log(">>","Tray after filling empty squares:");
  newBoard.forEach((color, index) =>
    console.log(`Index: ${index}, Color: ${color}`)
  );

  return { newBoard, matches };
};
