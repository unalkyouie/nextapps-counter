import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../components/Button';
import { AppState } from '../reducers';
import { decrement, increment } from '../reducers/counterReducer';
import { AppDispatch } from '../store';

const { height } = Dimensions.get('window');

const Main = () => {
  const dispatch = useDispatch<AppDispatch>();
  const counterValue = useSelector<AppState, number>(
    (state) => state.counter.counter,
  );

  return (
    <View style={styles.container}>
      <View style={styles.counterWrapper}>
        <Text style={styles.counterText}>COUNTER</Text>
        <Text style={styles.counterText}>{counterValue}</Text>
        <View style={styles.buttonsWrapper}>
          <Button
            type="decrement"
            disabled={counterValue <= 0 ? true : false}
            onPress={() => dispatch(decrement())}
          />
          <Button
            type="increment"
            disabled={counterValue >= 100 ? true : false}
            onPress={() => dispatch(increment())}
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
