import { View, Text, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert, styleSheet, StyleSheet } from 'react-native';
export default function App() {

  return (
    <View style={styles.container}>


      <View style={[styles.lightBlue, styles.Box]}>
        <Text style={styles.Title}>Hello World Im Twanst </Text>
      </View>

      <View style={[styles.lightgreen, styles.Box]}>
        <Text style={styles.Title}>Hello World Im Twanst </Text>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({

  container: { flex: 1, backgroundColor: "plum", padding: 60 },
  Box: {
    height: 100,
    width: 100,
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginVertical: 10,
    borderWidth: 2,
    borderColor: "black",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",

  },
  lightBlue: {
    backgroundColor: "lightblue",

  },
  lightgreen: {
    backgroundColor: "lightgreen",
  },
  Title: {
    fontFamily: "sans-serif",
    fontSize: 12,
    color: "white",
    backgroundColor: "black",

  },
});
