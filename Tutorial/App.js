import { View, Text, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert, styleSheet, StyleSheet } from 'react-native';
export default function App() {

  return (
    <View style={styles.container}>

      <View style={styles.dark}>
        <Text style={styles.darkText}>Hello World
          <Text style={styles.darkTextBold}>Hello World
          </Text>

        </Text>
      </View>

      <View style={[styles.lightBlue, styles.Box, styles.BoxShadow]}>
        <Text style={styles.Title}>Hello World Im Twanst </Text>
      </View>

      <View style={[styles.lightgreen, styles.Box, styles.androitShadowd]}>
        <Text style={styles.Title}>Hello World Im Twanst </Text>
      </View>


    </View>
  );
}

const styles = StyleSheet.create({
  dark: {
    backgroundColor: "black",
    height: 30,
    justifyContent: "center",
    alignItems: "center",

  },
  darkText: {
    color: "white",
  },
  darkTextBold: {
    fontWeight: "bold"
  },
  container: { flex: 1, backgroundColor: "plum", padding: 60 },
  Box: {
    height: 250,
    width: 250,
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
  BoxShadow: {
    shadowColor: "#333333",
    shadowOffset: {
      width: 1,
      height: 3,
    },
    shadowOpacity: .6,
    shadowRadius: 10,

  },
  androitShadowd: {
    elevation: 20,
  }
});
