import React from 'react';
import { View, StyleSheet, Text, SafeAreaView } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.SafyAreaContainer}>
      <View style={styles.container}>
        <View style={styles.box}>
          <Text style={styles.text}>Welcome To Tutorial</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  SafyAreaContainer: {
    flex: 1,
    backgroundColor: 'lightblue',
  },
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },

});
