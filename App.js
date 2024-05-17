import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import { MainCard } from "./components/MainCard";
import { useEffect, useState } from "react";
import { Dice } from "./components/Dice";
import { DiceButton } from "./components/DiceButton";
import { HoldButton } from "./components/HoldButton";

export default function App() {
  const playerOneHeader = "Player 1";
  const playerTowHeader = "Player 2";
  const [playerOneScore, setPlayerOneScore] = useState(0);
  const [playerTwoScore, setPlayerTwoScore] = useState(0);
  const [dice, setDice] = useState(0);
  const randomArray = [1, 2, 3, 4, 5, 6];
  const [turnOnPlayerOne, setTurnOnPlayerOne] = useState(true);
  const [currentPlayerOne, setCurrentPlayerOne] = useState(0);
  const [currentPlayerTwo, setCurrentPlayerTwo] = useState(0);

  const handleDiceButton = () => {
    const randomIndex = Math.floor(Math.random() * randomArray.length) + 1;
    const randomValue = randomArray[randomIndex - 1];
    setDice(randomValue);
    if (turnOnPlayerOne) {
      if (randomValue !== 1) {
        setCurrentPlayerOne(currentPlayerOne + randomValue);
      } else {
        setDice(0)
        setCurrentPlayerOne(0);
        setTurnOnPlayerOne(false);
      }
    } else {
      if (randomValue !== 1) {
        setCurrentPlayerTwo(currentPlayerTwo + randomValue);
      } else {
        setDice(0)
        setCurrentPlayerTwo(0);
        setTurnOnPlayerOne(true);
      }
    }
  };

  const handleHold = () => {
    if (turnOnPlayerOne) {
      setPlayerOneScore(playerOneScore + currentPlayerOne);
      setCurrentPlayerOne(0);
      setTurnOnPlayerOne(!turnOnPlayerOne);
      setDice(0)
    } else {
      setPlayerTwoScore(playerTwoScore + currentPlayerTwo);
      setCurrentPlayerTwo(0);
      setTurnOnPlayerOne(!turnOnPlayerOne);
      setDice(0)
    }
  };

  return (
    <View style={styles.container}>
      <MainCard
        title={playerOneHeader}
        score={playerOneScore}
        current={currentPlayerOne}
        turnOnPlayerOne={turnOnPlayerOne}
      />
      <MainCard
        title={playerTowHeader}
        score={playerTwoScore}
        current={currentPlayerTwo}
        turnOnPlayerOne={!turnOnPlayerOne}
      />
      <Dice dice={dice} />
      <DiceButton handleDiceButton={handleDiceButton} />
      <HoldButton handleHold={handleHold} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#A7304C",
    alignItems: "center",
    paddingTop: 50,
  },

  image: {
    width: 40,
    height: 40,
  },
});
