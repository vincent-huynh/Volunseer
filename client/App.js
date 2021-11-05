import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { NativeRouter, Route, Link } from 'react-router-native';

import HomeView from './pages/Home/index';

export default function App() {
  // return (
  //   <View style={styles.container}>
  //     <Text h3>Open up App.js to start working on your app!</Text>
  //     <StatusBar style="auto" />
  //   </View>
  // );

  return <NativeRouter>
    
  </NativeRouter>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
