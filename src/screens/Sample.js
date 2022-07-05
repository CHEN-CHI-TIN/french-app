import React from "react";
import { Text, View, Button } from "react-native";
import baseStyle from "../styles/baseStyle";

export default function Sample(props) {
  return (
    <View style={baseStyle.container}>
      <Text>Sample</Text>
      <Button
        title="Sample Navigate"
        onPress={() => {
          props.navigation.navigate(" ");
        }}
      />
      <Button
        title="Sample Go Back"
        onPress={() => {
          props.navigation.goBack();
        }}
      />
    </View>
  );
}
