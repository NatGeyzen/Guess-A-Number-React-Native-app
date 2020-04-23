import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';
import GameOverScreen from './screens/GameOverScreen';


export default function App() {

  const [ startScreen, setStartScreen ] = useState(true);
  const [ gameScreen, setGameScreen ] = useState(false);
  const [ gameOverScreen, setGameOverScreen ] = useState(false);

  const [ userNumber, setUserNumber ] = useState();
  const [ totalRounds, setTotalRounds ] = useState();

  const startGameHandler = selectedNumber => {
    setStartScreen(false);
    setGameScreen(true);
    setUserNumber(selectedNumber);
  }

  const gameOverHandler = numberOfRounds => {
    setGameScreen(false);
    setGameOverScreen(true);
    setTotalRounds(numberOfRounds);
  }

  const NewGameHandler = () => {
    setStartScreen(true);
    setGameOverScreen(false);
    setUserNumber(null)
    setTotalRounds(0);
  }
  
  return (
    <View style={styles.screen}>
      <Header title="Guess your number" /> 
      {startScreen && 
        <StartGameScreen onStartGame={startGameHandler} />}
      {gameScreen && 
        <GameScreen userChoice={userNumber} onWin={gameOverHandler} />}
      {gameOverScreen && 
        <GameOverScreen 
          numberOfRounds={totalRounds}
          userChoice={userNumber}
          onNewGame={NewGameHandler} />}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
