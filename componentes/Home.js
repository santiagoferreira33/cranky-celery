import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import { createStackNavigator } from 'react-navigation';
export default class Home extends React.Component {
  render() {
    const { navigation } = this.props;
    const conta = navigation.getParam('enviocontador', 'Aun no hay totales cargados');
   return (
   <View style={styles.container}>
     
         <Text style={{ fontSize:40, marginLeft:120}}> Totales </Text>
         <Text style={{ fontSize:25, marginLeft:100, marginTop:-300}}>{JSON.stringify(conta)}</Text>
     <TouchableOpacity style={{height:50 , backgroundColor: '#FAEBD7', alignItems:'center'}}
     onPress = { () => this.props.navigation.navigate('Cont') }>
             <Text style={{fontSize: 30}}>Agregar</Text>
     </TouchableOpacity>
      
    
    </View>
    );
  }
}


const styles = StyleSheet.create({
   container: {
      flex:1,
       flexDirection: 'column',
       justifyContent: 'space-between',
     
   },

});