import Greet from './components/Greet';
import { View, Text, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert, styleSheet, StyleSheet } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>

      <Greet childers="HI -1" style={{ backgroundColor: 'indigo', alignSelf: 'flex-start' }} />
      <Greet childers="HI -2" style={{ backgroundColor: 'black', alignSelf: 'center' }} />
      <Greet childers="HI -3" style={{ backgroundColor: 'teal', alignSelf: 'flex-end' }} />
      <Greet childers="HI -4" style={{ backgroundColor: 'tomato', alignSelf: 'auto' }} />
      <Greet childers="Hello" style={{ backgroundColor: 'yellow' }} />
      <Greet childers="Hello" style={{ backgroundColor: 'pink' }} />
      <Greet childers="Hello" style={{ backgroundColor: 'purple' }} />
      <Greet childers="Hello" style={{ backgroundColor: 'lightblue' }} />
      <Greet childers="Hello" style={{ backgroundColor: 'lightgreen' }} />
      <Greet childers="Hello" style={{ backgroundColor: 'lightcoral' }} />


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'plum',
    marginTop: 40,
    marginBottom: 40,
    borderWidth: 5,
    borderColor: 'green',
  }
});
