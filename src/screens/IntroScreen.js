import React from "react";
import { TouchableWithoutFeedback, ImageBackground, View } from "react-native";
import baseStyle from "../styles/baseStyle";

const bgImage = require("../img/bgImage/bgImage_IntroScreen.png");

export default function IntroScreen(props) {
  return (
    <View style={baseStyle.container}>
      <TouchableWithoutFeedback
        onPress={() => {
          props.navigation.navigate("LessionSelectScreen");
        }}
      >
        <ImageBackground
          source={bgImage}
          resizeMode="cover"
          style={baseStyle.bgImage}
        ></ImageBackground>
      </TouchableWithoutFeedback>
    </View>
  );
}
