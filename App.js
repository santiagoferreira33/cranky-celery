import * as React from 'react';
import { Text, View, StyleSheet, } from 'react-native';
import Home from './componentes/Home';
import Cont from './componentes/Cont';

import { createStackNavigator } from 'react-navigation';

const RootStack = createStackNavigator({
     Home: Home,
     Cont: Cont,
     
})

export default class App extends React.Component {
     render() {
         return (<RootStack/>);

     }


}


