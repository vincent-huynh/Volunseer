import React from 'react';
import { Text } from 'react-native-elements';
import { StyleSheet } from 'react-native';

import { SharedStyles } from '../../style';

export default SubText = ({ text, style }) => {
    return <Text h4 h4Style={[styles.text, style]}>{ text }</Text>;
}

const styles = StyleSheet.create({
    text: {
        fontSize: SharedStyles.subTextSize,
        fontFamily: SharedStyles.font,
        color: SharedStyles.subTextColor,
    }
});