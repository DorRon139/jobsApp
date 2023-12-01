import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Slides from "../components/Slides";
import { SCREENS } from "../consts";

const SLIDE_DATA = [
  { text: "Welcome to JobApp", color: "#03A9F4" },
  { text: "Use this to get a job", color: "#009688" },
  { text: "Set your location, then swipe away", color: "#03A9F4" },
];

const WelcomeScreen = () => {
  const navigation = useNavigation();
  const onSlidesComplete = () => {
    navigation.navigate(SCREENS.authScreen);
  };
  return (
    <View>
      <Slides data={SLIDE_DATA} onComplete={onSlidesComplete} />
    </View>
  );
};

export default WelcomeScreen;
