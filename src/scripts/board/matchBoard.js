import { BOARD_INVALID_INDICES, BOARD_GRID_SIZE } from "@utils";

export const isMatchAtIndex = (board, i) => {
  return (
    (!BOARD_INVALID_INDICES.includes(i) &&
      board[i] === board[i + 1] &&
      board[i] === board[i + 2]) ||
    (i < BOARD_GRID_SIZE * (BOARD_GRID_SIZE - 2) &&
      board[i] === board[i + BOARD_GRID_SIZE] &&
      board[i] === board[i + BOARD_GRID_SIZE * 2])
  );
};

export const isMatchAtIndex2 = (board, i) => {
  const size = BOARD_GRID_SIZE;
  const checkMatch = (a, b, c) =>
    board[a] === board[b] && board[a] === board[c];

  return (
    (i % size >= 2 && checkMatch(i, i - 1, i - 2)) || // Horizontal left
    (i % size >= 1 && i % size < size - 1 && checkMatch(i, i - 1, i + 1)) || // Horizontal middle
    (i % size < size - 2 && checkMatch(i, i + 1, i + 2)) || // Horizontal right
    (i >= size * 2 && checkMatch(i, i - size, i - size * 2)) || // Vertical top
    (i >= size && i < size * (size - 1) && checkMatch(i, i - size, i + size)) || // Vertical middle
    (i < size * (size - 2) && checkMatch(i, i + size, i + size * 2)) // Vertical bottom
  );
};

export const matchExists = (board) => {
  for (let i = 0; i < board.length; i++) {
    if (isMatchAtIndex(board, i)) {
      return true;
    }
  }
  return false;
};
