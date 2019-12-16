import { FOO_EXAMPLE, FOO_ANOTHER_EXAMPLE } from '../types/foo';
import { example, anotherExample } from '../actions/fooActions';

const state = {
  example: '',
  anotherExample: '',
};

describe('Foo Actions', () => {
  beforeAll(() => {});
  afterAll(() => {});

  it('should use dispatch to send example object', async () => {
    const dispatch = jest.fn();
    const expected = {
      type: FOO_EXAMPLE,
      example: 'Example retrieved',
    };

    // we expect this to return a function since it is a thunk
    expect(typeof (example)).toEqual('function');
    // then we simulate calling it with dispatch as the store would do
    await example(state)(dispatch);
    // finally assert that the dispatch was called with our expected action
    expect(dispatch).toBeCalledWith(expected);
  });

  it('should return defined object on another example call', () => {
    const expected =  {
      type: FOO_ANOTHER_EXAMPLE,
      fieldName: 'anotherExample',
      value: 10
    };
    const actual = anotherExample(expected.fieldName, expected.value);

    expect(actual).toEqual(expected);
  });
});
