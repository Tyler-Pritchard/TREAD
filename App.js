import * as React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Navigators from './navigation/Navigators';

function App() {
  return (
    <NavigationContainer>
      <Navigators />
    </NavigationContainer>
  );
}

export default App;