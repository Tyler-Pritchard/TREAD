import React, { Component } from 'react';
//change to bottom tab
import {createDrawerNavigator} from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';
import {MapsNavigator, LoginNavigator} from './ROUTES';
import Login from '../screens/Login';

const MainDrawer = createDrawerNavigator();

function MainDrawer() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen name="Maps" component={Maps} />
            <Drawer.Screen name="Login" component={Login} />
        </Drawer.Navigator>
    )
}