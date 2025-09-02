import React from 'react';
import { ImageBackground, StyleSheet, View, Text, ScrollView } from 'react-native';
import Header from '../components/Header';
import Items from '../components/Items';
import Searchbar from '../components/Searchbar';
import Filters from '../components/Filters';
import ScrollRow from '../components/ScrollRow';

export default function StartupScreen() {
  return (
    <View
      style={styles.background}
    >
      <Header />
      <Filters />
      <ScrollRow />
      <ScrollRow />
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#0C0F14',
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
  scrollContainer: {
    borderStartColor: 'red',
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    gap: 30,
    paddingHorizontal: 30,
    width: "100%",
  }

});
