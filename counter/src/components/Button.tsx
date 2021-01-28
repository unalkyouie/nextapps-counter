import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import { usePressAndHold } from '../hooks/usePressAndHold';
import { decrement, increment } from '../reducers/counterReducer';
import { AppDispatch } from '../store';

interface ButtonProps {
  type: 'increment' | 'decrement';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ type, disabled }) => {
  const dispatch = useDispatch<AppDispatch>();

  const changeValue = () => {
    type === 'increment' ? dispatch(increment()) : dispatch(decrement());
  };
  const onButtonHold = usePressAndHold(changeValue, 500, 100);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={disabled}
        onPress={changeValue}
        {...onButtonHold}
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
