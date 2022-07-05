import * as React from "react";
import { TouchableOpacity } from "react-native";
import * as Speech from "expo-speech";

import ButtonSquare from "./ButtonSquare";
import buttonType from "./buttonType";

export default function ButtonAudioAPI(props) {
  return (
    <TouchableOpacity
      onPress={() => {
        Speech.speak(props.text, {
          language: "fr-FR",
          rate: 0.8,
          pitch: 1.0,
          quality: "Enhanced",
        });
        console.log("聆聽功能", props.text);
      }}
      style={{ width: 60, height: 60 }}
    >
      <ButtonSquare type={buttonType.listen} />
    </TouchableOpacity>
  );
}
