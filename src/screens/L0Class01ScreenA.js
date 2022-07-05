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
import ButtonAudio from "../components/button/ButtonAudio";
import buttonType from "../components/button/buttonType";
import audioType from "../audio/audioType";

export default function L0Class01ScreenA(props) {
  const bgImg = require("../img/bgImage/bgImage_L0Class01Screen.png");
  const paperImgBook = require("../img/paperImage/paperImage_book.png");
  const phonetic = props.route.params.phonetic;
  const illustrate = props.route.params.illustrate;
  const seq = props.route.params.seq;

  console.log(phonetic, illustrate, seq, "~~~~~~~");

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
                marginTop: 60,
                marginRight: 60,
                marginBottom: 60,
                marginLeft: 100,
                flexDirection: "column",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  alignItems: "center",
                }}
              >
                <Text style={styles.textPhonetic}>{phonetic}</Text>
                <ButtonAudio mp3File={audioType.a00[seq]} />
              </View>
              <ScrollView style={styles.scrollView}>
                <Text style={styles.text}>{illustrate}</Text>
              </ScrollView>
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
    marginTop: 12,
  },
  text: {
    fontSize: 24,
  },
  textPhonetic: {
    fontSize: 40,
    fontWeight: "bold",
  },
});
