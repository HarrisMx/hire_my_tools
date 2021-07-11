/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Text, StyleSheet, View, Dimensions } from 'react-native';
import Splash from './components/screens/splash/Splash';
import Login from './components/screens/login/Login';

const App = () => {
  return (
    <View style={styles.container}>
      <Login/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    justifyContent: 'center',
    backgroundColor: '#2151FF'
  }
});

export default App;
