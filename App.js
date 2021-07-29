import * as React from 'react';
import {Text} from 'react-native';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import Navigators from './navigation/Navigators';
import { MapQuery } from './ components/SearchBar/SearchBar';
import styles from './styles/styles';

function App() {
  return (
    <NavigationContainer>
      <Text style={styles.text}>Welcome to Oakland</Text>
      <MapQuery /> 
      <Navigators />
    </NavigationContainer>
  );
}

export default App;