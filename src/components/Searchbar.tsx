import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

const Searchbar = () => {
  return (
    <View style={styles.searchContainer}>
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
  }
})