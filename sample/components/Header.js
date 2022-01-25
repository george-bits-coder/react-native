import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function Header(){

return(
  <View style={styles.container}>

        <Text style={styles.text}>Hello</Text>

  </View>
)

}

const styles = StyleSheet.create({
  container: {
    height:30,
    backgroundColor:"teal",
    padding:4,
    textAlign:'center',
    textColor:'white'
  },

  text:{
    color:'white'
  }

});