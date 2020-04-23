import React from 'react';
import { View, Text, Image, Button, StyleSheet } from 'react-native';

import Card from '../components/Card';
import Colors from '../constants/Colors';

const GameOverScreen = props => {
    return (
       <View style={styles.screen}>
            <Card style={styles.imageWrapper}>
                <Image style={styles.image} source={require('../assets/ClipartKey_2382228.png')} />
            </Card>
            <View style={styles.bodyTextWrapper}>
                <Text style={styles.bodyText}>It took <Text style={styles.highlightedText}>{props.numberOfRounds}</Text> rounds to guess </Text>
                <Text style={styles.bodyText}>the number <Text  style={styles.highlightedText}>{props.userChoice}</Text>. </Text>
           </View>
           <View style={styles.button}>
                <Button 
                    title="START NEW GAME" 
                    color={Colors.primary}
                    onPress={props.onNewGame} />    
           </View>
       </View> 
    )
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageWrapper: {
        width: 150,
        height: 150,
        borderRadius: 75,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#eee'
    },
    image: {
        width: 90,
        height: 80,
    },
    bodyTextWrapper: {
        marginVertical: 70
    },
    bodyText: {
        fontSize: 18, 
        marginHorizontal: 50,
        textAlign: 'center',
        lineHeight: 25
    },
    highlightedText: {
        color: Colors.accent2,
        fontWeight: 'bold' 
    },
    button: {
        width: 150
    }
});

export default GameOverScreen;