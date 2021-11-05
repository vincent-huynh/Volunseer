import React from 'react';
import { Text, StyleSheet } from 'react-native';

import { SharedStyles } from '../../style';

export default HeaderText = ({ text }) => {
    return <Text style={ style.text }>{ text }</Text>;
}

style = StyleSheet.create({
    text: {
        fontSize: SharedStyles.headerSize,
        fontFamily: SharedStyles.font,
        color: SharedStyles.headerColor,
        fontWeight: "bold"
    }
});