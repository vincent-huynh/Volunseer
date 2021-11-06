import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import LandingView from './pages/Landing/index';
import HomeView from './pages/Home/index';
import MapView from './pages/Map/index';
import ProfileView from './pages/Profile/index';
import RegisterView from './pages/Register/index';
import RewardsView from './pages/Rewards/index';
import SigninView from './pages/Signin/index';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Register' component={RegisterView} />
          <Stack.Screen name='Landing' component={LandingView} />
          <Stack.Screen name='Home' component={HomeView} />
          <Stack.Screen name='Volunteer Map' component={MapView} />
          <Stack.Screen name='My Profile' component={ProfileView} />
          {/* <Stack.Screen name='Register' component={RegisterView} /> */}
          <Stack.Screen name='Rewards' component={RewardsView} />
          <Stack.Screen name='Sign In' component={SigninView} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
