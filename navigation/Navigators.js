import React, {Component} from 'react';
import {View, Text} from 'react-native';
import Maps from '../screens/Maps';
import Login from '../screens/Login';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer, NavigationContainer } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import styles from '../screens/Maps/styles';

const MainNavigator = createBottomTabNavigator(
    {
        Maps: {
            screen: Maps,
            navigationOptions: ({navigation}) => ({
                headerLeft: <Icon
                    name='list'
                    type='font-awesome'
                    iconStyle={styles.stackIcon}
                />
            })
        },
        Maps: {screen: Maps}
    },
    {
        initialRouteName: 'Maps',
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

const LoginNavigator = createStackNavigator(
    {
        Login: { screen: Login }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='login'
                type='font-awesome'
                iconStyle={styles.stackIcon}
            />
        })
    }
);

const MapsNavigator = createStackNavigator(
    {
        Maps: { screen: Maps }
    },
    {
        defaultNavigationOptions: ({navigation}) => ({
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            },
            headerLeft: <Icon
                name='login'
                type='font-awesome'
                iconStyle={styles.stackIcon}
            />
        })
    }
);

const AppNavigator = createAppContainer(MainNavigator)

class Navigators extends Component {

    render() {
        return (
            <View>
                <NavigationContainer>
                    <AppNavigator />
                </NavigationContainer>
            </View>
        );
    }
}

export default Navigators;