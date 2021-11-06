import React from 'react';
import ProgressCircle from 'react-native-progress-circle'
import { View, StyleSheet } from 'react-native';

import NormalText from '../NormalText';
import { SharedStyles } from '../../style';
import Spacer from '../Spacer';

export default PercentProgressBar = ({ text, percent, radius, description}) => {
    const styles = StyleSheet.create({
        container: {
            width: radius * 2.5,
            alignItems: "center"
        }
    });

    return <View style={styles.container}>
        <ProgressCircle percent={percent} radius={radius} borderWidth={20} color={SharedStyles.progressBarColor} shadowColor={SharedStyles.progressBarShadow} bgColor="#fff">
            <NormalText text={text} />
        </ProgressCircle>
        <Spacer height={SharedStyles.elementSpacing} />
        <NormalText text={description}/>
    </View>
}