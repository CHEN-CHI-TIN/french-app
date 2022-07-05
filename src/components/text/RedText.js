import * as React from "react";
import { Text, View } from "react-native";

export default function RedText(props) {
  let changeColor = false;
  const text = props.text.split("");
  console.log(text);

  return (
    <View style={{ flex: 1, flexDirection: "row", flexWrap: "wrap" }}>
      {text.map((e) => {
        if (e === "@") {
          changeColor = !changeColor;
        }
        if (changeColor) {
          if (e === "@") {
            return <Text></Text>;
          } else {
            return (
              <Text
                style={{
                  fontSize: props.size,
                  color: "red",
                  fontWeight: props.weight,
                  marginBottom: props.marginBottom,
                  marginTop: props.marginTop,
                }}
              >
                {e}
              </Text>
            );
          }
        } else {
          if (e === "@") {
            return <Text></Text>;
          } else {
            return (
              <Text
                style={{
                  fontSize: props.size,
                  fontWeight: props.weight,
                  marginBottom: props.marginBottom,
                  marginTop: props.marginTop,
                  color: props.color,
                }}
              >
                {e}
              </Text>
            );
          }
        }
      })}
    </View>
  );
}
