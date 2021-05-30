import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';
import {StyleSheet, View, Dimensions} from 'react-native';
import {MapView, Polyline, Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import GOOGLE_API_KEY from '../keys';

const Main = () => {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [coordinates] = useState([
    {
      latitude: 48.8587741,
      longitude: 2.2069771,
    },
    {
      latitude: 48.8323785,
      longitude: 2.3361663,
    },
  ]);
  const onChangeSearch = query => setSearchQuery(query);

  return (
    <View style={styles.container}>
        <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        />
        <MapView
        style={styles.maps}
        initialRegion={{
          latitude: 48.864716,
          longitude: 2.349014,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0121,
        }}>
        <MapViewDirections
          origin={coordinates[0]}
          destination={coordinates[1]}
          apikey={GOOGLE_API_KEY} // insert your API Key here
          strokeWidth={4}
          strokeColor="#111111"
        />
        {/* <Marker coordinate={coordinates[0]} />
        <Marker coordinate={coordinates[1]} /> */}
        </MapView>
    </View>
  );
};


const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    maps: {
      width: Dimensions.get('screen').width,
      height: Dimensions.get('screen').height,
    },
});


export default Main;