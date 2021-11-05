import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native-elements';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

export default ProfileView = ({navigation}) => {
    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content"/>
            <Text>Profile View</Text>
        </SafeAreaView>
    )
}