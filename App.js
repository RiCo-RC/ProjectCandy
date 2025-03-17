import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { StatusBar } from "react-native";
import { ThemeProvider } from "@context/ThemeProvider";

import StackNavigator from "@navigation/StackNavigator";

import { SQLiteProvider } from "expo-sqlite";
import { migrateDbIfNeeded } from "@utils";

const App = () => {
  return (
    <SafeAreaProvider>
      <StatusBar hidden={true} />
      <SQLiteProvider databaseName="spacesmatch.db" onInit={migrateDbIfNeeded}>
        <ThemeProvider>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </ThemeProvider>
      </SQLiteProvider>
    </SafeAreaProvider>
  );
};

export default App;
