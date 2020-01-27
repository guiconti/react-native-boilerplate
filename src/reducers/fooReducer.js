import { FOO_EXAMPLE, FOO_ANOTHER_EXAMPLE } from '../types/foo';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function fooReducer(state = initialState.foo, action) {
  let newState;

  switch (action.type) {
    case FOO_EXAMPLE:
      return objectAssign({}, state, {example: action.payload});

    case FOO_ANOTHER_EXAMPLE:
      newState = objectAssign({}, state);
      newState[action.payload.fieldName] = action.payload.value;

      return newState;

    default:
      return state;
  }
}
