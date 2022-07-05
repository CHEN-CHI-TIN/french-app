import * as React from "react";
import { TouchableOpacity } from "react-native";
import { Audio } from "expo-av";

import ButtonSquare from "./ButtonSquare";
import buttonType from "./buttonType";

export default function ButtonAudio(props) {
  const [sound, setSound] = React.useState();

  async function playSound(mp3File) {
    console.log("Loading Sound");
    const { sound } = await Audio.Sound.createAsync(mp3File);
    setSound(sound);

    console.log("Playing Sound");
    await sound.playAsync();
  }

  React.useEffect(() => {
    return sound
      ? () => {
          console.log("Unloading Sound");
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

  return (
    <TouchableOpacity
      onPress={() => {
        console.log("聆聽功能");
        playSound(props.mp3File);
      }}
      style={{ width: 60, height: 60 }}
    >
      <ButtonSquare type={buttonType.listen} />
    </TouchableOpacity>
  );
}
