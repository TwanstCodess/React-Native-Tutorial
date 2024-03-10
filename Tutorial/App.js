import Greet from './components/Greet';
import { View, Text, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert, styleSheet, StyleSheet } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>

      <Greet childers="Hello" style={{ backgroundColor: 'red' }} />
      <Greet childers="Hello" style={{ backgroundColor: 'black' }} />
      <Greet childers="Hello" style={{ backgroundColor: 'teal' }} />
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
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
