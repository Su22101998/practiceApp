import 'react-native-gesture-handler';
import React from 'react';
import {StyleSheet} from 'react-native';
import MainNavigator from './navigator/MainNavigator';
import AuthContextProvider from './store/auth-context';
const App = () => {
  return (
    <AuthContextProvider>
      <MainNavigator />
    </AuthContextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
