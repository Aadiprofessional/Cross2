import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './screens/SplashScreen';
import LoginScreen from './screens/LoginScreen';
import BottomTabNavigator from './navigation/BottomTabNavigator';
import CartScreen from './screens/CartScreen';

const Stack = createNativeStackNavigator();

const sampleCartItems = [
  { id: 1, name: 'Item 1', price: 10.0 },
  { id: 2, name: 'Item 2', price: 15.0 },
];

const totalAmount = sampleCartItems.reduce((sum, item) => sum + item.price, 0);

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        <Stack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={BottomTabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="Cart">
          {(props) => <CartScreen {...props} cartItems={sampleCartItems} totalAmount={totalAmount} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
