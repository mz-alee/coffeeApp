import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, ImageBackground, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const StartupScreen = () => {

  const navigation = useNavigation();

  const handleStart = () => {
    navigation.navigate('Landing');
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../assets/bg1.jpeg')}
        style={styles.image}
        resizeMode="cover"
      />
      <Text style={styles.title}>Fall in Love with Coffee in Blissful Delight!</Text>
      <Text style={styles.subtitle}>
        Welcome to our cozy coffee corner, where every cup is a delightful for you...........
      </Text>
      <TouchableOpacity style={styles.button} onPress={()=>{
        handleStart()
      }}>
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: '#000',
    padding: 20,
  },
  image: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    opacity: 0.7,
    objectFit: 'cover'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 14,
    color: '#ccc',
    marginBottom: 30,
    fontStyle: "italic",
  },
  button: {
    backgroundColor: '#C88A50',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default StartupScreen;
