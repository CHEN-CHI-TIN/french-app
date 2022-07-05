import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import IntroScreen from "./src/screens/IntroScreen";
import LessionSelectScreen from "./src/screens/LessionSelectScreen";
import MainMenuScreen from "./src/screens/MainMenuScreen";
import MainMenuScreenLession0 from "./src/screens/MainMenuScreenLession0";
import L0Class01Screen from "./src/screens/L0Class01Screen";
import L0Class01ScreenA from "./src/screens/L0Class01ScreenA";
import Class01Screen from "./src/screens/Class01Screen";
import Class01ScreenA from "./src/screens/Class01ScreenA";
import Class01ScreenB from "./src/screens/Class01ScreenB";
import Class02Screen from "./src/screens/Class02Screen";
import Class02ScreenA from "./src/screens/Class02ScreenA";
import Class02ScreenB from "./src/screens/Class02ScreenB";
import Class03Screen from "./src/screens/Class03Screen";
import Class03ScreenA from "./src/screens/Class03ScreenA";
import Class04Screen from "./src/screens/Class04Screen";
import Class04ScreenA from "./src/screens/Class04ScreenA";
import Class05Screen from "./src/screens/Class05Screen";
import Class05ScreenA from "./src/screens/Class05ScreenA";
import Class06Screen from "./src/screens/Class06Screen";

console.disableYellowBox = true;

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="IntroScreen"
          component={IntroScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="LessionSelectScreen"
          component={LessionSelectScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MainMenuScreen"
          component={MainMenuScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="MainMenuScreenLession0"
          component={MainMenuScreenLession0}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Class01Screen"
          component={Class01Screen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Class01ScreenA"
          component={Class01ScreenA}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Class01ScreenB"
          component={Class01ScreenB}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="L0Class01Screen"
          component={L0Class01Screen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="L0Class01ScreenA"
          component={L0Class01ScreenA}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Class02Screen"
          component={Class02Screen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Class02ScreenA"
          component={Class02ScreenA}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Class02ScreenB"
          component={Class02ScreenB}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Class03Screen"
          component={Class03Screen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Class03ScreenA"
          component={Class03ScreenA}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Class04Screen"
          component={Class04Screen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Class04ScreenA"
          component={Class04ScreenA}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Class05Screen"
          component={Class05Screen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Class05ScreenA"
          component={Class05ScreenA}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="Class06Screen"
          component={Class06Screen}
          options={{
            headerShown: false,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
