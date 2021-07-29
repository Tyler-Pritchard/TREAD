import React from 'react';
import { TouchableOpacity } from 'react-native';
import styles from './styles';
import {GOOGLE_API_KEY} from '../../config';
import MapView from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';

const LocalMap = () => {

  const origin = {latitude: 37.797154, longitude: -122.204921};
  const destination = {latitude: 37.805570, longitude: -122.274335}

  return (
      <MapView
        style={styles.maps}
        initialRegion={{
          latitude: 37.797154, 
          longitude: -122.204921,
          latitudeDelta: 0.0622,
          longitudeDelta: 0.0122,
        }
      }>
        <MapViewDirections 
          origin={origin}
          destination={destination}
          apikey={GOOGLE_API_KEY}
          strokeWidth={3}
          strokeColor="hotpink"
        />
      </MapView>
  );
};

export default LocalMap;