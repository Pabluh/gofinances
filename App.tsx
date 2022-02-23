import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { Welcome } from './src/Components/Welcome';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#fff" />
      <Welcome title="React Native Bare Workflow com Typescript" />
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
