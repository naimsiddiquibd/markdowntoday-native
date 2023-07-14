import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Provider as PaperProvider } from 'react-native-paper';
import Home from "./src/screens/HomeScreen";
import Signin from "./src/screens/signin";
import Signup from "./src/screens/signup";
import Create from "./src/screens/create";
import Edit from "./src/screens/edit";
import BottomTabNavigator from "./src/components/BottomTabNavigator";
import SplashScreen from "./src/screens/SplashScreen";
import OnboardingScreen from "./src/screens/OnboardingScreen";

const AppTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "#fff",
  },
}

const Stack = createNativeStackNavigator();

export default function App() {
  const [showSplash, setShowSplash] = useState(true); // State to control splash screen visibility

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSplash(false); // Hide the splash screen after 3 seconds
    }, 2000);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []);

  const user = true; // not authenticated

  return (
    <PaperProvider>
      <NavigationContainer theme={AppTheme}>
        <Stack.Navigator>
          {showSplash ? (
            <Stack.Screen
              name="Splash"
              component={SplashScreen}
              options={{ headerShown: false }}
            />
          ) : user ? (
            <Stack.Screen
              name="Home"
              component={BottomTabNavigator}
              options={{ headerShown: false }}
            />
          ) : (
            <>
            
              <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
              <Stack.Screen name="Signin" component={Signin} />
              <Stack.Screen name="Signup" component={Signup} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
