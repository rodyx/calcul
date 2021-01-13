import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    appWrapper: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      color: 'green',
    },
    displayWrapper: {
      paddingHorizontal: 25,
      height: '40%',
      width: '100%',
      justifyContent: 'flex-end',
    },
    displayText: {
      marginLeft: 'auto',
      marginRight: 0,
      fontSize: 55,
    },
    buttonsList: {
      paddingVertical: 30,
      paddingHorizontal: 10,
      width: '100%',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'center',
      alignContent: 'flex-end',
      backgroundColor: 'white'
    },
    buttonNum: {
      width: windowWidth * 0.22,
      height: windowWidth * 0.22,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 3,
      borderRadius: 50,
      borderWidth: 0.4,
      borderColor: '#8b8e94',
    },
    buttonSpec: {
      width: windowWidth * 0.22,
      height: windowWidth * 0.22,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 3,
      borderRadius: 50,
      borderWidth: 0.5,
      backgroundColor: '#bfd4f5',
      borderColor: 'white',
    },
    buttonSpecC: {
      width: windowWidth * 0.44,
      height: windowWidth * 0.22,
      alignItems: 'center',
      justifyContent: 'center',
      margin: 3,
      borderRadius: 50,
      borderWidth: 0.1,
      backgroundColor: '#CE3D3D',
      borderColor: 'red',
      color: '#000',
    },
    buttonText: {
      fontSize: 35,
      color: '#000',
      shadowColor: 'transparent',
      shadowOpacity: 0,
      shadowRadius: 0,
    },
    buttonTextC: {
      fontSize: 35,
      color: 'white',
      shadowColor: 'transparent',
      shadowOpacity: 0,
      shadowRadius: 0,
    },
  });