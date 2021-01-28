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
