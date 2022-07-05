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
import RedText from "../components/text/RedText";

export default function Class01ScreenB(props) {
  const bgImg = require("../img/bgImage/bgImage_Class04Screen.png");
  const paperImgBook = require("../img/paperImage/paperImage_book.png");
  const Pronounce = props.route.params.Pronounce;

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
            <ScrollView style={styles.scrollView}>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                }}
              >
                {Pronounce &&
                  Pronounce.map((e) => {
                    return (
                      <View style={{ flex: 1, marginBottom: 20 }}>
                        <RedText text={e.Illustrate} size={16} />
                        <RedText text={e.Word} size={16} />
                      </View>
                    );
                  })}
              </View>
            </ScrollView>
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
    marginTop: 60,
    marginBottom: 43,
    marginLeft: 99,
    marginRight: 55,
  },
  text: {
    fontSize: 16,
  },
});
