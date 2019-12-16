import { FOO_EXAMPLE, FOO_ANOTHER_EXAMPLE } from '../types/foo';
import reducer from './fooReducer';
import initialState from './initialState';

describe('Reducers Foo', () => {
  it('should set initial state by default', () => {
    const action = { type: 'unknown' };
    const expected = initialState.foo;

    expect(reducer(undefined, action)).toEqual(expected);
  });

  it('should handle FOO_EXAMPLE', () => {
    const action = { type: FOO_EXAMPLE, example: 'Test example' };
    const expected = Object.assign(initialState.foo, { example: action.example });

    expect(reducer(initialState.foo, action)).toEqual(expected);
  });

  it('should handle FOO_ANOTHER_EXAMPLE', () => {
    const action = { type: FOO_ANOTHER_EXAMPLE, fieldName: 'anotherExample', value: true };

    const expectedAnotherExample = true;

    expect(reducer(initialState.foo, action).anotherExample).toEqual(expectedAnotherExample);
  });
});
