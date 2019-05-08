import React from 'react';
import { Text, Button, StyleSheet, Image, View, Dimensions, ScrollView } from 'react-native';
import { Card, CardItem, Thumbnail, Left, Body, Item, Input } from 'native-base';
import { createAppContainer, createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons'
import { Ionicons } from '@expo/vector-icons';


import IniciarSesion from './screens/IniciarSesion';

const { width: WIDTH } = Dimensions.get('window')

class Inicio extends React.Component {
  static navigationOptions = {
    title: 'Mercadito',
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
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        <Item rounded style={styles.buscador}>
          <Icon name={'ios-search'} size={25}
            style={{
              position: 'absolute',
              top: 10,
              left: 10,
            }} />
          <Input placeholder='        Busca tu restaurante o receta favorita' />
        </Item>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: 'https://www.juanitas.com/wp-content/uploads/2017/09/juanita-slider.png' }} />
              <Body>
                <Text>Chilaquiles Doña Juanita</Text>
                <Text note>Se te antojaron</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody onPress={() => this.props.navigation.navigate('Explorar')} >
            <Image
              source={{ uri: 'https://i.pinimg.com/564x/b3/48/2f/b3482f112646f39c624c531633af7b1b.jpg' }}
              style={{ height: 200, width: null, flex: 1 }} />
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: 'http://www.wellandpizza.com/wp-content/uploads/2017/11/lucianos_logo2.jpg' }} />
              <Body>
                <Text>Pizza Sarten</Text>
                <Text note>Se te antojaron</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{ uri: 'https://food-images.files.bbci.co.uk/food/recipes/alpine_pizza_32132_16x9.jpg' }} style={{ height: 200, width: null, flex: 1 }} />
          </CardItem>
        </Card>
        <Card>
          <CardItem>
            <Left>
              <Thumbnail source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0H4qF2HX5ivTJ_Dx_Ji-DPllAVLjFpEP51YEmSY3SNqpR8x1_' }} />
              <Body>
                <Text>Aguachile</Text>
                <Text note>Se te antojaron</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem cardBody>
            <Image source={{ uri: 'http://cdn2.cocinadelirante.com/sites/default/files/styles/gallerie/public/images/2017/02/aguachilerojo.jpg' }} style={{ height: 200, width: null, flex: 1 }} />
          </CardItem>
        </Card>

        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: 50 }}>Inicio</Text>
          <Button
            title="Ir a Categorias"
            onPress={() => this.props.navigation.navigate('Explorar')}
          />
        </View>
      </ScrollView>
    );
  }
}

class Explorar extends React.Component {
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

class RecetasCategoria extends React.Component {
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