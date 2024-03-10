import { View, Text, StyleSheet } from 'react-native';

export default function Greet({ childers, style }) {
  return (
    <View style={[styles.Box, style]}>
      <Text style={styles.Texts}>{childers}</Text>

    </View>
  );
}

const styles = StyleSheet.create({
  Box: {
    backgroundColor: "#fff",
    padding: 20,
  },
  Texts: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    textAlign: "center"
  },
});