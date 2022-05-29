import { Provider } from 'react-redux';
//@ts-ignore
import { PersistGate } from 'redux-persist/es/integration/react';
import { persistor, store } from './redux/store';
import { CookieScreen } from './screens/CookieScreen';

import { NavigationContainer, ParamListBase } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import React from 'react';
import { ShopScreen } from './screens/ShopScreen';

const Stack = createNativeStackNavigator<ParamListBase>()

export default function App() {
  return (
    <Provider store={store}>
      {/*@ts-ignore*/}
      <PersistGate loading={null} persistor={persistor}>
        <SafeAreaProvider>
          <NavigationContainer>
            {/*@ts-ignore*/}
            <Stack.Navigator>
              <Stack.Screen name="CookieScreen" component={CookieScreen}
                options={{headerShown:false}}
              />
              <Stack.Screen name="ShopScreen" component={ShopScreen}
                options={{headerShown:false}}
              />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </PersistGate>
    </Provider >
  );
}

