import {  View ,Text,Image, ImageBackground,ScrollView,Button , Pressable, Modal,StatusBar,ActivityIndicator,Alert,styleSheet, StyleSheet} from 'react-native';
export default function App() {

  return (
<View style={styles.container}>


<View style={[styles.lightBlue,styles.Box]}>
<Text>Hello World Im Twanst </Text>
</View>

<View style={[styles.lightgreen,styles.Box]}>
<Text>Hello World Im Twanst </Text>
</View>


</View>
  );
}

const styles=StyleSheet.create({

container:{ flex:1, backgroundColor:"plum",  padding:60},
Box:{
  height:100,
  width:100,
  padding:10, 
  marginTop:3,
  borderRadius:10,
},
lightBlue:{
 backgroundColor:"lightblue",

},
lightgreen:{
 backgroundColor:"lightgreen",
}
});
