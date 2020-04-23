import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const Input = props => {



    return (
        <TextInput {...props} style={{...styles.input, ...props.style}} />
    );
};

const styles = StyleSheet.create({
    input: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        paddingHorizontal: 10,
        marginBottom: 10
    }
});

export default Input;