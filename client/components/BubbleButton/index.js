import React from 'react';
import { StyleSheet } from 'react-native';
import { Button } from 'react-native-elements';

import { SharedStyles } from '../../style';

export default BubbleButton = ({buttonText, btnOnPress, style}) => {
    return <Button buttonStyle={[styles.btnContainer, style]} titleStyle={styles.btnText} onPress={btnOnPress} title={buttonText} />
}

const styles = StyleSheet.create({
    btnContainer: {
        width: 343,
        height: 52,
        backgroundColor: "#C4C4C4",
        borderRadius: 20,
        padding: 0,
        margin: 0
    },
    btnText: {
        fontSize: SharedStyles.btnTextSize,
        fontFamily: SharedStyles.font,
        color: "#000000",
        fontWeight: "bold"
    }
});