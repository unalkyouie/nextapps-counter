import { combineReducers } from '@reduxjs/toolkit';

import counterReducer from './counterReducer';

const reducers = combineReducers({
  counter: counterReducer,
});

export type AppState = ReturnType<typeof reducers>;

export default reducers;
