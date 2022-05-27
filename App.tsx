import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [money, setMoney] = useState(0)
  const [increment, setIncrement] = useState(0)

  useEffect(()=> {
    const id = setInterval(()=> {
      setMoney((money) => money+increment)
    }, 1000)
    return () => clearInterval(id)
  })

  return (
    <View style={styles.container}>
      <Text>🍪 {money}</Text>
      <TouchableOpacity
        style={styles.cookieContainer}
        onPress={ () => {
          console.log('clicked')
          setMoney(money+1)
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
