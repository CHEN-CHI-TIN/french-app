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

export default function MainMenuScreenLession0(props) {
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
              props.navigation.navigate("L0Class01Screen", {
                lession: lession,
                className: "Pronounce",
                classData: {
                  Pronounce: classData.Pronounce,
                },
              });
            }}
          >
            <ButtonNormal
              type={buttonType.white}
              width={200}
              height={80}
              title={"26個字母列表"}
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
    justifyContent: "flex-start",
    paddingTop: 130,
    // backgroundColor: "red",
  },
});
