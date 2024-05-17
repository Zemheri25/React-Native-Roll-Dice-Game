import { View, StyleSheet, Text } from "react-native"
import { Current } from "./Current"

export const MainCard = ({title, score, current, turnOnPlayerOne}) => {
    return (
        <View style={[style.mainContainer, turnOnPlayerOne ? style.opacOne : style.opacHafl]}>
            <Text style={style.title}>
                {title}
            </Text>

            <Text style={style.score}>
            {score}
            </Text>

            <Current current={current}/>
        </View>
    )
}

const style = StyleSheet.create({
    mainContainer: {
        width: 350,
        height: 350,
        marginTop: 20,
        borderRadius: 20,
        backgroundColor: "#DAAEBC",
        paddingTop: 100,
        alignItems: "center",
    },
    opacOne : {
        opacity : 1
    },
    opacHafl : {
        opacity : 0.5
    },
    title: {
        fontSize: 20,
        fontWeight: "900",
        color: "white"
    },

    score: {
        fontSize: 50,
        fontWeight: "900",
        marginTop:30,
        color: "#C7375F"
    }
})