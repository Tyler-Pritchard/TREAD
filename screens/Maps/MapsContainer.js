import React from 'react';
import {View} from 'react-native';
import HeatMap from './HeatMapView';
import LocalMapView from './LocalMapView';

function Maps() {
    return (
        <View>
            <LocalMapView />
            <HeatMap />
        </View>
    );
} 

export default Maps;