import { View, StyleSheet, Image } from "react-native";
import Dice1 from "../images/dice-1.png";
import Dice2 from "../images/dice-2.png";
import Dice3 from "../images/dice-3.png";
import Dice4 from "../images/dice-4.png";
import Dice5 from "../images/dice-5.png";
import Dice6 from "../images/dice-6.png";
import { useEffect, useState } from "react";

export const Dice = ({ dice }) => {
  const [diceRender, setDiceRender] = useState("");

  useEffect(() => {
    if (dice) {
      let value = 0;
      if (dice === 1) {
        value = Dice1;
      } else if (dice === 2) {
        value = Dice2;
      } else if (dice === 3) {
        value = Dice3;
      } else if (dice === 4) {
        value = Dice4;
      } else if (dice === 5) {
        value = Dice5;
      } else if (dice === 6) {
        value = Dice6;
      }
      setDiceRender(Image.resolveAssetSource(value).uri);
    } else {
      setDiceRender("");
    }
  }, [dice]);

  return (
    <View style={stle.diceMain}>
      {diceRender && (
        <>
          <Image
            style={stle.image}
            source={{
              uri: diceRender,
            }}
          />
        </>
      )}
    </View>
  );
};

const stle = StyleSheet.create({
  diceMain: {
    position: "absolute",
    top: 400,
    height: 60,
    width: 60,
  },

  image: {
    width: 60,
    height: 60,
    borderRadius: 10,
  },
});
