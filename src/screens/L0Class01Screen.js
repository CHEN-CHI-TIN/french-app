import React, { useState } from "react";
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";

import ButtonNormal from "../components/button/ButtonNormal";
import ButtonSquare from "../components/button/ButtonSquare";
import buttonType from "../components/button/buttonType";

export default function L0Class01Screen(props) {
  const bgImg = require("../img/bgImage/bgImage_L0Class01Screen.png");
  const paperImgBook = require("../img/paperImage/paperImage_book.png");
  const Pronounce = props.route.params.classData.Pronounce;

  console.log(Pronounce, "!!!!!");

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={bgImg} resizeMode={"cover"} style={styles.bgImg}>
        <View
          style={{
            flexDirection: "row",
            marginTop: 32,
            marginHorizontal: 16,
          }}
        >
          <View style={{ flex: 1 }}>
            <TouchableOpacity
              onPress={() => {
                props.navigation.goBack();
              }}
              style={{ width: 60, height: 60 }}
            >
              <ButtonSquare type={buttonType.back} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "flex-start",
            marginTop: 24,
          }}
        >
          <ImageBackground
            source={paperImgBook}
            resizeMode={"cover"}
            style={{ width: 390, height: 390 }}
          >
            <View
              style={{
                flex: 1,
                // alignItems: "center",
                // justifyContent: "center",
                marginTop: 60,
                marginRight: 60,
                marginBottom: 60,
                marginLeft: 100,
                flexDirection: "row",
                flexWrap: "wrap",
              }}
            >
              {Pronounce &&
                Pronounce.map((e) => {
                  return (
                    <Text
                      style={styles.text}
                      onPress={() => {
                        props.navigation.navigate("L0Class01ScreenA", {
                          phonetic: e.phonetic,
                          illustrate: e.illustrate,
                          seq: e.seq,
                        });
                      }}
                    >
                      {e.letter}
                    </Text>
                  );
                })}
            </View>
          </ImageBackground>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  bgImg: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    // backgroundColor: "red",
    marginTop: 41,
    marginBottom: 43,
    marginLeft: 99,
    marginRight: 55,
  },
  text: {
    fontSize: 40,
    marginRight: 12,
    textDecorationLine: "underline",
  },
});
