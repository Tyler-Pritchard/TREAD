import React from 'react';
import { StyleSheet, View } from 'react-native';
import LocalMap from './screens/LocalMap';

const App = () => {
  return (
    <View style={styles.container}>
      <LocalMap />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    marginTop: 40 },
});

export default App;