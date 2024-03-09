import { useState } from 'react';
import {  View ,Text,Image, ImageBackground,ScrollView,Button , Pressable, Modal,StatusBar,ActivityIndicator,Alert} from 'react-native';
const Imagest=require("./assets/favicon.png");

export default function App() {
  const [ISmodalVisible, setIsModalVisible] =useState(false);
  return (
<View style={{flex:1,backgroundColor:"plum",padding:60}}>
<Button title='Click Me ' onPress={() => Alert.alert('Button Clicked','Hello',[
  {
    text: 'Cancel',
    onPress: () => console.log('Cancel Pressed'),
    style: 'cancel',
  },
  {
    text: 'OK',
    onPress: () => console.log('OK Pressed'),
  },
])} />
</View>
  );
}

