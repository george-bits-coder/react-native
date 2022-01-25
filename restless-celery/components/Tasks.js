import React from 'react';
import {View,Text,StyleSheet,TouchableOpacity} from 'react-native';

const Task=(props)=>{

  return(
    <View style={styles.item}>
      <View style={styles.itemsleft}>
              <TouchableOpacity style={styles.square}></TouchableOpacity>
              <Text style={styles.text}> This is {props.text}</Text>
      </View>
      

      <View style={styles.circle}></View>
    </View>
  )
}


const styles=StyleSheet.create({

item:{
backgroundColor:'#fff',
padding:15,
borderRadius:10,
marginBottom:20,
flexDirection:"row",
alignItems:"center",
justifyContent:"space-between"
},
itemsleft:{
  flexDirection:"row",
  alignItems:"center",
  flexWrap:"wrap"
},
square:{
  width:24,
  height:24,
  backgroundColor:"royalblue",
  opacity:0.7,
  borderRadius:5,
  marginRight:15
},
text:{
  maxWidth:"82%"
},
circle:{
  width:12,
  height:12,
  borderColor:"navy",
  borderWidth:2,
  borderRadius:3
}
})

export default Task;