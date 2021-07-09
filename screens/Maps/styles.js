import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      borderWidth: 2,
      borderColor: 'red'
    },
    maps: {
      flex: 1,
      width: Dimensions.get('screen').width,
      height: Dimensions.get('screen').height,
      borderWidth: 2,
      borderColor: 'purple'
    },
    heatmap: {
      flex: 1,
      position: 'absolute',
      borderWidth: 2,
      borderColor: "orangered",
    }
  });

  export default styles;