import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/HomeScreen';
import AnimeListScreen from './screens/AnimeListScreen';
import AnimeDetailsScreen from './screens/AnimeDetailsScreen';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: { backgroundColor: '#ffffff' },
          headerTintColor: '#0284c7',
          headerTitleStyle: { fontWeight: '700' },
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ title: 'Pa Search Anime' }}
        />
        <Stack.Screen
          name="AnimeList"
          component={AnimeListScreen}
          options={{ title: 'Anime List' }}
        />
        <Stack.Screen
          name="AnimeDetails"
          component={AnimeDetailsScreen}
          options={{ title: 'Details' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}