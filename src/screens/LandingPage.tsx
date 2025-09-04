import React from 'react';
import { ImageBackground, StyleSheet, View, Text, ScrollView } from 'react-native';
import Header from '../components/Header';
import Filters from '../components/Filters';
import ScrollRow from '../components/ScrollRow';

export default function StartupScreen() {
  return (
    <View
      style={styles.background}
    >
      <Header
        showSearchbar={true}
      />
      <Filters />
      <ScrollView style={styles.productContainer}>
        <ScrollRow />
        <ScrollRow />
      </ScrollView>
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
    display: 'flex',
    flexDirection: 'row',
    marginTop: 10,
    gap: 30,
    paddingHorizontal: 30,
    width: "100%",
  },
  productContainer: {
    width: '85%',
    paddingVertical: 5,
  }

});
