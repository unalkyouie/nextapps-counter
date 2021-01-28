import React from 'react';
import { render } from '@testing-library/react-native';
import App from '../src/App';

describe('<App/>', () => {
  it('should render Main component', () => {
    const { getByText } = render(<App />);
    const mainScreen = getByText('COUNTER');
    expect(mainScreen).toBeTruthy();
  });
});
