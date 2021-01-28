import React from 'react';
import { render } from '@testing-library/react-native';

import Button from '../src/components/Button';

describe('<Button/>', () => {
  it('should render - if type is increment', () => {
    const decrement = jest.fn();
    const { getByText } = render(
      <Button type={'decrement'} onPress={decrement} />,
    );
    const decrementButton = getByText('-');
    expect(decrementButton).toBeTruthy();
  });
  it('should render + if type is increment', () => {
    const increment = jest.fn();
    const { getByText } = render(
      <Button type={'increment'} onPress={increment} />,
    );
    const incrementButton = getByText('+');
    expect(incrementButton).toBeTruthy();
  });
});
