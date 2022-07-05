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

export default function Class02ScreenB(props) {
  const bgImg = require("../img/bgImage/bgImage_Class02Screen.png");
  const paperImgStar = require("../img/paperImage/paperImage_hole.png");
  const extraData = props.route.params.extraData;

  console.log(extraData, "~~~~~~~~~~~~~~~~~");

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
            source={paperImgStar}
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
                <Text style={styles.textContent}>{extraData}</Text>
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
    marginTop: 90,
    marginHorizontal: 70,
    marginBottom: 60,
  },
  textContent: {
    fontSize: 28,
  },
});
