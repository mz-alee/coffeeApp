import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, View } from 'react-native'

const Header = () => {
  return (
    <View style={styles.main}>
      <Text>
        Header
      </Text>
    </View>
  )
}

export default Header


const styles = StyleSheet.create({
  main: {
    height: 100,
    width: "100%",
    backgroundColor: "lightblue",
    display: 'flex',
    // alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  }
})