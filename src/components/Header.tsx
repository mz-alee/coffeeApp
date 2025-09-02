import React from 'react'
import { StyleSheet } from 'react-native'
import { Text, View } from 'react-native'
import Searchbar from './Searchbar'

const Header = () => {
  return (
    <View style={styles.main}>
      <View style={styles.inner}>
        <View style={styles.menuButton}>
        </View>
        <View style={styles.profile}>
        </View>
      </View>
        <Text style={styles.title}>
          Find the best coffee for you
        </Text>
        <View style={styles.searchContainer}>
        <Searchbar/>
        </View>
    </View>
  )
}

export default Header


const styles = StyleSheet.create({
  main: {
    // backgroundColor: '#171b21',
    // borderBottomWidth: 1,
    // borderBottomColor: '#252A32',
    height: 270,
    display: 'flex',
    flexDirection: 'column',
    
  },
  title:{
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'left',
    marginLeft: 30,
    marginTop: 20,
    width: "230",
  },
  inner: {
    width: "100%",
    marginTop: 40,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 30,
    paddingRight: 30,
    padding: 10,
    paddingHorizontal: 10,
    color: 'white'
  },
  menuButton: {
    width: 35,
    height: 35,
    backgroundColor: '#171b21',
    borderWidth: 1,
    borderColor: '#252A32',
    borderRadius: 8,
    padding: 5,
  },
  profile: {
    width: 35,
    height: 35,
    backgroundColor: '#171b21',
    borderWidth: 1,
    borderColor: '#252A32',
    borderRadius: 8,
    padding: 5,
  },
  searchContainer: {
    marginTop: 10,
    display:'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding:3,
  }
})