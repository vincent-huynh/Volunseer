import React from 'react';
import { Image, StyleSheet } from 'react-native';

import { SharedStyles } from '../../style';

export default Logo = (props) => {
    return <Image style={ [styles.logo, props.styles] } source={ require("../../assets/logo.png") } />;
}

const styles = StyleSheet.create({
    logo: {
        width: "75%",
        height: 200,
        resizeMode: "contain",
        tintColor: SharedStyles.logoTintColor
    }
});