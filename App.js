import React from 'react';
import MainTabs from './navigation/Navigators';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <MainTabs />
    </NavigationContainer>
  );
}

export default App;