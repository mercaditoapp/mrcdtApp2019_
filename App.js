import React from 'react';
import { createAppContainer, createStackNavigator, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import IniciarSesion from './screens/IniciarSesion';
import Inicio from './screens/Inicio';
import Receta from './screens/Receta';
import Pedido from './screens/Pedido';
import Explorar from './screens/Explorar';
import Recetas from './screens/Recetas';
import Perfil from './screens/Perfil';
import MetodosPago from './screens/MetodosPago';
import Direcciones from './screens/Direcciones';
import DatosPersonales from './screens/DatosPersonales';

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const InicioStack = createStackNavigator({
  Inicio: { screen: Inicio },
  Receta: { screen: Receta },
  Pedido: { screen: Pedido },
}, {
    initialRouteName: 'Inicio',
  }
);

const ExplorarStack = createStackNavigator({
  Explorar: { screen: Explorar },
  Recetas: { screen: Recetas },
  Receta: { screen: Receta },
  Pedido: { screen: Pedido },
}, {
    initialRouteName: 'Explorar',
  }
);

const PerfilStack = createStackNavigator({
  Perfil: { screen: Perfil },
  MetodosPago: { screen: MetodosPago },
  DatosPersonales: { screen: DatosPersonales },
  Direcciones: { screen: Direcciones },
  
}, {
    initialRouteName: 'Perfil',
  }
);


const TabNavigator = createBottomTabNavigator({
  Inicio: InicioStack, 
  Explorar: ExplorarStack,
  Perfil: PerfilStack,
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
  });


  const SwitchNavigator = createSwitchNavigator({
    IniciarSesion: IniciarSesion,
    TabNavigator: TabNavigator,
  })
  
  const AppContainer = createAppContainer(SwitchNavigator);