import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import PageBody from '../../components/PageBody';
import SubheaderText from '../../components/SubheaderText';
import RewardsList from '../../components/RewardsList';

import { SharedStyles } from '../../style';

export default RewardsView = ({navigation}) => {
    return (
        <View style={{flex: 1}}>
            <ScrollView style={{marginTop: SharedStyles.topPageMargin}}>
            <StatusBar barStyle="dark-content"/>

            <PageBody>
                <SubheaderText text="Rewards" />
                <RewardsList />
            </PageBody>
            </ScrollView>
        </View>
    )
}