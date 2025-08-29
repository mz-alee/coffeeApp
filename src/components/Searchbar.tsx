import React from 'react'
import { Image, StyleSheet, TextInput, View } from 'react-native'
import SearchIcon from '../assets/icons/clock.png';
const Searchbar = () => {
  return (
    <View style={styles.searchContainer}>
      <SearchIcon width={120} />
      <TextInput style={styles.searchField} />
    </View>
  )
}

export default Searchbar;

const styles = StyleSheet.create({
  searchContainer: {
    marginTop: 10,
    backgroundColor: '#252A32',
    borderRadius: 10,
    width: 310,
  },
  searchField: {
  },
  searchImage: {
    backgroundColor: "red",
    color: "blue"
  }
})