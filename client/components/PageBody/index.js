import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import { SharedStyles } from '../../style';

export default PageBody = (props) => {
    return <View style={ [styles.containerStyle, props.styles] }>{ props.children }</View>
}

const styles = StyleSheet.create({
    containerStyle: {
        marginLeft: SharedStyles.leftPageMarginPercent + "%",
        marginRight: SharedStyles.rightPageMarginPercent + "%",
        marginTop: SharedStyles.topPageMargin,
    }
});