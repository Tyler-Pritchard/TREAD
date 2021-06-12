import { StyleSheet, Dimensions } from 'react-native';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      borderWidth: 2
    },
    maps: {
      width: Dimensions.get('screen').width,
      height: Dimensions.get('screen').height,
    },
    text: {
      margin: 5,
      textAlign: 'center',
      fontSize: 18,
      backgroundColor: 'green',
      color: 'yellow',
      padding: 10,
      width: Dimensions.get('screen').width
    },
    search: {
      margin: 5,
      height: 50,
      width: Dimensions.get('screen').width
    }
  });

  export default styles;