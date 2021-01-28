import { AnyAction, Store } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';

import { AppState } from '../src/reducers';

const MockProviders: React.FC<{
  store: Store<AppState, AnyAction> & {
    dispatch: unknown;
  };
}> = ({ children, store }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default MockProviders;
