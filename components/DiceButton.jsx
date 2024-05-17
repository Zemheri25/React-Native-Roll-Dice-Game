import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export const DiceButton = ({handleDiceButton}) => {
  return (
    <View style={stle.diceMain}>
      <TouchableOpacity style={stle.button} onPress={handleDiceButton}>
        <Text style={stle.text}>🎲 Roll dice</Text>
      </TouchableOpacity>
    </View>
  );
};

const stle = StyleSheet.create({
  diceMain: {
    position: "absolute",
    top: 400,
    left: 35,
    borderRadius: 20
  },

  button: {
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
    borderRadius: 20,
    width: 100,
    height: 60
  },

  text: {
    fontWeight: "700",
    color: "#BC7A95"
  }
});
