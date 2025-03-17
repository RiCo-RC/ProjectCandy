import { useEffect } from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "@styles/main";
// import { getUserData, databaseInit } from "@utils";
import { getUserData } from "@utils";
import { CustomIcon, ProgressBar } from "@components";

const SplashScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const fetchedUserData = async () => {
      try {
        await getUserData(navigation);
      } catch(error) {
        console.log("❌", "Error during fetched user date:", error);
      };
    };
    fetchedUserData();
  }, [navigation]);

  // useEffect(() => {
  //   databaseInit();
  // });

  return (
    <View style={[styles.viewBase, styles.viewFull, styles.splashScreenView]}>
      <CustomIcon
        buttonType="custom"
        icon="loading"
        style={[styles.splashScreenIconLoading]}
      />
      <Text style={styles.splashScreenTextLoading}>Loading...</Text>
      <ProgressBar />
    </View>
  );
};

export default SplashScreen;