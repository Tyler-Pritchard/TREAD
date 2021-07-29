import React, {Component} from 'react';
import {View} from 'react-native';
import HeatMap from './HeatMapView';
import LocalMapView from './LocalMapView';

export default class Maps extends Component {
    render() {
        return (
            <View>
                <HeatMap />
                <LocalMapView />
            </View>
        )
    }

}    