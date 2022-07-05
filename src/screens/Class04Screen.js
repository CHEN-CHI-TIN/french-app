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

export default function Class04Screen(props) {
  const bgImg = require("../img/bgImage/bgImage_Class04Screen.png");
  const paperImgStar = require("../img/paperImage/paperImage_star.png");
  const classData = props.route.params.classData;
  const Grammar = classData.Grammar;

  console.log(Grammar);

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
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {!Grammar ? (
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    尚無此課程內容
                  </Text>
                ) : (
                  Grammar.map((e) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          props.navigation.navigate("Class04ScreenA", {
                            seq: e.seq,
                            Description: e.Description,
                          });
                        }}
                      >
                        <ButtonNormal
                          type={buttonType.white}
                          width={250}
                          height={100}
                          title={e.List}
                          fontSize={18}
                        />
                      </TouchableOpacity>
                    );
                  })
                )}
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
    // backgroundColor: "red",
    margin: 60,
  },
});
