import React from 'react';
import { Image, Text, StyleSheet, View, Alert, TouchableOpacity } from 'react-native';

import { SharedStyles } from '../../style';

import Spacer from '../Spacer';

export default RewardItem = ({ cost, description }) => {
    const displayText = cost + " Coins: " + description;

    const redeemReward = () => {
        console.log("Redeeming Reward");
    }

    const onPressReward = () => {
        console.log("Pressed");
        Alert.alert(
            "Reward Redemption",
            displayText,
            [
                {
                    text: "Confirm",
                    onPress: redeemReward
                },
                {
                    text: "Cancel",
                    style: "cancel"
                }
            ]);
    }

    return <TouchableOpacity style={styles.container} onPress={onPressReward}>
        <Image style={styles.coin} source={ require("../../assets/coin.png") } />
        <Spacer width={20} />
        <Text style={styles.containerText}>{ displayText }</Text>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    container: {
        borderColor: SharedStyles.rewardsTextColor,
        borderBottomWidth: 1,
        backgroundColor: "transparent",
        flexDirection: "row",
        alignItems: "center",
        height: 60
    },
    containerText: {
        color: "#000000",
        fontSize: SharedStyles.subTextSize,
        fontFamily: SharedStyles.font
    },
    coin: {
        width: "10%",
        resizeMode: "contain",
        padding: 0,
        margin: 0
    }
});