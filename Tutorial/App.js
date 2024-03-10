import Greet from './components/Greet';
import { View, Text, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert, styleSheet, StyleSheet } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>

      <Greet childers="HI -1" style={{ backgroundColor: 'indigo' }} />
      <Greet childers="HI -2" style={{ backgroundColor: 'black', flexGrow: 2 }} />
      <Greet childers="HI -3" style={{ backgroundColor: 'teal' }} />
      <Greet childers="HI -4" style={{ backgroundColor: 'tomato' }} />
      <Greet childers="HI-5" style={{ backgroundColor: 'yellow' }} />
      <Greet childers="HI-6" style={{ backgroundColor: 'pink' }} />
      <Greet childers="HI-7" style={{ backgroundColor: 'purple' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    marginTop: 40,
    borderWidth: 5,
    borderColor: 'gray',
  }
});
