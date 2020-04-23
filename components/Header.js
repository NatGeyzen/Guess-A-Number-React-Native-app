import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Colors from '../constants/Colors';

const Header = props => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{props.title}</Text>    
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        alignItems: 'center',
        paddingTop: 50,
        paddingBottom: 20,
        backgroundColor: Colors.primary,
        width: '100%'
    },
    title: {
        fontSize: 20,
        textTransform: 'uppercase',
        color: '#DBE2E2',
        fontWeight: 'bold',
        textShadowColor: 'lightgrey',
        textShadowOffset: { width: 1, height: 1 },
        textShadowRadius: 2,
        letterSpacing: 1.5
    }
});

export default Header;