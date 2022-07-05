import React from "react";
import { ImageBackground, StyleSheet, Text, View } from "react-native";

export default function ButtonNormal(props) {
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
          <Text
            style={{
              fontSize: props.fontSize,
              fontWeight: "bold",
              color: props.color,
            }}
          >
            {props.title}
          </Text>
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
    alignItems: "center",
    justifyContent: "center",
  },
});
