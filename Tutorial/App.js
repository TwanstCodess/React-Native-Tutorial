import React from 'react';
import { View, StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import data from './data/list.json';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView horizontal={true} contentContainerStyle={styles.scrollContainer}>
        {data.map((item) => (
          <View style={styles.card} key={item.id}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        ))}
      </ScrollView>
      <ScrollView contentContainerStyle={styles.scrollContainers}>
        {data.map((item) => (
          <View style={styles.cards} key={item.id}>
            <Text style={styles.title}>{item.title}</Text>
            <Text style={styles.description}>{item.description}</Text>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'teal',
  },
  scrollContainer: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollContainers: {
    paddingVertical: 10,
    paddingHorizontal: 10,
    flexDirection: 'column',
    alignItems: 'center',
  },
  card: {
    backgroundColor: 'white',
    padding: 20,
    marginHorizontal: 10,
    borderRadius: 15,
    shadowColor: '#000',

  },
  cards: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 10,
    borderRadius: 15,
    shadowColor: '#000',

  },

});
