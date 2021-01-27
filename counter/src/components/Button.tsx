import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { increment } from '../reducers/counterReducer';
import { AppDispatch } from '../store';

const Button = () => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => {
          dispatch(increment());
        }}
        style={styles.button}>
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
