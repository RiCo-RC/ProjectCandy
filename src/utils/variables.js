import { Dimensions } from "react-native";

export const { width, height } = Dimensions.get("window");

export const VERSION = "0.0.1";

export const LEADERBOARD_MAX = 3;

//---- BOARD ----\\

export const BOARD_ELEMENTS = [
  "#FFD700",
  "#00FFFF",
  "#8A2BE2",
  "#FF6347",
  "#7FFFD4",
  "#DC143C",
  "#00FF7F",
  "#FF69B4",
];

export const BOARD_SIZE = 64;

export const BOARD_INVALID_INDICES = [
  6, 7, 14, 15, 22, 23, 30, 31, 38, 39, 46, 47, 54, 55, 62, 63,
];

export const BOARD_GRID_SIZE = 8;

export const BOARD_CELL_SIZE = (width * 0.85) / BOARD_GRID_SIZE;

//---- TEST BOARD ----\\

export const BOARD_TEST = [
  "blue",
  "red",
  "red",
  "blue",
  "yellow",
  "red",
  "green",
  "cyan",
  "blue",
  "blue",
  "orange",
  "blue",
  "pink",
  "yellow",
  "blue",
  "red",
  "yellow",
  "orange",
  "yellow",
  "purple",
  "cyan",
  "red",
  "yellow",
  "blue",
  "purple",
  "blue",
  "orange",
  "red",
  "blue",
  "green",
  "yellow",
  "blue",
  "cyan",
  "purple",
  "blue",
  "red",
  "orange",
  "yellow",
  "orange",
  "pink",
  "blue",
  "green",
  "red",
  "cyan",
  "blue",
  "purple",
  "yellow",
  "orange",
  "blue",
  "pink",
  "red",
  "yellow",
  "blue",
  "blue",
  "green",
  "purple",
  "red",
  "cyan",
  "orange",
  "red",
  "yellow",
  "blue",
  "pink",
  "blue",
];
