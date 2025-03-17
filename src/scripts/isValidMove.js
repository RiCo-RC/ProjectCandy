import { BOARD_GRID_SIZE } from "@utils";
import { isMatchAtIndex2 } from "./board/matchBoard";

const isValidMove = (tileOne, tileTwo, boardCurrent) => {
  const board = [...boardCurrent];
  const boardSize = BOARD_GRID_SIZE;

  const isSameRow = (tileA, tileB) =>
    Math.floor(tileA / boardSize) === Math.floor(tileB / boardSize);

  const areAdjacent =
    (tileTwo === tileOne + 1 && isSameRow(tileOne, tileTwo)) || // Right
    (tileTwo === tileOne - 1 && isSameRow(tileOne, tileTwo)) || // Left
    tileTwo === tileOne + boardSize || // Bottom
    tileTwo === tileOne - boardSize; // Top

  if (!areAdjacent) {
    console.log("❌", "Tiles are NOT adjacent!");
    return false;
  }

  console.log("✅","Tiles are adjacent:", tileOne, "and", tileTwo);

  [board[tileOne], board[tileTwo]] = [board[tileTwo], board[tileOne]];

  return isMatchAtIndex2(board, tileOne) || isMatchAtIndex2(board, tileTwo);
};

export default isValidMove;
