import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, Text, Button } from "react-native";

const SettingScreen = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Text>SettingScreen</Text>
      <Button
        title="Go to Review"
        onPress={() => navigation.navigate("Review")}
      />
    </View>
  );
};

export default SettingScreen;
