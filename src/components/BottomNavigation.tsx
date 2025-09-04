import { useNavigation } from '@react-navigation/native'
import React, { use } from 'react'
import { StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
// import Coffeicon from '../../assets/'
const BottomNavigation = () => {
  const btns = ['home', 'search', 'cart', 'user']
  const navigation = useNavigation()
  return (
    <View style={styles.main}>
      {btns.map((btn) => (
        <TouchableOpacity
          onPress={()=>navigation.navigate(btn as never)}
         key={btn} style={styles.button}>
          <Text style={styles.icon}>{btn}</Text>
        </TouchableOpacity>
      ))}

      {/* <Coffeicon width={50} height={50} fill="#D17842" /> */}
    </View>
  )
}

export default BottomNavigation;

const styles = StyleSheet.create({
  main: {
    width: '100%',
    height: 80,
    backgroundColor: 'lightpink',
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
  },
  button: {
    backgroundColor: "red"
  },
  icon:{
    color: 'white'
  },
  activeIcon:{
    color: 'orange'
  }
})