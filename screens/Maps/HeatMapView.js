import React from 'react';
import WebView from 'react-native-webview';
import Heatmap from 'react-native-simpleheat';

export default () => (
  <Heatmap
    WebView={WebView}
    region={{
      latitude: 37.797187, 
      longitude: -122.204921,
      latitudeDelta: 0.0625,
      longitudeDelta: 0.0125,
    }}
    data={[
      [
        -122.205930, // longitude
        37.805254, // latitude
        10, // intensity
      ],
    ]}
  />
);