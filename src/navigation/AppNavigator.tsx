
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Ionicons } from "@expo/vector-icons";
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Icon from '@ant-design/icons-react-native';
import { AntDesign } from '@expo/vector-icons';

import LandingScreen from "../screens/LandingPage";
import Cart from "../screens/Cart";
import ProductDetail from "../screens/ProductDetail";
import StartupScreen from "../screens/StartupScreens";
import Fav from "../screens/Fav";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator

      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#0C0F14",
          borderTopWidth: 0,
          height: 60,
        },
        tabBarActiveTintColor: "#D17842",
        tabBarInactiveTintColor: "#999",
        tabBarIcon: ({ color, size, focused }) => {
          let iconName = '';

          if (route.name === "Landing") {
            iconName = focused ? "home" : "home";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "shopping-cart";
          } else {
            iconName = "ellipse";
          }

          return (
            <>
              <MaterialIcons name={iconName} size={26} color={color} />
            </>
          );
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
        },
      })}
    >
      <Tab.Screen name="Landing" component={LandingScreen} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="fav" component={Fav} />
    </Tab.Navigator>
  );
}

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Startup" component={StartupScreen} />
        <Stack.Screen name="MainTabs" component={MainTabs} />
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
