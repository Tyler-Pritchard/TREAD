import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import { Searchbar } from 'react-native-paper';


import MapView from 'react-native-maps';

const LocalMap = () => {

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.container}>

      <Text style={styles.text}>Welcome to Oakland bitch</Text>

      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.search}
      />

      <MapView
        style={styles.maps}
        initialRegion={{
          latitude: 37.797154,
          longitude: -122.204921,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0122,
        }
      }/>

    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  maps: {
    width: Dimensions.get('screen').width,
    height: Dimensions.get('screen').height,
  },
  text: {
    margin: 5,
    textAlign: 'center',
    fontSize: 18,
    backgroundColor: 'green',
    color: 'yellow',
    padding: 10,
    width: Dimensions.get('screen').width
  },
  search: {
    margin: 5,
    height: 50,
    width: Dimensions.get('screen').width
  }
});
export default LocalMap;