import React from "react";
import { Image } from "react-native";

export default function ButtonSquare(props) {
  return (
    <Image
      source={props.type}
      style={{
        width: 60,
        height: 60,
      }}
    />
  );
}
