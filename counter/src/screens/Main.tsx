import React, { useState } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const { height } = Dimensions.get('window');

const Main = () => {
  const [counterValue, setCounterValue] = useState(0);

  const increment = () => {
    setCounterValue(counterValue + 1);
  };
  const decrement = () => {
    setCounterValue(counterValue - 1);
  };

  return (
    <View style={styles.container}>
      <View style={styles.counterWrapper}>
        <Text style={styles.counterText}>{counterValue}</Text>
        <View style={styles.buttonsWrapper}>
          <TouchableOpacity onPress={decrement} style={styles.button}>
            <Text style={styles.counterText}>-</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={increment} style={styles.button}>
            <Text style={styles.counterText}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    margin: 20,
    padding: 20,
  },
  buttonsWrapper: {
    flexDirection: 'row',
  },
  container: {
    alignItems: 'center',
    backgroundColor: 'cyan',
    height,
    justifyContent: 'center',
  },
  counterWrapper: {
    padding: 50,
  },
  counterText: {
    fontSize: 72,
    textAlign: 'center',
  },
});

export default Main;
