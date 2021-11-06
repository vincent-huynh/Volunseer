import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, ScrollView } from 'react-native';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';
import Icon from 'react-native-vector-icons/AntDesign';

import PageBody from '../../components/PageBody';
import SubheaderText from '../../components/SubheaderText';
import RewardsList from '../../components/RewardsList';

import { SharedStyles } from '../../style';

export default RewardsView = ({navigation}) => {
    return (
        <View style={{flex: 1}}>
            <StatusBar barStyle="dark-content"/>
            <View style={{ position: "absolute", marginTop: 50, marginLeft: 20, zIndex: 1 }}>
               <Icon name="back" size={16} color="#000" onPress={() => navigation.pop() }/>
            </View>

            <ScrollView style={{marginTop: SharedStyles.topPageMargin}}>
            <PageBody>
                <SubheaderText text="Rewards" />
                <RewardsList />
            </PageBody>
            </ScrollView>
        </View>
    )
}