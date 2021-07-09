import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import HeatMap from './HeatMapView';
import LocalMapView from './LocalMapView';

function Maps() {
    return (
        <TouchableOpacity>
            <HeatMap />
            <LocalMapView />
        </TouchableOpacity>
    );
} 

export default Maps;