import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

import Header from './components/Header';
import StartGameScreen from './screens/StartGameScreen';
import GameScreen from './screens/GameScreen';


export default function App() {

  const [ startScreen, setStartScreen ] = useState(true);
  const [ gameScreen, setGameScreen ] = useState(false);
  const [ userNumber, setUserNumber ] = useState();

  const startGameHandler = selectedNumber => {
    setStartScreen(false);
    setGameScreen(true);
    setUserNumber(selectedNumber);
  }
  
  return (
    <View style={styles.screen}>
      <Header title="Guess your number" /> 
      {startScreen && <StartGameScreen onStartGame={startGameHandler} />}
      {gameScreen && <GameScreen userChoice={userNumber} />}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});
