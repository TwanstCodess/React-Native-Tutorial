import { useState } from 'react';
import {  View ,Text,Image, ImageBackground,ScrollView,Button , Pressable, Modal,StatusBar,ActivityIndicator,Alert} from 'react-native';
import Greet from './components/Greet';
const Imagest=require("./assets/favicon.png");

export default function App() {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
<View style={{flex:1,backgroundColor:"plum",padding:60}}>
<Greet name="Twanst Codes" age="12"/> 
<Button title='Twanst' onPress={toggleModal} />
<ActivityIndicator size={"large"} color="red" animating={isModalVisible} />

</View>
  );
}

