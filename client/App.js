import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { SafeAreaProvider } from 'react-native-safe-area-context';

import LandingView from "./pages/Landing/index";
import HomeView from "./pages/Home/index";
import VolunteerMapView from "./pages/UserPages/Map/index";
import ProfileView from "./pages/UserPages/Profile/index";
import RegisterView from "./pages/Register/index";
import RewardsView from "./pages/UserPages/Rewards/index";
import SigninView from "./pages/Signin/index";
import EditProfileView from "./pages/UserPages/EditProfile/index";
import ActivityView from "./pages/UserPages/Activity/index";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Landing' component={LandingView} />
          <Stack.Screen name='Home' component={HomeView} />
          <Stack.Screen name='Volunteer Map' component={VolunteerMapView} />
          <Stack.Screen name='My Profile' component={ProfileView} />
          <Stack.Screen name="Edit Profile" component={EditProfileView} />
          <Stack.Screen name='Register' component={RegisterView} />
          <Stack.Screen name='Rewards' component={RewardsView} />
          <Stack.Screen name='Sign In' component={SigninView} />
          <Stack.Screen name="Personal Activity" component={ActivityView} />
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
