import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text } from "react-native";

const ReviewScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>ReviewScreen</Text>
    </View>
  );
};

export default ReviewScreen;
