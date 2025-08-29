import React from 'react';
import { ImageBackground, StyleSheet, View, Text } from 'react-native';
import Header from '../components/Header';
import Items from '../components/Items';
import Searchbar from '../components/Searchbar';

export default function StartupScreen() {
  return (
    <View
      style={styles.background}
    >
      <Header />
      <Searchbar />
      <Items />
      <View style={styles.overlay}>
        <Text style={styles.text}>Welcome to the Caféee ☕</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#0C0F14',
    // justifyContent: 'center',
    paddingTop: 20,
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 50,
    borderRadius: 10,
  },
  text: {
    fontSize: 20,
    color: '#fff',
  },
});
