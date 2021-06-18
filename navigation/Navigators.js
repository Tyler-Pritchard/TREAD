import React from 'react';
import {MapsNavigator, LoginNavigator} from './ROUTES';
import Login from '../screens/Login';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

export function MainTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Maps" component={MapsNavigator} />
      <Tab.Screen name="Login" component={LoginNavigator} />
    </Tab.Navigator>
  );
}