import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

import Button from '../components/Button';
import { AppState } from '../reducers';
import { decrement, increment } from '../reducers/counterReducer';
import { AppDispatch } from '../store';

const { height, width } = Dimensions.get('window');

const Main = () => {
  const dispatch = useDispatch<AppDispatch>();
  const counterValue = useSelector<AppState, number>(
    (state) => state.counter.counter,
  );

  return (
    <View style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>COUNTER</Text>
      </View>
      <View style={styles.counterWrapper}>
        <Button
          type="decrement"
          disabled={counterValue <= 0 ? true : false}
          onPress={() => dispatch(decrement())}
        />
        <View style={styles.counterTextWrapper}>
          <Text style={styles.counterText}>{counterValue}</Text>
        </View>
        <Button
          type="increment"
          disabled={counterValue >= 100 ? true : false}
          onPress={() => dispatch(increment())}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  counterWrapper: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingHorizontal: 0.1 * width,
    paddingVertical: 0.2 * height,
  },
  counterText: {
    color: '#C54B6C',
    fontSize: 72,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  counterTextWrapper: {
    width: 0.6 * width,
  },
  title: {
    color: '#C54B6C',
    fontSize: 50,
    fontWeight: 'bold',
  },
  titleWrapper: {
    alignItems: 'center',
    backgroundColor: '#C6C9D0',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    justifyContent: 'flex-end',
    padding: 0.1 * width,
    width,
  },
});

export default Main;
