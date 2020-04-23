import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, TouchableWithoutFeedback, Keyboard } from 'react-native';

import Card from '../components/Card';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer'

import Colors from '../constants/Colors';

const StartGameScreen = props => {

    const [ enteredValue, setEnteredValue ] = useState('');
    const [ confirmed, setConfirmed ] = useState(false);
    const [ selectedNumber, setSelectedNumber ] = useState();

    const numberInputHandler = inputText => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    }

    const confirmInputHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (chosenNumber === NaN || chosenNumber <= 0 || chosenNumber > 99) {
            return;
        }
        setConfirmed(true);
        setEnteredValue('');
        setSelectedNumber(chosenNumber);
        Keyboard.dismiss();
    }

    let confirmedOutput;

    if (confirmed) {
        confirmedOutput = (
            <View style={styles.outputContainer}>
                <Text style={styles.bodyText}>You selected</Text>
                <NumberContainer selectedNumber={selectedNumber} />
                <View style={{width: 125}}>
                    <Button 
                        title="START GAME" 
                        color="#6A68AD"
                        onPress={() => props.onStartGame(selectedNumber)} />
                </View>
            </View>
        )
    }

    const resetInputHandler = () => {
        setEnteredValue('');
        confirmedOutput = null;
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.screen}>
                <View style={styles.introWrapper}>
                    <Text style={styles.introText}>Start a new game!</Text>    
                </View>
                <Card>
                    <Text style={styles.bodyText}>Choose a number</Text>
                    <Input 
                        keyboardType="number-pad"
                        maxLength={2}
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                        style={{textAlign: 'center'}} />
                    <View style={styles.buttonWrapper}>
                        <View style={styles.button}>
                            <Button title="RESET" color={Colors.accent1} onPress={resetInputHandler}/>
                        </View>
                        <View style={styles.button}>   
                            <Button title="CONFIRM" color={Colors.accent2} onPress={confirmInputHandler} />
                        </View>
                    </View>
                </Card>   
                {confirmedOutput} 
            </View>    
        </TouchableWithoutFeedback>
        
        
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center'
    },
    introWrapper: {
        width: '100%',
        marginVertical: 30,
        alignItems: 'center'
      },
      introText: {
        fontSize: 17,
        fontWeight: 'bold'
      },
      buttonWrapper: {
        flexDirection: 'row',
      },
      button: {
        width: 90,
        marginHorizontal: 15,
        marginTop: 30
      },
      outputContainer: {
          marginTop: 25,
          justifyContent: 'center',
          alignItems: 'center'
      },
      bodyText: {
        fontSize: 16, 
        marginBottom: 10
      }
});

export default StartGameScreen;