import React, { useState } from "react";
import {
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

import ButtonSquare from "../components/button/ButtonSquare";
import ButtonAudioAPI from "../components/button/ButtonAudioAPI";
import buttonType from "../components/button/buttonType";

export default function Class02ScreenA(props) {
  const bgImg = require("../img/bgImage/bgImage_Class02Screen.png");
  const paperImgHole = require("../img/paperImage/paperImage_hole.png");
  const dialogImg01 = require("../img/dialogImage/dialogImage_square_01.png");
  const dialogImg02 = require("../img/dialogImage/dialogImage_square_02.png");
  const seqA = props.route.params.seqA;
  const SentencePattern = props.route.params.SentencePattern;

  const [change, setChange] = useState("法文");
  const [extra, setExtra] = useState("不顯示補充");

  let thisSentencePattern = [];
  let showExtraButton = false;
  let extraData = "";

  SentencePattern.map((e) => {
    if (e.seqA === seqA) {
      thisSentencePattern.push(e);
      console.log(thisSentencePattern);
    }
  });

  thisSentencePattern.map((e) => {
    if ("Instructions" in e) {
      showExtraButton = true;
      extraData = e.Instructions;
    }
  });

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
          <View
            style={{
              justifyContent: "flex-end",
              flexDirection: "row",
              flex: 1,
            }}
          >
            {showExtraButton ? (
              <TouchableOpacity
                onPress={() => {
                  props.navigation.navigate("Class02ScreenB", {
                    extraData: extraData,
                  });
                }}
                style={{ width: 60, height: 60, marginRight: 3 }}
              >
                <ButtonSquare type={buttonType.extra} />
              </TouchableOpacity>
            ) : (
              <View></View>
            )}
            <TouchableOpacity
              onPress={() => {
                change === "法文" ? setChange("中文") : setChange("法文");
                console.log(change);
              }}
              style={{ width: 60, height: 60, marginRight: 3 }}
            >
              <ButtonSquare type={buttonType.chinese} />
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            flex: 4,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 24,
          }}
        >
          <ScrollView
            style={{
              flex: 1,
              width: "90%",
              padding: 24,
            }}
          >
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {thisSentencePattern &&
                thisSentencePattern.map((value, index, array) => {
                  if (change === "法文") {
                    if (index % 2 === 0) {
                      return (
                        <ImageBackground
                          source={dialogImg01}
                          resizeMode={"cover"}
                          style={{
                            width: 330,
                            height: 140,
                          }}
                        >
                          <View
                            style={{
                              flex: 1,
                              flexDirection: "row",
                              marginBottom: 46,
                              marginTop: 16,
                              marginHorizontal: 20,
                            }}
                          >
                            <View
                              style={{
                                flex: 2,
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Text style={styles.textFrench}>
                                {value.French}
                              </Text>
                            </View>
                            <View
                              style={{
                                flex: 1,
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <ButtonAudioAPI text={value.French} />
                            </View>
                          </View>
                        </ImageBackground>
                      );
                    } else {
                      return (
                        <ImageBackground
                          source={dialogImg02}
                          resizeMode={"cover"}
                          style={{
                            width: 330,
                            height: 140,
                          }}
                        >
                          <View
                            style={{
                              flex: 1,
                              flexDirection: "row",
                              marginBottom: 46,
                              marginTop: 16,
                              marginHorizontal: 20,
                            }}
                          >
                            <View
                              style={{
                                flex: 2,
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Text style={styles.textFrench}>
                                {value.French}
                              </Text>
                            </View>
                            <View
                              style={{
                                flex: 1,
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <ButtonAudioAPI text={value.French} />
                            </View>
                          </View>
                        </ImageBackground>
                      );
                    }
                  } else {
                    if (index % 2 === 0) {
                      return (
                        <ImageBackground
                          source={dialogImg01}
                          resizeMode={"cover"}
                          style={{
                            width: 330,
                            height: 140,
                          }}
                        >
                          <View
                            style={{
                              flex: 1,
                              flexDirection: "row",
                              marginBottom: 46,
                              marginTop: 16,
                              marginHorizontal: 20,
                            }}
                          >
                            <View
                              style={{
                                flex: 2,
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Text style={styles.textFrench}>
                                {value.French}
                              </Text>
                              <Text style={styles.textChinese}>
                                {value.Chinese}
                              </Text>
                            </View>
                            <View
                              style={{
                                flex: 1,
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <ButtonAudioAPI text={value.French} />
                            </View>
                          </View>
                        </ImageBackground>
                      );
                    } else {
                      return (
                        <ImageBackground
                          source={dialogImg02}
                          resizeMode={"cover"}
                          style={{
                            width: 330,
                            height: 140,
                          }}
                        >
                          <View
                            style={{
                              flex: 1,
                              flexDirection: "row",
                              marginBottom: 46,
                              marginTop: 16,
                              marginHorizontal: 20,
                            }}
                          >
                            <View
                              style={{
                                flex: 2,
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Text style={styles.textFrench}>
                                {value.French}
                              </Text>
                              <Text style={styles.textChinese}>
                                {value.Chinese}
                              </Text>
                            </View>
                            <View
                              style={{
                                flex: 1,
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <ButtonAudioAPI text={value.French} />
                            </View>
                          </View>
                        </ImageBackground>
                      );
                    }
                  }
                })}
            </View>
          </ScrollView>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
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
          <Text style={[styles.textChinese, { marginTop: 3 }]}>
            長按麥克風開始練習發音
          </Text>
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
  textFrench: {
    fontSize: 20,
    fontWeight: "bold",
  },
  textChinese: {
    color: "gray",
    fontSize: 16,
    fontWeight: "bold",
  },
  textExtra: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
