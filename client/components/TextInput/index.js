import React from 'react';
import { StyleSheet } from 'react-native';
import { Input } from 'react-native-elements';

import { SharedStyles } from '../../style';

export default TextInput = ({ placeholder, boxed, onInputChange, secureTextEntry=false }) => {
    return <Input containerStyle={styles.container} inputStyle={ boxed ? styles.boxed : styles.unboxed } placeholder={ placeholder } onChangeText={(text) => onInputChange(text)} secureTextEntry={secureTextEntry} />
}

const styles = StyleSheet.create({
    container: {

    },
    boxed: {
        color: SharedStyles.inputTextColor,
        fontSize: SharedStyles.inputTextSize,
        fontFamily: SharedStyles.font,
        borderWidth: 2,
        borderColor: "#000000",
    },
    unboxed: {
        borderColor: "#000000",
        color: SharedStyles.inputTextColor,
        fontSize: SharedStyles.inputTextSize,
        fontFamily: SharedStyles.font,
    }
});