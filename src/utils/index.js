export {
  width,
  height,
  VERSION,
  LEADERBOARD_MAX,
  BOARD_GRID_SIZE,
  BOARD_CELL_SIZE,
  BOARD_ELEMENTS,
  BOARD_SIZE,
  BOARD_INVALID_INDICES,
  BOARD_TEST,
} from "./variables";
export {
  migrateDbIfNeeded,
  addUser,
  addScore,
  getLeaderboard,
  getUserScores,
  getLatestScore,
} from "./database";


export { getUserData, setUserData} from "./storage/user";
export { loadGameData, saveGameData } from "./storage/game";

