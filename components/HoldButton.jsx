
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export const HoldButton = ({handleHold}) => {
  return (
    <View style={stle.diceMain}>
      <TouchableOpacity style={stle.button} onPress={handleHold}>
        <Text style={stle.text}>📥 Hold</Text>
      </TouchableOpacity>
    </View>
  );
};

const stle = StyleSheet.create({
  diceMain: {
    position: "absolute",
    top: 400,
    left: 260,
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
