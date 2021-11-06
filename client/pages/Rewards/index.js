import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native-elements';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

import PageBody from '../../components/PageBody';
import SubheaderText from '../../components/SubheaderText';
import RewardsList from '../../components/RewardsList';

export default RewardsView = ({navigation}) => {
    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content"/>

            <PageBody>
                <SubheaderText text="Rewards" />
                <RewardsList />
            </PageBody>
        </SafeAreaView>
    )
}