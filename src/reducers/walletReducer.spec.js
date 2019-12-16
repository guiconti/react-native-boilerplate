import { FUNDS } from '../types/wallet';
import reducer from './walletReducer';
import initialState from './initialState';

describe('Reducers Wallet', () => {
  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = initialState.wallet;

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle FUNDS', () => {
    const action = { type: FUNDS, value: 40.01 };
    const expectedFunds = 40.01;

    expect(reducer(initialState.wallet, action).funds).toEqual(expectedFunds);
  });

});
