import Greet from './components/Greet';
import { View, Text, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert, styleSheet, StyleSheet } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>

      <Greet childers="HI -1" style={{ backgroundColor: 'indigo' }} />
      <Greet childers="HI -2" style={{ backgroundColor: 'black' }} />
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
    // flex: 1,
    height: 300,
    flexWrap: "wrap",
    rowGap: 20,
    columnGap: 20,
    // gap: 20,
    backgroundColor: 'plum',
    marginTop: 40,
    marginBottom: 40,
    borderWidth: 5,
    borderColor: 'gray',
  }
});
