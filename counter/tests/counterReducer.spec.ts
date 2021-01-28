import reducer, {
  CounterState,
  decrement,
  increment,
} from '../src/reducers/counterReducer';

const initialState: CounterState = {
  counter: 0,
};
describe('counterReducer', () => {
  it('increment and decrement actions should change state by 1', () => {
    const plus = increment();
    const minus = decrement();
    const newState = reducer(initialState, plus);
    expect(newState.counter).toBe(initialState.counter + 1);
    const newerState = reducer(newState, minus);
    expect(newerState.counter).toBe(newState.counter - 1);
  });
  it('should return the same state if action is out of range', () => {
    const minus = decrement();
    const plus = increment();
    const newState = reducer(initialState, minus);
    expect(newState.counter).toBe(initialState.counter);
    const maxState: CounterState = {
      counter: 100,
    };
    const newerState = reducer(maxState, plus);
    expect(newerState.counter).toBe(maxState.counter);
  });
});
