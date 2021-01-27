import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const Button = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.text}>+</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 20,
  },
  button: {
    margin: 20,
    padding: 20,
  },
  text: {
    fontSize: 72,
    textAlign: 'center',
  },
});

export default Button;
