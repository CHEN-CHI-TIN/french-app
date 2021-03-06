import React, { useState, useEffect } from "react";
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from "react-native";

import ButtonAudioAPI from "../components/button/ButtonAudioAPI";
import ButtonNormal from "../components/button/ButtonNormal";
import ButtonSquare from "../components/button/ButtonSquare";
import buttonType from "../components/button/buttonType";
import GameImage from "../components/gameImage/GameImage";
import gameLession from "../components/gameImage/gameLession";

export default function Class05ScreenA(props) {
  const bgImg = require("../img/bgImage/bgImage_Class05Screen.png");
  const paperImgSticky = require("../img/paperImage/paperImage_sticky.png");
  const paperImgHole = require("../img/paperImage/paperImage_hole.png");
  const classData = props.route.params.classData;
  const lession = props.route.params.lession;
  const Game = classData.GameB;
  const GameRule = classData.GameBrule;
  const GameOptions = classData.GameBoptions[0].Options;

  const [options, setOptions] = useState([]);
  const [gameData, setGameData] = useState({});
  const [gameIndex, setGameIndex] = useState(0);
  const [correctIndex, setCorrectIndex] = useState(0);
  const [showRule, setShowRule] = useState(true);
  const [correctOrNot, setCorrectOrNot] = useState(false);
  const [leaveOrNot, setLeaveOrNot] = useState(false);

  useEffect(() => {
    if (gameIndex < Game.length) {
      let thisOptions = GameOptions;
      setGameData(Game[gameIndex]);
      setOptions(thisOptions);
      thisOptions.forEach((value, index) => {
        if (value === Game[gameIndex].Answersoptions) {
          setCorrectIndex(index);
        }
      });
      setCorrectOrNot(false);
    }
  }, [gameIndex]);

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={bgImg} resizeMode={"cover"} style={styles.bgImg}>
        {showRule && (
          <TouchableWithoutFeedback
            onPress={() => {
              setShowRule(false);
            }}
          >
            <View
              style={{
                position: "absolute",
                zIndex: 1,
                width: "100%",
                height: "100%",
                backgroundColor: "rgba(0,0,0,0.7)",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <ImageBackground
                source={paperImgHole}
                resizeMode={"cover"}
                style={{
                  width: 380,
                  height: 380,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 70,
                }}
              >
                <Text style={styles.textRule}>{GameRule[0].rule}</Text>
              </ImageBackground>
            </View>
          </TouchableWithoutFeedback>
        )}
        {leaveOrNot && (
          <View
            style={{
              position: "absolute",
              zIndex: 1,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.7)",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <ImageBackground
              source={paperImgHole}
              resizeMode={"cover"}
              style={{
                width: 380,
                height: 380,
                justifyContent: "center",
                padding: 70,
              }}
            >
              <View
                style={{
                  alignItems: "center",
                  marginBottom: 20,
                }}
              >
                <Text style={styles.textRule}>???????????????????????????</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    setLeaveOrNot(false);
                  }}
                >
                  <View style={styles.buttonLeave}>
                    <Text style={styles.textLeave}>???</Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    props.navigation.goBack();
                  }}
                >
                  <View style={styles.buttonLeave}>
                    <Text style={styles.textLeave}>???</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </ImageBackground>
          </View>
        )}
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
                setLeaveOrNot(true);
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
            source={paperImgSticky}
            resizeMode={"cover"}
            style={{ width: 360, height: 360 }}
          >
            <View style={{ flex: 1, margin: 60 }}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <View>
                  <Text style={styles.text}>{gameData.Question}</Text>
                </View>
                <View style={{}}>
                  <ButtonAudioAPI text={gameData.Question} />
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <GameImage lession={gameLession[`${lession}_${gameIndex}`]} />
              </View>
            </View>
          </ImageBackground>
          <View
            style={{
              flexDirection: "row",
              marginHorizontal: 20,
              marginBottom: 20,
            }}
          >
            <ScrollView horizontal={true}>
              {correctOrNot
                ? options.map((value, index) => {
                    let color = "";
                    if (index === correctIndex) {
                      color = "red";
                    } else {
                      color = "black";
                    }
                    return (
                      <ButtonNormal
                        type={buttonType.white}
                        width={150}
                        height={60}
                        title={value}
                        fontSize={12}
                        color={color}
                      />
                    );
                  })
                : options.map((value, index) => {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          if (value === gameData.Answersoptions) {
                            setCorrectOrNot(true);
                            console.log("?????????");
                          } else {
                            console.log("?????????");
                          }
                        }}
                      >
                        <ButtonNormal
                          type={buttonType.white}
                          width={150}
                          height={60}
                          title={value}
                          fontSize={12}
                          color={"black"}
                        />
                      </TouchableOpacity>
                    );
                  })}
            </ScrollView>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={styles.text}>{gameData.Topic}</Text>
            {correctOrNot && <ButtonAudioAPI text={gameData.Answersoptions} />}
          </View>
          {correctOrNot && (
            <View
              style={{
                flex: 1,
                alignItems: "center",
                justifyContent: "flex-end",
                marginBottom: 60,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  console.log("????????????");
                  let count = gameIndex;
                  setGameIndex(count + 1);
                  console.log(gameData);
                }}
                style={{ width: 60, height: 60 }}
              >
                <ButtonSquare type={buttonType.record} />
              </TouchableOpacity>
              <Text style={[styles.textChinese, { marginTop: 3 }]}>
                ?????????????????????????????????
              </Text>
            </View>
          )}
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
  text: {
    fontSize: 20,
  },
  textRule: {
    fontSize: 22,
    fontWeight: "bold",
  },
  textChinese: {
    color: "gray",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonLeave: {
    alignItems: "center",
    justifyContent: "center",
    width: 50,
    height: 50,
    borderColor: "black",
    borderWidth: 1.5,
    borderStyle: "solid",
    borderRadius: 10,
  },
  textLeave: {
    fontSize: 20,
    fontWeight: "bold",
  },
});
