import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function ButtonNormalRedText(props) {
  let changeColor = false;
  const text = props.title.split("");
  console.log(text);

  return (
    <View
      style={{
        width: props.width,
        height: props.height,
        padding: 6,
        // backgroundColor: "black",
      }}
    >
      <ImageBackground
        source={props.type}
        resizeMode="cover"
        style={styles.image}
      >
        <View style={styles.textContainer}>
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
                      fontSize: props.fontSize,
                      color: "red",
                      fontWeight: "bold",
                      marginBottom: props.marginBottom,
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
                      fontSize: props.fontSize,
                      fontWeight: "bold",
                      marginBottom: props.marginBottom,
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
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    width: "auto",
    height: "auto",
    maxWidth: "100%",
    maxHeight: "100%",
  },
  textContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
