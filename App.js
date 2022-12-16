import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import {Splash} from './src/screen/Splash';
import AppNavigator from './AppNavigator';

const App = () => {
  return (
    <View style={styles.AppContainer}>
      <AppNavigator />
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
  },
});
