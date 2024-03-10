import Greet from './components/Greet';
import { View, Text, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert, styleSheet, StyleSheet } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>

      <Greet childers="HI -1" style={{ backgroundColor: 'indigo', paddingVertical: 100 }} />
      <Greet childers="HI -2" style={{ backgroundColor: 'black' }} />
      <Greet childers="HI -3" style={{ backgroundColor: 'teal' }} />
      {/* <Greet childers="HI -4" style={{ backgroundColor: 'tomato' }} />
      <Greet childers="Hello" style={{ backgroundColor: 'yellow' }} />
      <Greet childers="Hello" style={{ backgroundColor: 'pink' }} />
      <Greet childers="Hello" style={{ backgroundColor: 'purple' }} />
      <Greet childers="Hello" style={{ backgroundColor: 'lightblue' }} />
      <Greet childers="Hello" style={{ backgroundColor: 'lightgreen' }} />
      <Greet childers="Hello" style={{ backgroundColor: 'lightcoral' }} /> */}


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'baseline',
    backgroundColor: 'plum',
    marginTop: 40,
    marginBottom: 40,
    borderWidth: 5,
    borderColor: 'green',
  }
});
