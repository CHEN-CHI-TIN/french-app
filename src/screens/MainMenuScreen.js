import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";

import ButtonNormal from "../components/button/ButtonNormal";
import ButtonSquare from "../components/button/ButtonSquare";
import buttonType from "../components/button/buttonType";

export default function MainMenuScreen(props) {
  const lession = props.route.params.lession;
  const bgImg = require("../img/bgImage/bgImage_MainMenuScreen.png");

  const [classData, setClassData] = useState({});
  const [title, setTitle] = useState("");

  useEffect(() => {
    fetch(`http://service.appleseed.com.tw/AppleFrenchc/usectl?j:${lession}`)
      .then((response) => response.json())
      .then((json) => {
        let classData = json.record[0];
        let title = classData.CourseTitle[0].Title;
        setTitle(title);
        setClassData(classData);
      })
      .catch((error) => console.error(error));
  }, []);

  // console.log(classData);

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={bgImg} resizeMode={"cover"} style={styles.bgImg}>
        <TouchableOpacity
          onPress={() => {
            props.navigation.goBack();
          }}
          style={{
            marginTop: 32,
            marginLeft: 16,
            width: 60,
            height: 60,
          }}
        >
          <ButtonSquare type={buttonType.back} />
        </TouchableOpacity>
        <View style={styles.buttonContainer}>
          <Text style={[styles.title, { marginBottom: 6 }]}>{title}</Text>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Class01Screen", {
                lession: lession,
                className: "Vocabulary",
                classData: {
                  Vocabulary: classData.Vocabulary,
                  Pronounce: classData.Pronounce,
                },
              });
            }}
          >
            <ButtonNormal
              type={buttonType.white}
              width={200}
              height={80}
              title={"字彙寶盒"}
              fontSize={25}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Class02Screen", {
                lession: lession,
                className: "SentencePattern",
                classData: {
                  SentencePattern: classData.SentencePattern,
                },
              });
            }}
          >
            <ButtonNormal
              type={buttonType.white}
              width={200}
              height={80}
              title={"句型錦囊"}
              fontSize={25}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Class03Screen", {
                lession: lession,
                className: "Dialogue",
                classData: {
                  Dialogue: classData.Dialogue,
                },
              });
            }}
          >
            <ButtonNormal
              type={buttonType.white}
              width={200}
              height={80}
              title={"趣味對話"}
              fontSize={25}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Class04Screen", {
                lession: lession,
                className: "Grammar",
                classData: {
                  Grammar: classData.Grammar,
                },
              });
            }}
          >
            <ButtonNormal
              type={buttonType.yellow}
              width={200}
              height={80}
              title={"文法秘笈"}
              fontSize={25}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (searchGameType(classData) === "A") {
                props.navigation.navigate("Class05Screen", {
                  lession: lession,
                  className: "GameA",
                  classData: {
                    GameA: classData.GameA,
                    GameArule: classData.GameArule,
                    GameAoptions: classData.GameAoptions,
                  },
                });
              } else if (searchGameType(classData) === "B") {
                props.navigation.navigate("Class05ScreenA", {
                  lession: lession,
                  className: "GameB",
                  classData: {
                    GameB: classData.GameB,
                    GameBrule: classData.GameBrule,
                    GameBoptions: classData.GameBoptions,
                  },
                });
              }
            }}
          >
            <ButtonNormal
              type={buttonType.yellow}
              width={200}
              height={80}
              title={"闖關遊戲"}
              fontSize={25}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              props.navigation.navigate("Class06Screen", {
                lession: lession,
                className: "CultureCapsule",
                classData: {
                  CultureCapsule: classData.CultureCapsule,
                },
              });
            }}
          >
            <ButtonNormal
              type={buttonType.yellow}
              width={200}
              height={80}
              title={"文化膠囊"}
              fontSize={25}
            />
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  bgImg: {
    flex: 1,
  },
  mainContainer: {
    flex: 1,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "red",
  },
});

function searchGameType(classData) {
  let type = "";
  let objectKeys = Object.keys(classData);
  objectKeys.forEach((e) => {
    if (e === "GameA") {
      type = "A";
    } else if (e === "GameB") {
      type = "B";
    }
  });
  return type;
}
