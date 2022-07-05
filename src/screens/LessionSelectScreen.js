import React from "react";
import {
  TouchableWithoutFeedback,
  Image,
  StyleSheet,
  ScrollView,
  View,
} from "react-native";
import baseStyle from "../styles/baseStyle";

const bgImage = require("../img/bgImage/bgImage_LessionSelectScreen.png");

export default function LessionSelectScreen(props) {
  return (
    <View style={baseStyle.container}>
      <ScrollView style={styles.scrollView}>
        <View style={styles.main}>
          {/* A00 */}
          <TouchableWithoutFeedback
            onPress={() => {
              props.navigation.navigate("MainMenuScreenLession0", {
                lession: "a00",
              });
            }}
          >
            <View style={[styles.alphaButton, { top: 53, left: 30 }]}></View>
          </TouchableWithoutFeedback>
          {/* A01 */}
          <TouchableWithoutFeedback
            onPress={() => {
              props.navigation.navigate("MainMenuScreen", { lession: "a01" });
            }}
          >
            <View style={[styles.alphaButton, { top: 139, left: 90 }]}></View>
          </TouchableWithoutFeedback>
          {/* A02 */}
          <TouchableWithoutFeedback
            onPress={() => {
              props.navigation.navigate("MainMenuScreen", { lession: "a02" });
            }}
          >
            <View style={[styles.alphaButton, { top: 210, left: 165 }]}></View>
          </TouchableWithoutFeedback>
          {/* A03 */}
          <TouchableWithoutFeedback
            onPress={() => {
              props.navigation.navigate("MainMenuScreen", { lession: "a03" });
            }}
          >
            <View style={[styles.alphaButton, { top: 292, left: 140 }]}></View>
          </TouchableWithoutFeedback>
          {/* A04 */}
          <TouchableWithoutFeedback
            onPress={() => {
              props.navigation.navigate("MainMenuScreen", { lession: "a04" });
            }}
          >
            <View style={[styles.alphaButton, { top: 382, left: 163 }]}></View>
          </TouchableWithoutFeedback>
          {/* A05 */}
          <TouchableWithoutFeedback
            onPress={() => {
              props.navigation.navigate("MainMenuScreen", { lession: "a05" });
            }}
          >
            <View style={[styles.alphaButton, { top: 482, left: 149 }]}></View>
          </TouchableWithoutFeedback>
          {/* A06 */}
          <TouchableWithoutFeedback
            onPress={() => {
              props.navigation.navigate("MainMenuScreen", { lession: "a06" });
            }}
          >
            <View style={[styles.alphaButton, { top: 580, left: 130 }]}></View>
          </TouchableWithoutFeedback>
          {/* A07 */}
          <TouchableWithoutFeedback
            onPress={() => {
              props.navigation.navigate("MainMenuScreen", { lession: "a07" });
            }}
          >
            <View style={[styles.alphaButton, { top: 670, left: 93 }]}></View>
          </TouchableWithoutFeedback>
          {/* A08 */}
          <TouchableWithoutFeedback
            onPress={() => {
              props.navigation.navigate("MainMenuScreen", { lession: "a08" });
            }}
          >
            <View style={[styles.alphaButton, { top: 770, left: 68 }]}></View>
          </TouchableWithoutFeedback>
          {/* A09 */}
          <TouchableWithoutFeedback
            onPress={() => {
              props.navigation.navigate("MainMenuScreen", { lession: "a09" });
            }}
          >
            <View style={[styles.alphaButton, { top: 870, left: 130 }]}></View>
          </TouchableWithoutFeedback>
          {/* A10 */}
          <TouchableWithoutFeedback
            onPress={() => {
              props.navigation.navigate("MainMenuScreen", { lession: "a10" });
            }}
          >
            <View style={[styles.alphaButton, { top: 950, left: 100 }]}></View>
          </TouchableWithoutFeedback>
          {/* A11 */}
          <TouchableWithoutFeedback
            onPress={() => {
              props.navigation.navigate("MainMenuScreen", { lession: "a11" });
            }}
          >
            <View style={[styles.alphaButton, { top: 1040, left: 55 }]}></View>
          </TouchableWithoutFeedback>
          {/* A12 */}
          <TouchableWithoutFeedback
            onPress={() => {
              props.navigation.navigate("MainMenuScreen", { lession: "a12" });
            }}
          >
            <View style={[styles.alphaButton, { top: 1140, left: 38 }]}></View>
          </TouchableWithoutFeedback>
          {/* A13 */}
          <TouchableWithoutFeedback
            onPress={() => {
              props.navigation.navigate("MainMenuScreen", { lession: "a13" });
            }}
          >
            <View style={[styles.alphaButton, { top: 1240, left: 40 }]}></View>
          </TouchableWithoutFeedback>
          {/* A14 */}
          <TouchableWithoutFeedback
            onPress={() => {
              props.navigation.navigate("MainMenuScreen", { lession: "a14" });
            }}
          >
            <View style={[styles.alphaButton, { top: 1355, left: 45 }]}></View>
          </TouchableWithoutFeedback>
          {/* A15 */}
          <TouchableWithoutFeedback
            onPress={() => {
              props.navigation.navigate("MainMenuScreen", { lession: "a15" });
            }}
          >
            <View style={[styles.alphaButton, { top: 1470, left: 68 }]}></View>
          </TouchableWithoutFeedback>
          <Image source={bgImage} resizeMode="cover" style={[styles.bgImage]} />
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    position: "relative",
  },
  bgImage: {
    zIndex: 1,
  },
  alphaButton: {
    position: "absolute",
    zIndex: 2,
    backgroundColor: "rgba(255,255,255,0.0)",
    width: 180,
    height: 60,
  },
});
