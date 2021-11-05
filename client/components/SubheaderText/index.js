import React from 'react';
import { Text } from 'react-native-elements';
import { StyleSheet } from 'react-native';

import { SharedStyles } from '../../style';

export default SubheaderText = ({ text }) => {
    return <Text h1>{ text }</Text>;
}

const styles = StyleSheet.create({
    text: {
        fontSize: SharedStyles.subheaderSize,
        fontFamily: SharedStyles.fontFamily,
        color: SharedStyles.subheaderColor,
    }
});