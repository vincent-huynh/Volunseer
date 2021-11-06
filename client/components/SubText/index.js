import React from 'react';
import { Text } from 'react-native-elements';
import { StyleSheet } from 'react-native';

import { SharedStyles } from '../../style';

export default SubText = ({ text }) => {
    return <Text h1>{ text }</Text>;
}

const styles = StyleSheet.create({
    text: {
        fontSize: SharedStyles.subTextSize,
        fontFamily: SharedStyles.font,
        color: SharedStyles.subTextColor,
    }
});