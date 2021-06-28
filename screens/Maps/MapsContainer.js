import React from 'react';
import {View} from 'react-native';
import HeatMap from './HeatMapView';
import LocalMapView from './LocalMapView';

function Maps() {
    return (
        <View>
            <HeatMap />
            <LocalMapView />
        </View>
    );
} 

export default Maps;