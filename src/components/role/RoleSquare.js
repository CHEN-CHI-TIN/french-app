import React from "react";
import { Image } from "react-native";

export default function RoleSquare(props) {
  return (
    <Image
      source={props.type}
      style={{
        width: 100,
        height: 100,
        marginBottom: 12,
      }}
    />
  );
}
