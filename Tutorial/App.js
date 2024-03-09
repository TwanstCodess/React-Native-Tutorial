import { StatusBar } from 'expo-status-bar';
import {  View ,Text,Image, ImageBackground,ScrollView,Button} from 'react-native';
const Imagest=require("./assets/favicon.png");

export default function App() {
  return (
<View style={{flex:1,backgroundColor:"plum",padding:30,paddingTop:100}}>
<Button title="Click me"
 onPress={()=>alert('Button Click')} 
 color={"midnightblue"}
 disabled={false}
 
/>
</View>
  );
}

