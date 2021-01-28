import { configureStore } from '@reduxjs/toolkit';
import { fireEvent, render, waitFor } from '@testing-library/react-native';
import React from 'react';

import reducers from '../src/reducers';
import Main from '../src/screens/Main';
import MockProviders from './MockProvider';

describe('<Main/>', () => {
  it('should render increment and decrement buttons', () => {
    const store = configureStore({ reducer: reducers });
    const { getByText } = render(
      <MockProviders store={store}>
        <Main />
      </MockProviders>,
    );
    const incrementButton = getByText('+');
    const decrementButton = getByText('-');
    expect(incrementButton).toBeTruthy();
    expect(decrementButton).toBeTruthy();
  });
  it('should change counterValue by one on press any button', async () => {
    const store = configureStore({ reducer: reducers });
    const { getByText } = render(
      <MockProviders store={store}>
        <Main />
      </MockProviders>,
    );
    const counterValue = getByText('0');
    expect(counterValue).toBeTruthy();
    const incrementButton = getByText('+');
    const decrementButton = getByText('-');
    fireEvent.press(incrementButton);
    await waitFor(() => {
      const counterValueAfterIncrement = getByText('1');
      expect(counterValueAfterIncrement).toBeTruthy();
    });
    fireEvent.press(decrementButton);
    await waitFor(() => {
      const counterValueAfterDecrement = getByText('0');
      expect(counterValueAfterDecrement).toBeTruthy();
    });
  });
});
