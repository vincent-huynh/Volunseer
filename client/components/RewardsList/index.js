import React from 'react';
import { View, StyleSheet } from 'react-native';

import RewardItem from '../RewardItem';

// Remove later when data from reliable source
const sampleRewardsInfo = [
    {
        value: 70,
        description: "$5 Starbucks"
    },
    {
        value: 500,
        description: "10% Macy Discount"
    },
    {
        value: 70,
        description: "$5 Starbucks"
    },
    {
        value: 50,
        description: "Small Coffee"
    },
    {
        value: 10,
        description: "Donate $1 to Charity of Choice"
    },
    {
        value: 30,
        description: "$1 McDonalds"
    },
    {
        value: 1000,
        description: "$10 Gift Card"
    },
    {
        value: 50,
        description: "Lottery Entry"
    },
    {
        value: 500,
        description: "Ice Cream Voucher"
    },
];

export default RewardsList = ({ rewardsInfo=[] }) => {
    if (rewardsInfo.length == 0)    // TODO: REMOVE later when sample data not needed
        rewardsInfo = sampleRewardsInfo

    return <View style={styles.container}>
        {rewardsInfo.map((e, i) => <RewardItem cost={e.value} description={e.description} key={i}/>)}
    </View>
}

const styles = StyleSheet.create({
    container: {

    }
});