import React, { useState } from "react";
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";

import ButtonSquare from "../components/button/ButtonSquare";
import ButtonAudioAPI from "../components/button/ButtonAudioAPI";
import buttonType from "../components/button/buttonType";
import RedText from "../components/text/RedText";
import ButtonNormalRedText from "../components/button/ButtonNormalRedText";

export default function Class01ScreenA(props) {
  const bgImg = require("../img/bgImage/bgImage_Class01Screen.png");
  const paperImgBook = require("../img/paperImage/paperImage_book.png");
  const classData = props.route.params.classData;

  console.log(classData);

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
          <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
            <ButtonNormalRedText
              type={buttonType.white}
              width={250}
              height={90}
              title={classData.French}
              fontSize={25}
            />
            <ButtonAudioAPI text={classData.French} />
          </View>
          <ImageBackground
            source={paperImgBook}
            resizeMode={"cover"}
            style={{ width: 390, height: 390 }}
          >
            <ScrollView style={styles.scrollView}>
              <View
                style={{
                  flex: 1,
                  // alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <RedText text={"詞性：" + classData.PartOfSpeech} size={24} />
                <RedText text={"中文翻譯：" + classData.Chinese} size={24} />
                {classData.Description && (
                  <View style={{ marginTop: 20 }}>
                    <RedText
                      text={"單字說明：" + classData.Description}
                      size={20}
                    />
                  </View>
                )}
              </View>
            </ScrollView>
          </ImageBackground>
          <View
            style={{
              flex: 1,
              alignItems: "center",
              justifyContent: "flex-end",
              marginBottom: 120,
            }}
          >
            <TouchableOpacity
              onPress={() => {
                console.log("發音功能");
              }}
              style={{ width: 60, height: 60 }}
            >
              <ButtonSquare type={buttonType.record} />
            </TouchableOpacity>
            <Text
              style={{
                color: "white",
                fontSize: 18,
                fontWeight: "bold",
                marginTop: 3,
              }}
            >
              長按麥克風開始練習發音
            </Text>
          </View>
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
    marginTop: 60,
    marginBottom: 43,
    marginLeft: 99,
    marginRight: 55,
  },
  text: {
    fontSize: 24,
  },
});
