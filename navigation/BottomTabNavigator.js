import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/HomeScreen';
import QuotesScreen from '../screens/QuotesScreen';
import CartScreen from '../screens/CartScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false, // Hide the top label (header)
        animationEnabled: false, // Disable animation
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Quotes') {
            iconName = focused ? 'chatbox' : 'chatbox-outline';
          } else if (route.name === 'Cart') {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person' : 'person-outline';
          }

          // You can replace 'main.color' with your actual color variable
          const iconColor = focused ? '#FCCC51' : color;

          return <Icon name={iconName} size={size} color={iconColor} />;
        },
        tabBarLabel: ({ focused, color }) => {
          let label;

          if (route.name === 'Home') {
            label = 'Home';
          } else if (route.name === 'Quotes') {
            label = 'Quotes';
          } else if (route.name === 'Cart') {
            label = 'Cart';
          } else if (route.name === 'Profile') {
            label = 'Profile';
          }

          return (
            <Text style={{ color, fontSize: 12, textAlign: 'center' }}>
              {label}
            </Text>
          );
        },
        tabBarActiveTintColor: '#FCCC51',
        tabBarInactiveTintColor: 'gray',
        tabBarShowLabel: true, // Show labels
      })}
      tabBarOptions={{
        style: {
          display: 'flex', // Fix for deprecated tabBarStyle
        },
      }}
    >
      <Tab.Screen 
        name="Home" 
        component={HomeScreen} 
      />
      <Tab.Screen 
        name="Quotes" 
        component={QuotesScreen} 
      />
      <Tab.Screen 
        name="Cart" 
        component={CartScreen} 
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
