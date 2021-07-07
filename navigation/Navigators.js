import React, {Component} from 'react';
import {View} from 'react-native';
import Maps from '../screens/Maps';
import Login from '../screens/Login';
import { createAppContainer} from 'react-navigation';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../screens/Maps/styles';

const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Maps"
      tabBarOptions={{
        activeTintColor: '#e91e63',
      }}
    >
      <Tab.Screen
        name="Maps"
        component={Maps}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarLabel: 'Login',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

class Navigators extends Component {

    render() {
        return (
            <View
                style={{
                    flex: 1, 
                    paddingTop: Platform.OS === 'ios' ? 0 : Constants.statusBarHeight
                }}>
                    <MainTabs />
            </View>
        );
    }
}

export default Navigators;