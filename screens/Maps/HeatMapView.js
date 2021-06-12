import HeatMap from 'react-native-heat-map';
 
export default () => (
  <HeatMap
    pointerEvents="box-only"
    style={{
      flex: 1,
    }}
    data={[
      [
        -3.0118499, // longitude
        53.4139281, // latitude
        20   // intensity
      ],
    ]}
    region={{
      longitude: -3.0118499,
      latitude: 53.4139281,
      latitudeDelta: 0.2,
      longitudeDelta: 0.2,
    }}
  />
);