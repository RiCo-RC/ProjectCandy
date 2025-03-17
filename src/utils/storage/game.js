import AsyncStorage from "@react-native-async-storage/async-storage";

export const loadGameData = async (key, defaultValue) => {
  try {
    const storedData = await AsyncStorage.getItem(key);
    if (storedData) {
      console.log("📦", `Retrieving ${key} data!`);
      return JSON.parse(storedData);
    }
    console.log("📦", `No recorded data for ${key}!`);
    return defaultValue;
  } catch (error) {
    console.log("❌",`Error while loading ${key}`, error);
    return defaultValue;
  }
};

export const saveGameData = async (board, score, level, lifeLeft, progress) => {
  try {
    await AsyncStorage.multiSet([
      ["board", JSON.stringify(board)],
      ["score", JSON.stringify(score)],
      ["level", JSON.stringify(level)],
      ["lifeLeft", JSON.stringify(lifeLeft)],
      ["progress", JSON.stringify(progress)],
    ]);
    console.log("✅","Game data saved successfully!");
  } catch (error) {
    console.log("❌","Error while saving the game data", error);
  }
};