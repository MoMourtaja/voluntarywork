import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <Text>Open up App.js to start working on your app! test test text addedd from mo</Text>
    <Text>Hello it's me</Text>

      <Text>Open up App.js to start working on your app! test test </Text>
      <Text>hello world
        what else ?
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
