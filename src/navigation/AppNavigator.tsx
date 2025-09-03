import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartupScreen from '../screens/StartupScreens';
import LandingScreen from '../screens/LandingPage';
import ProductDetail from '../screens/ProductDetail';
import Cart from '../screens/Cart';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Startup" component={StartupScreen} />
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="productDetail" component={ProductDetail} />
        <Stack.Screen name="cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
