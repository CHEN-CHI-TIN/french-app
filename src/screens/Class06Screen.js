import React, { useState, useEffect } from "react";
import {
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
} from "react-native";
import { Audio } from "expo-av";

import ButtonNormal from "../components/button/ButtonNormal";
import ButtonSquare from "../components/button/ButtonSquare";
import buttonType from "../components/button/buttonType";
import audioType from "../audio/audioType";

export default function Class06Screen(props) {
  const bgImg = require("../img/bgImage/bgImage_Class04Screen.png");
  const paperImgBook = require("../img/paperImage/paperImage_book.png");
  const CultureCapsule = props.route.params.classData.CultureCapsule;
  const lession = props.route.params.lession;
  const Description = CultureCapsule[0].Description;

  const [sound, setSound] = React.useState();
  async function playSound(mp3File) {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(mp3File);
    setSound(sound);
    console.log("Playing Sound");
    await sound.playAsync();
  }

  useEffect(() => {
    playSound(audioType.class06[lession]);
  }, []);

  console.log(Description, lession, "!!!!!!!!!!!");

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
                sound.unloadAsync();
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
            source={paperImgBook}
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
                <Text style={styles.text}>{Description}</Text>
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
    marginTop: 41,
    marginBottom: 43,
    marginLeft: 99,
    marginRight: 55,
  },
  text: {
    fontSize: 24,
  },
});
