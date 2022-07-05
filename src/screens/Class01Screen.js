import React, { useState } from "react";
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  ScrollView,
  Text,
  View,
} from "react-native";

import ButtonSquare from "../components/button/ButtonSquare";
import buttonType from "../components/button/buttonType";
import RedText from "../components/text/RedText";

export default function Class01Screen(props) {
  const bgImg = require("../img/bgImage/bgImage_Class01Screen.png");
  const lession = props.route.params.lession;
  const className = props.route.params.className;
  const classData = props.route.params.classData;

  console.log(classData.Pronounce, "~~~~~~~~~~~~~~~~~");

  const [change, setChange] = useState("法文");

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
            <TouchableOpacity
              onPress={() => {
                change === "法文" ? setChange("中文") : setChange("法文");
                console.log(change);
              }}
              style={{ width: 60, height: 60, marginRight: 3 }}
            >
              <ButtonSquare type={buttonType.chinese} />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                props.navigation.navigate("Class01ScreenB", {
                  Pronounce: classData.Pronounce,
                });
              }}
              style={{ width: 60, height: 60 }}
            >
              <ButtonSquare type={buttonType.extra} />
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
          <View style={styles.buttonContainer}>
            <ScrollView>
              {classData &&
                classData.Vocabulary.map((e) => {
                  if (change === "法文") {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          props.navigation.navigate("Class01ScreenA", {
                            classData: e,
                          });
                        }}
                      >
                        <RedText
                          text={e.seq + "." + " " + e.French}
                          size={20}
                          weight={"bold"}
                          marginBottom={8}
                          color={"white"}
                        />
                      </TouchableOpacity>
                    );
                  } else {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          props.navigation.navigate("Class01ScreenA", {
                            classData: e,
                          });
                        }}
                      >
                        <RedText
                          text={e.seq + "." + " " + e.French + "  " + e.Chinese}
                          size={20}
                          weight={"bold"}
                          marginBottom={8}
                          color={"white"}
                        />
                      </TouchableOpacity>
                    );
                  }
                })}
            </ScrollView>
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
  buttonContainer: {
    width: "80%",
    marginVertical: 16,
    marginBottom: 90,
  },
  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 9,
  },
});
