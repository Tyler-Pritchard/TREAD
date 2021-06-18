import React from 'react';
import Maps from '../screens/Maps';
import Login from '../screens/Login';

const MapsNavigator = createBottomTabNavigator(
    {
        Maps: { screen: Maps }
    }
);

const LoginNavigator = createStackNavigator(
    {
        Login: { screen: Login }
    }
);