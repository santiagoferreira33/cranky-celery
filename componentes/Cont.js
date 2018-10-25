import * as React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Button, ScrollView } from 'react-native';
import { Constants } from 'expo';
import { createStackNavigator } from 'react-navigation';

export default class Cont extends React.Component {

constructor(){

  super();
  this.state = {
        contador: [0],
        disabled: false,
        valueArray: [],
    
    
  };
   this.index = 0;
}


addMore = () =>
    {
        let newlyAddedValue = { index: this.index }

        this.setState({ disabled: true, valueArray: [ ...this.state.valueArray, newlyAddedValue ] }, () =>
        {
                this.index = this.index + 1;
                this.setState({ disabled: false });
          
        });              
    }

removeItem = (e) => {
 
 var array = [...this.state.valueArray]; // make a separate copy of the array
  var indexx = array.indexOf(e.target.value)
  array.splice(indexx, 1);
  this.setState({valueArray: array});
 
}

decrementar = () =>{
  
  this.setState({
       contador: this.state.contador - 1,

  });
}

incrementar = () =>{



 this.setState({
   contador: this.state.contador + 1,

  });
}

  render() {

     let newArray = this.state.valueArray.map(( item, key ) =>
        { 

                return(
                <View key={key}> 
                  <View style={styles.buttonsContainer2}>
                    <TouchableOpacity style={styles.buttonAdd} 
                       onPress={this.incrementar()}>
                       <Text>+</Text>
                    </TouchableOpacity>
                       <Text style={styles.contador}>{this.state.contador[key]}</Text> 
                    <TouchableOpacity style={styles.buttonRemove}
                       onPress={this.decrementar()} >
                       <Text>-</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                );
            
        });
    return (
      <View style={styles.container}>


      <View style={styles.buttonsContainer}>
          <TouchableOpacity style={styles.buttonAdd} onPress = { this.addMore }
          >
            <Text >+</Text>
          </TouchableOpacity>
         
          <TouchableOpacity style={styles.buttonRemove} onPress = { this.removeItem }
          >
            <Text>-</Text>
          </TouchableOpacity>   
      </View>
      
       <View style = { styles.container }>
                <ScrollView>
                    <View style = {{ flex: 1, padding: 4 }}>
                    {
                        newArray
                    }
                    </View>
                </ScrollView>
 </View>
     
    <View>
         
           <Text style={styles.contador}>{this.state.contador}</Text> 
            
            
         <TouchableOpacity style={{height:50 , backgroundColor: '#FAEBD7', alignItems:'center'}}
         onPress = { () => {this.props.navigation.navigate('Home', {

           enviocontador: this.state.contador,
         }); 
         }}
         >
         <Text style={{fontSize: 40}}> Guardar </Text>
         </TouchableOpacity>
         
           
      </View>

      </View> 
    );
  }
}

const styles = StyleSheet.create({
  
    buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
   container: {
      flex:1,
       flexDirection: 'column',
       justifyContent: 'space-between',
     
   },

buttonsContainer2: {
  margin:10,
    backgroundColor: '#DEB887',
    flexDirection: 'row',
   justifyContent: 'space-between',
  },
  buttonAdd: {
    backgroundColor: 'skyblue',
    marginTop: 15,
    marginBottom: 15,
    paddingVertical: 25,
    paddingHorizontal: 35,
  },

  buttonRemove: {
    marginTop: 15,
    backgroundColor: '#CD5C5C',
    marginBottom: 15,
    paddingVertical: 25,
    paddingHorizontal: 35,
  },
  contador: {
      fontSize:50,
      marginTop:15,
  },
 
});
