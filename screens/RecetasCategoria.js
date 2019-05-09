import React from 'react';
import { Text, View, } from 'react-native';


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