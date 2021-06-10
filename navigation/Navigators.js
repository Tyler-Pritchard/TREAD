import React, { Component } from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';
import {MapViewNavigator, LoginNavigator} from './ROUTES';
import Login from '../screens/Login';

const MainDrawer = createDrawerNavigator();

function MainDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="MapView" component={MapView} />
            <Drawer.Screen name="Login" component={Login} />
        </Drawer.Navigator>
    )
}