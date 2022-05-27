import { useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Provider, useDispatch, useSelector } from 'react-redux';
//@ts-ignore
import { PersistGate } from 'redux-persist/es/integration/react';
import { earn, selectCookie } from './redux/money/moneySlice';
import { persistor, store } from './redux/store';
import { CookieScreen } from './screens/CookieScreen';


export default function App() {
  return (
    <Provider store={store}>
      {/*@ts-ignore*/}
      <PersistGate loading={null} persistor={persistor}>
        <CookieScreen />
      </PersistGate>
    </Provider>
  );
}

