import { StatusBar } from 'expo-status-bar';
import {  View } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1,backgroundColor:"plum"}}>

    <View style={{width:200,height:200,backgroundColor:"red"}}></View>
    <View style={{width:200,height:200,backgroundColor:"green"}}></View>
    <View style={{width:200,height:200,backgroundColor:"yellow"}}></View>
    <View style={{width:200,height:200,backgroundColor:"teal"}}></View>
    </View>
  );
}

