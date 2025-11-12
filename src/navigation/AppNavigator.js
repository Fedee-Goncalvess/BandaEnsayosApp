import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

// Screens
import LibraryScreen from '../screens/LibraryScreen';
import NowPlayingScreen from '../screens/NowPlayingScreen';
import AccountScreen from '../screens/AccountScreen';

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Biblioteca') {
              iconName = focused ? 'musical-notes' : 'musical-notes-outline';
            } else if (route.name === 'Reproduciendo') {
              iconName = focused ? 'play-circle' : 'play-circle-outline';
            } else if (route.name === 'Cuenta') {
              iconName = focused ? 'person' : 'person-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#1DB954',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Biblioteca" component={LibraryScreen} />
        <Tab.Screen name="Reproduciendo" component={NowPlayingScreen} />
        <Tab.Screen name="Cuenta" component={AccountScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}