import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>🍪 {10}</Text>
      <TouchableOpacity
        style={styles.cookieContainer}
        onPress={ () => {
          console.log('clicked')
        }}
      >
        <Image
          source={require('./assets/cookie.png')}
          resizeMode='contain'
          style={styles.cookie}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cookieContainer:{
    height:'70%',
    width: '100%',
    justifyContent:'center',
    alignItems:'center',
    padding:'5%'
  },
  cookie: {
    minWidth: '100%',
    height: '100%',
  }
});
