
import React from 'react';
import { Icon } from 'react-native-elements';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { ModulesScreen } from './modules.tsx'
import { HomeScreen } from './home.tsx'
import { SettingsScreen } from './settings.tsx'
import { LabelsScreen } from './labels.tsx'

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Browse') {
              iconName = 'explore';
            }
            else if (route.name === 'Settings') {
              iconName = 'settings';
            }
            else if (route.name === 'Modules') {
              iconName = 'extension';
            }
            else if (route.name === "Labels") {
              iconName = "label"
            }

            // You can return any component that you like here!
            return <Icon name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}
      >
        <Tab.Screen name="Labels" component={LabelsScreen} />
        <Tab.Screen name="Browse" component={HomeScreen} />
        <Tab.Screen name="Modules" component={ModulesScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

