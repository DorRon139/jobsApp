import { Button } from "@rneui/base";
import React from "react";
import { StyleSheet, ScrollView, View, Text, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const SCREEN_HEIGHT = Dimensions.get("window").height;

const Slides = ({ data, onComplete }) => {
  const renderSlides = () => {
    return data.map((slide, index) => (
      <View
        key={slide.text}
        style={[styles.slideStyle, { backgroundColor: slide.color }]}
      >
        <Text style={styles.textStyle}>{slide.text}</Text>

        {index === data.length - 1 && (
          <Button
            title="Onwards!"
            buttonStyle={styles.buttonStyle}
            onPress={onComplete}
          />
        )}
      </View>
    ));
  };
  return (
    <ScrollView
      horizontal
      pagingEnabled
      style={{ height: SCREEN_HEIGHT - 170 }}
    >
      {renderSlides()}
    </ScrollView>
  );
};

const styles = {
  slideStyle: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: SCREEN_WIDTH,
  },
  textStyle: {
    fontSize: 30,
  },
  buttonStyle: {
    marginTop: 15,
    backgroundColor: "#0288D1",
  },
};
export default Slides;
