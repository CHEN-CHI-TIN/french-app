import React from "react";
import {
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
} from "react-native";

import ButtonSquare from "../components/button/ButtonSquare";
import ButtonAudio from "../components/button/ButtonAudio";
import audioType from "../audio/audioType";
import buttonType from "../components/button/buttonType";
import RoleSquare from "../components/role/RoleSquare";
import roleType from "../components/role/roleType";

const getHeadshot = (object) => {
  const Antoine = roleType.Antoine;
  const Helene = roleType.Helene;
  const Katty = roleType.Katty;
  const Luc = roleType.Luc;
  const Nathalie = roleType.Nathalie;
  const Paolo = roleType.Paolo;
  const PtPrince = roleType.PtPrince;
  const Rose = roleType.Rose;

  switch (object.Role) {
    case "Antoine": {
      return Antoine;
    }
    case "Hélène": {
      return Helene;
    }
    case "Katty": {
      return Katty;
    }
    case "Luc": {
      return Luc;
    }
    case "Nathalie": {
      return Nathalie;
    }
    case "Paolo": {
      return Paolo;
    }
    case "Pt Prince": {
      return PtPrince;
    }
    case "Rose": {
      return Rose;
    }
  }
};

export default function Class03Screen(props) {
  const bgImg = require("../img/bgImage/bgImage_Class03Screen.png");
  const dialogImg01 = require("../img/dialogImage/dialogImage_square_01.png");
  const dialogImg02 = require("../img/dialogImage/dialogImage_square_02.png");
  const lession = props.route.params.lession;
  const seqA = props.route.params.seqA;
  const Dialogue = props.route.params.Dialogue;

  let thisDialogue = [];

  Dialogue.map((e) => {
    if (e.seqA === seqA) {
      thisDialogue.push(e);
    }
  });

  console.log(thisDialogue);

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
            justifyContent: "center",
          }}
        >
          <ScrollView style={styles.scrollView}>
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {thisDialogue &&
                thisDialogue.map((value, index, array) => {
                  if (index % 2 === 0) {
                    return (
                      <View
                        style={{
                          alignItems: "flex-start",
                          justifyContent: "center",
                        }}
                      >
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
                              <ButtonAudio
                                mp3File={
                                  audioType.class03[
                                    lession +
                                      "-" +
                                      value.seqA +
                                      "-" +
                                      value.seqB
                                  ]
                                }
                              />
                            </View>
                          </View>
                        </ImageBackground>
                        <RoleSquare type={getHeadshot(value)} />
                      </View>
                    );
                  } else {
                    return (
                      <View
                        style={{
                          alignItems: "flex-end",
                          justifyContent: "center",
                        }}
                      >
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
                              <ButtonAudio
                                mp3File={
                                  audioType.class03[
                                    lession +
                                      "-" +
                                      value.seqA +
                                      "-" +
                                      value.seqB
                                  ]
                                }
                              />
                              {/* <TouchableOpacity
                                onPress={() => {
                                  console.log("聆聽功能");
                                  console.log(
                                    lession +
                                      "-" +
                                      value.seqA +
                                      "-" +
                                      value.seqB
                                  );
                                }}
                                style={{ width: 60, height: 60 }}
                              >
                                <ButtonSquare type={buttonType.listen} />
                              </TouchableOpacity> */}
                            </View>
                          </View>
                        </ImageBackground>
                        <RoleSquare type={getHeadshot(value)} />
                      </View>
                    );
                  }
                })}
            </View>
          </ScrollView>
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
    // marginHorizontal: 60,
    marginVertical: 24,
  },
  textFrench: {
    fontSize: 18,
    fontWeight: "bold",
  },
  textChinese: {
    color: "gray",
    fontSize: 16,
    fontWeight: "bold",
  },
});
