import {  View ,Text,Image, ImageBackground,ScrollView,Button , Pressable, Modal,StatusBar,ActivityIndicator,Alert,styleSheet, StyleSheet} from 'react-native';
export default function App() {

  return (
<View style={styles.container}>
<Text style={styles.title}>Api Style</Text>
</View>
  );
}

const styles=StyleSheet.create({

container:{ flex:1, backgroundColor:"plum",  padding:60},
title:{ fontSize: 24, fontWeight: 'bold', textAlign: 'center' , color:"lightblue",marginTop:40},
});
