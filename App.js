import React from 'react';
import { StyleSheet, View } from 'react-native';
import Maps from './screens/Maps';

const App = () => {
  return (
    <View style={styles.container}>
      <Maps />
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