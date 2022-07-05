import React from "react";
import { Image } from "react-native";

export default function GameImage(props) {
  return (
    <Image
      source={props.lession}
      style={{
        width: 200,
        height: 200,
      }}
    />
  );
}
