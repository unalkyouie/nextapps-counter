import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import { usePressAndHold } from '../hooks/usePressAndHold';

interface ButtonProps {
  type: 'increment' | 'decrement';
  disabled?: boolean;
  onPress: () => void;
}

const Button: React.FC<ButtonProps> = ({ type, disabled, onPress }) => {
  const onButtonHold = usePressAndHold(onPress, 500, 100);

  return (
    <View style={styles.container}>
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        {...onButtonHold}
        style={[styles.button, disabled && styles.disabled]}>
        <Text style={[styles.text, disabled && styles.disabledText]}>
          {type === 'increment' ? '+' : '-'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#D5E4C3',
    borderRadius: 50,
    height: 75,
    width: 75,
  },
  text: {
    color: '#C6C9D0',
    fontSize: 50,
    fontWeight: 'bold',
    padding: 20,
    textAlign: 'center',
  },
  disabled: {
    backgroundColor: '#C47482',
    opacity: 0.8,
  },
  disabledText: {
    color: '#D5E4C3',
  },
});

export default Button;
