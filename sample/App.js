import * as React from 'react';
import { Text, View, StyleSheet,Image,Button,TextInput } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';
import Header from './components/Header'
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
    <Header/>
      <Text style={styles.paragraph}>
        George  fw12_042
        
      </Text>
      <Card>
      <TextInput/>
        <Image style={styles.abc}source={{uri:'https://i.postimg.cc/Z5zCttdT/todoapp.png'}} />
      </Card>
      <TextInput style={styles.inp}/>
      <button>This is a button</button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  inp:{
    height:30,
    borderColor:"blue",
    borderWidth:2,
    placeholder:"Add input here",
    color:"navy",
    padding:10
  },
  abc:{
    height:50
  }
});
