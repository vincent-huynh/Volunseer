import React from 'react';
import { StyleSheet, View, Text, KeyboardAvoidingView } from 'react-native';


import { SharedStyles } from '../../style';

export default PageBody = (props) => {
    return <KeyboardAvoidingView style={ [styles.containerStyle, props.styles] } behavior="padding" enabled>{ props.children }</KeyboardAvoidingView>
}

const styles = StyleSheet.create({
    containerStyle: {
        marginLeft: SharedStyles.leftPageMarginPercent + "%",
        marginRight: SharedStyles.rightPageMarginPercent + "%",
        marginTop: SharedStyles.topPageMargin,
        padding: 0
    }
});