import { useState } from 'react';
import {  View ,Text,Image, ImageBackground,ScrollView,Button , Pressable, Modal,StatusBar,ActivityIndicator} from 'react-native';
const Imagest=require("./assets/favicon.png");

export default function App() {
  const [ISmodalVisible, setIsModalVisible] =useState(false);
  return (
<View style={{flex:1,backgroundColor:"plum",padding:60}}>
<ActivityIndicator 
size="large"
color="blue"
animating={true}
/>
</View>
  );
}

