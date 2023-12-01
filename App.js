import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button } from "@rneui/themed";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useNavigation } from "@react-navigation/native";

import AuthScreen from "./src/screens/AuthScreen.js";
import WelcomeScreen from "./src/screens/WelcomeScreen.js";
import MapScreen from "./src/screens/MapScreen.js";
import DeckScreen from "./src/screens/DeckScreen.js";
import SettingScreen from "./src/screens/SettingScreen.js";
import ReviewScreen from "./src/screens/ReviewScreen.js";

import { SCREENS } from "./src/consts.js";

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const StackNavigation = () => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={SCREENS.ReviewScreen}
        component={ReviewScreen}
        options={{
          headerRight: () => {
            return (
              <Button
                title={SCREENS.settingsScreen}
                onPress={() => navigation.navigate(SCREENS.settingsScreen)}
                type="clear"
                titleStyle={{ color: "rgba(0,122,255,1)" }}
              />
            );
          },
        }}
      />
      <Stack.Screen name={SCREENS.settingsScreen} component={SettingScreen} />
    </Stack.Navigator>
  );
};
const NestedTab = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name={SCREENS.mapScreen} component={MapScreen} />
      <Tab.Screen name={SCREENS.deckScreen} component={DeckScreen} />
      <Tab.Screen
        name={SCREENS.reviewScreen}
        component={StackNavigation}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name={SCREENS.welcomeScreen} component={WelcomeScreen} />
        <Tab.Screen name={SCREENS.authScreen} component={AuthScreen} />
        <Tab.Screen
          name="nestedTabs"
          component={NestedTab}
          options={{ headerShown: false }}
        />
      </Tab.Navigator>
    </NavigationContainer>
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
