import { createSlice } from '@reduxjs/toolkit';

interface CounterState {
  counter: number;
}

const initialState: CounterState = {
  counter: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: (state) => {
      state.counter < 100 && (state.counter = state.counter + 1);
    },
    decrement: (state) => {
      state.counter > 0 && (state.counter = state.counter - 1);
    },
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
