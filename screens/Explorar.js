import React from 'react';
import { Text, Button, View,  } from 'react-native';


export default class Explorar extends React.Component {
    static navigationOptions = {
      title: 'Explorar',
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
          <Text style={{ fontSize: 50 }}>Explorar!</Text>
          <Button
            title="Revisar Recetas"
            onPress={() => this.props.navigation.navigate('RecetasCategoria')}
          />
        </View>
      );
    }
  }