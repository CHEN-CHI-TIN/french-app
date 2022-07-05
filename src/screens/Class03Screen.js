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

import ButtonNormal from "../components/button/ButtonNormal";
import ButtonSquare from "../components/button/ButtonSquare";
import buttonType from "../components/button/buttonType";

export default function Class03Screen(props) {
  const bgImg = require("../img/bgImage/bgImage_Class03Screen.png");
  const lession = props.route.params.lession;
  const className = props.route.params.className;
  const classData = props.route.params.classData;
  const Dialogue = classData.Dialogue;
  let seqA = "";

  return (
    <View style={styles.mainContainer}>
      <ImageBackground source={bgImg} resizeMode={"cover"} style={styles.bgImg}>
        {/* <Text>Class03Screen</Text>
        <Button
          title="Sample Go Back"
          onPress={() => {
            props.navigation.goBack();
          }}
        /> */}
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
              {Dialogue &&
                Dialogue.map((e) => {
                  let skip = false;
                  if (seqA !== e.seqA) {
                    seqA = e.seqA;
                  } else {
                    skip = true;
                  }
                  if (!skip) {
                    return (
                      <TouchableOpacity
                        onPress={() => {
                          props.navigation.navigate("Class03ScreenA", {
                            lession: lession,
                            seqA: e.seqA,
                            Dialogue: Dialogue,
                          });
                        }}
                      >
                        <ButtonNormal
                          type={buttonType.white}
                          width={250}
                          height={100}
                          title={`Dialog ${e.seqA})`}
                          fontSize={18}
                        />
                      </TouchableOpacity>
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
    marginHorizontal: 60,
    marginVertical: 24,
  },
});
