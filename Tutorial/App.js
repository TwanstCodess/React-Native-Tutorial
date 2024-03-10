import React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Welcome To Tutorial</Text>
      </View>
    </View>
  );
};

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: windowWidth > 500 ? "70%" : "90%", // Remove percent symbols
    height: windowHeight > 600 ? "60%" : "90%", // Remove percent symbols
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: windowHeight > 500 ? 50 : 24,
  },
});
