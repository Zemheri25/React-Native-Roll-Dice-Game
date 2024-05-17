import { Text, View, StyleSheet } from "react-native"

export const Current = ({current}) => {
    return(
        <View style={style.diceMain}>
            <Text style={style.text}>
                Current
            </Text>
            <Text style={style.text}>
                {current}
            </Text>
        </View>
    )
}

const style = StyleSheet.create({
    diceMain: {
      backgroundColor: "#C7375F",
      justifyContent: "center",
      width: 100,
      padding: 10,
      alignItems: "center",
      borderRadius: 20
    },

    text: {
        color: "white",
        fontSize: 20
    }
  });