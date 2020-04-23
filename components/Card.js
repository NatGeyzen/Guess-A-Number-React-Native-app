import React from 'react';
import { View, StyleSheet } from 'react-native';

const Card = props => {
    return (
        <View style={styles.card}>{props.children}</View>
    );
};

const styles = StyleSheet.create({
    card: {
        width: '80%',
        shadowColor: 'black',
        shadowOffset: {width: 2, height: 2},
        shadowRadius: 0.25,
        elevation: 5,
        backgroundColor: 'white',
        borderRadius: 10,
        paddingVertical: 25,
        alignItems: 'center'
    }
});

export default Card;
