import React, { useState, useEffect } from 'react';
import { 
    View, 
    Text, 
    StyleSheet,
    Button
} from 'react-native';

import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';

import Colors from '../constants/Colors';

const generateRandomNumber = (min, max, exclude) => {
   min = Math.ceil(min);
   max = Math.floor(max);
   const randomNumber = Math.floor(Math.random() * (max - min )) + min;
   if ( randomNumber === exclude) {
       return generateRandomNumber(min, max, exclude);
   } else {
        return randomNumber;
   }
};

const GameScreen = props => {

    const [ currentGuess, setCurrentGuess ] = useState(
        generateRandomNumber(1, 100, props.userChoice)
    )

    return (
        <View style={styles.screen}>
            <Card style={styles.card}>
                <Text style={styles.titleText}>Computer's guess</Text>
                <NumberContainer selectedNumber={currentGuess} />
                <View style={styles.buttonWrapper}>
                    <View style={styles.button}>
                        <Button title="LOWER" color={Colors.accent1} />
                    </View>
                    <View style={styles.button}>
                        <Button title="HIGHER" color={Colors.accent2} />    
                    </View>
                </View>
                
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 17,
        fontWeight: 'bold',
        marginBottom: 10
    },
    card: {
        margin: 0
    },
    buttonWrapper: {
        flexDirection: 'row',
        width: '70%',
        justifyContent: 'space-between'
    },
    button: {
        width: 90
    }
});

export default GameScreen;