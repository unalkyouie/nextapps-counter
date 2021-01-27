import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { decrement, increment } from '../reducers/counterReducer';
import { AppDispatch } from '../store';

interface ButtonProps {
  type: 'increment' | 'decrement';
  disabled?: boolean;
}

const Button = ({ type, disabled }: ButtonProps) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={disabled}
        onPress={() => {
          type === 'increment' ? dispatch(increment()) : dispatch(decrement());
        }}
        style={styles.button}>
        <Text style={styles.text}>{type === 'increment' ? '+' : '-'}</Text>
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
