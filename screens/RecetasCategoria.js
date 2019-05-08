import React from 'react';
import { Text, Button, StyleSheet, Image, View, ScrollView } from 'react-native';
import { Card, CardItem, Thumbnail, Left, Body, Item, Input } from 'native-base';
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'

export default class RecetasCategoria extends React.Component {
    static navigationOptions = {
      title: 'RecetasCategoria',
      headerStyle: {
        backgroundColor: '#b92147',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    };
    render() {
      return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 30 }}>RecetasCategoria!</Text>
        </View>
      );
    }
  }