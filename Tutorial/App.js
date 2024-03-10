import Greet from './components/Greet';
import { View, Text, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert, styleSheet, StyleSheet } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>

      <Greet childers="HI-1" style={{ backgroundColor: 'indigo', top: 440, left: 140 }} />
      <Greet childers="HI-1" style={{ backgroundColor: 'black' }} />
      <Greet childers="HI-1" style={{ backgroundColor: 'teal' }} />
      <Greet childers="HI-1" style={{ backgroundColor: 'tomato' }} />
      <Greet childers="HI-1" style={{ backgroundColor: 'yellow' }} />
      <Greet childers="HI-1" style={{ backgroundColor: 'pink', top: 110, left: 140, postion: 'absolute' }} />
      <Greet childers="HI-1" style={{ backgroundColor: 'purple' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    marginTop: 40,
    borderWidth: 5,
    borderColor: 'gray',
  }
});
