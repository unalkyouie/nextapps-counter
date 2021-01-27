import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { useSelector } from 'react-redux';

import Button from '../components/Button';
import { AppState } from '../reducers';

const { height } = Dimensions.get('window');

const Main = () => {
  const counterValue = useSelector<AppState, number>((state) => state.counter);

  return (
    <View style={styles.container}>
      <View style={styles.counterWrapper}>
        <Text style={styles.counterText}>{counterValue}</Text>
        <View style={styles.buttonsWrapper}>
          <Button
            type="decrement"
            disabled={counterValue <= 0 ? true : false}
          />
          <Button
            type="increment"
            disabled={counterValue >= 100 ? true : false}
          />
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
