import React from 'react';
import { Text, Button } from 'react-native-elements';
import { StyleSheet } from 'react-native';

import { SharedStyles } from '../../style';

export default SelectionButton = ({ buttonText, btnOnPress }) => {
    return <Button buttonStyle={styles.btnContainer} titleStyle={styles.btnText} onPress={btnOnPress} title={ buttonText } />
}

const styles = StyleSheet.create({
    btnContainer: {
        width: 343,
        height: 52,
        backgroundColor: "#000000",
        borderRadius: 10
    },
    btnText: {
        fontSize: SharedStyles.btnTextSize,
        fontFamily: SharedStyles.font,
        fontWeight: "bold"
    }
});