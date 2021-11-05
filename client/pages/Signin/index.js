import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Text } from 'react-native-elements';

import { SafeAreaProvider } from 'react-native-safe-area-context';
import SafeAreaView from 'react-native-safe-area-view';

export default SigninView = ({navigation}) => {
    return (
        <SafeAreaView>
            <StatusBar barStyle="dark-content"/>
            <Text>Sign In View</Text>
        </SafeAreaView>
    )
}