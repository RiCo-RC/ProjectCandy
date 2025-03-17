import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  SplashScreen,
  HomeScreen,
  GameScreen,
  LeaderboardScreen,
  // DetailsScreen,
} from "../screens";

const Stack = createNativeStackNavigator();

const screenOptions = { headerShown: false };

const screens = [
  { name: "SplashScreen", component: SplashScreen },
  { name: "HomeScreen", component: HomeScreen },
  { name: "GameScreen", component: GameScreen },
  { name: "LeaderboardScreen", component: LeaderboardScreen },
  // { name: "DetailsScreen", component: DetailsScreen },
];

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="SplashScreen"
      id="main"
      screenOptions={screenOptions}
    >
      {screens.map(({ name, component }) => (
        <Stack.Screen key={name} name={name} component={component} />
      ))}
    </Stack.Navigator>
  );
};

export default StackNavigator;
