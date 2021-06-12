import React from 'react';
import WebView from 'react-native-webview';
import Heatmap from 'react-native-simpleheat';

export default () => (
  <Heatmap
    WebView={WebView}
    region={{
      latitude: 37.797154, 
      longitude: -122.204921,
      latitudeDelta: 0.0622,
      longitudeDelta: 0.0122,
    }}
    data={[
      [
        -122.204921, // longitude
        37.797154, // latitude
        10, // intensity
      ],
    ]}
  />
);