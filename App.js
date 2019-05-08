import React from 'react';
import { Text, Button, StyleSheet, View, } from 'react-native';
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import { Ionicons } from '@expo/vector-icons';


import IniciarSesion from './screens/IniciarSesion';
import Inicio from './screens/Inicio';
import Explorar from './screens/Explorar';
import RecetasCategoria from './screens/RecetasCategoria';


const AppNavigator = createStackNavigator({
  Home: {
    screen: IniciarSesion,
  },
  Inicio: {
    screen: Inicio,
  },
  RecetasCategoria: {
    screen: RecetasCategoria
  },
},
  {
    initialRouteName: 'Home',
  });

const SettingsStack = createStackNavigator({
  Explorar: { screen: Explorar },
  RecetasCategoria: { screen: RecetasCategoria },
});

export default createAppContainer(createBottomTabNavigator(
  {
    Inicio: { screen: AppNavigator },
    Explorar: { screen: SettingsStack },
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Inicio') {
          iconName = `ios-information-circle${focused ? '' : '-outline'}`;
        }
        if (routeName === 'Explorar') {
          iconName = `md-add-circle${focused ? '' : '-outline'}`;
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#b92147',
      inactiveTintColor: 'gray',
    },
  }

));

const styles = StyleSheet.create({
  backgroundContainer: {
    flex: 1,
    width: null,
    height: null,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoContainer: {
    alignItems: 'center'
  },
  contentContainer: {
    paddingTop: 3,
  },
  buscador: {
    marginTop: 3,
  }
});