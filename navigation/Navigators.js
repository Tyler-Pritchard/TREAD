import React from 'react';
import {View, Text} from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Maps from '../screens/Maps';
import Login from '../screens/Login';

const Tab = createBottomTabNavigator();

function MainTabs() {
  return (
          <Tab.Navigator
              initialRouteName="Maps"
              screenOptions={({ route }) => ({
                  tabBarIcon: ({ focused, color, size }) => {
                      let iconName;

                      if (route.name === 'Maps') {
                          iconName = focused
                              ? 'ios-information-circle'
                              : 'ios-information-circle-outline';
                      } else if (route.name === 'Login') {
                          iconName = focused ? 'ios-list-box' : 'ios-list';
                      } else {

                      // You can return any component that you like here!
                      return (
                        <View>
                          <Text>Bottom Tab Placeholder</Text>
                        </View>
                      );
                      }
                  },
              })}
              tabBarOptions={{
                  activeTintColor: 'tomato',
                  inactiveTintColor: 'gray',
              }}

          >
              <Tab.Screen name="Maps" component={Maps} />
              <Tab.Screen name="Login" component={Login} />
          </Tab.Navigator>
  );
}


export default MainTabs;

// export const MainTabs = function() {
//   return (
//     <Tab.Navigator
//       initialRouteName="Maps"
//       style={{position: 'absolute'}}
//     >
//       <Tab.Screen name="Maps" component={MapsNavigator} />
//       <Tab.Screen name="Login" component={LoginNavigator} />
//     </Tab.Navigator>
//   );
// }