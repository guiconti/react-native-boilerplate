
import { FUNDS } from '../types/wallet';
import { getFunds } from '../actions/walletActions';

const state = {
  value: 0,
};

describe('Wallet Actions', () => {
  beforeAll(() => {});
  afterAll(() => {});

  it('should use dispatch to retrieve funds', async () => {
    const dispatch = jest.fn();
    const expected = {
      type: FUNDS,
      value: 13.37,
    };

    // we expect this to return a function since it is a thunk
    expect(typeof (getFunds)).toEqual('function');
    // then we simulate calling it with dispatch as the store would do
    await getFunds(state)(dispatch);
    // finally assert that the dispatch was called with our expected action
    expect(dispatch).toBeCalledWith(expected);
  });
});
