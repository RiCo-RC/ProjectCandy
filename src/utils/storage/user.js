import AsyncStorage from "@react-native-async-storage/async-storage";

import { getUser, addUser } from './../database';

export const getUserData = async (navigation) => {
  try {
    const userData = await AsyncStorage.getItem("user");
    const user = userData ? JSON.parse(userData) : null; 
    console.log("🔍", "User data:", user);
    setTimeout(() => {
      if (user) {
        navigation.navigate("HomeScreen", { user });
      } else {
        navigation.navigate("HomeScreen");
      }
    }, 3100);
  } catch (error) {
    console.log("❌","Error while retrieving user data:", error);
    navigation.navigate("HomeScreen");
  }
};

export const setUserData = async (username) => {
  try {
    const user = await getUser(username);
    if (!user) {
      console.log("❌","No users with this nickname!");
      await addUser(username, null);
      setUserData(username);
      return;
    };
    const userData = { username };
    await AsyncStorage.setItem("user", JSON.stringify(userData));
    console.log("✅","User data saved in AsyncStorage:", userData);
  } catch {error} {
    console.log("❌","Error when saving user data:", error);
  };
};