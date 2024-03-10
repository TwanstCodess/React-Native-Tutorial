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
      <Greet childers="HI-8" style={{ backgroundColor: 'lightblue' }} />
      <Greet childers="HI-9" style={{ backgroundColor: 'lightgreen' }} />
      <Greet childers="HI-10" style={{ backgroundColor: 'blue' }} />
      <Greet childers="HI-11" style={{ backgroundColor: 'green' }} />
      <Greet childers="HI-12" style={{ backgroundColor: 'goldenrod' }} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap-reverse',
    height: "100%",
    backgroundColor: 'plum',
    marginTop: 40,
    marginBottom: 40,
    borderWidth: 5,
    borderColor: 'gray',
  }
});
