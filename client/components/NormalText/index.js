import React from 'react';
import { Text } from 'react-native-elements';
import { StyleSheet } from 'react-native';

import { SharedStyles } from '../../style';

export default NormalText = ({ text }) => {
    return <Text h3 h3Style={styles.text}>{ text }</Text>;
}

const styles = StyleSheet.create({
    text: {
        fontSize: SharedStyles.textSize,
        fontFamily: SharedStyles.font,
        color: SharedStyles.textColor,
    }
});