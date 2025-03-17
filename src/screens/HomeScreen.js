import React, { useEffect, useState } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import styles from "@styles/main";

import { getUser } from "@utils";

import { HomeHeader, HomeContent, HomeAction, HomeModal } from "@components";

const HomeScreen = () => {
  const navigation = useNavigation();
  const [user, setUser] = useState(null);
  const [isModalFormVisible, setModalFormVisible] = useState(false);
  const [username, setUsername] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    const fetchUser = async () => {
      setLoading(true);
      const userData = await getUser();
      setUser(userData);
    };

    fetchUser();
    setLoading(false);
  }, []);

  const handleGamePress = () => {
    setLoading(true);
    if (user) {
      setLoading(false);
      navigation.navigate("GameScreen", { user });
    }
    setModalFormVisible(true);
    setLoading(false);
  };

  const handleValidate = () => {
    setLoading(true);
    if (username.trim().length === 0) {
      setLoading(false);
      setError("Please enter a username.");
      return;
    }
    setUser({ username });
    setModalFormVisible(false);
    setLoading(false);
    navigation.navigate("GameScreen");
  };

  const handleFormModalClose = () => {
    setUsername("");
    setModalFormVisible(false);
  };

  return (
    <View style={[styles.viewBase, styles.viewFull, styles.homeScreenView]}>
      <HomeHeader />
      <HomeContent navigation={navigation} />
      <HomeAction handleGamePress={handleGamePress} isLoading={isLoading} />
      <HomeModal handleValidate={handleValidate} handleFormModalClose={handleFormModalClose} isModalFormVisible={isModalFormVisible} error={error} isLoading={isLoading} username={username} setUsername={setUsername} />
    </View>
  );
};

export default HomeScreen;
