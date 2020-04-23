import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const numberContainer = props => {
    return (
        <View style={styles.container}>
            <Text style={styles.number}>{props.selectedNumber}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderColor: Colors.primary,
        borderWidth: 3,
        borderRadius: 10,
        padding: 5,
        justifyContent: 'center',
        alignItems: 'center',
        width: 40,
        marginTop: 10,
        marginBottom: 30
    },
    number: {
        color: Colors.primary,
        fontSize: 18,
        fontWeight: 'bold'
    }
});

export default numberContainer;