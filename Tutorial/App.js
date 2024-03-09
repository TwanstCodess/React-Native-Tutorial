import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import {  View ,Text,Image, ImageBackground,ScrollView,Button , Pressable, Modal} from 'react-native';
const Imagest=require("./assets/favicon.png");

export default function App() {
  const [ISmodalVisible, setIsModalVisible] =useState(false);
  return (
<View style={{flex:1,backgroundColor:"plum",padding:30,paddingTop:100}}>
<Button title="Click me"
 onPress={()=>setIsModalVisible()} 
 color={"midnightblue"}
 
/>



<Modal 
visible={ISmodalVisible}
onRequestClose={()=>setIsModalVisible(false)}
animationType='slide'
presentationStyle='pageSheet'
>
<View style={{flex:1,backgroundColor:"midnightblue",padding:30,paddingTop:100}}>
<Text style={{color:"white"}}>Hello World Im Twanst Developer</Text>
<Button title="X"
 onPress={()=>setIsModalVisible(false)} 
 color={"red"}
 
/>
</View>

</Modal>
</View>
  );
}

