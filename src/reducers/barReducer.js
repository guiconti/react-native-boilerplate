import { BAR_EXAMPLE, BAR_ANOTHER_EXAMPLE } from '../types/bar';
import objectAssign from 'object-assign';
import initialState from './initialState';

export default function barReducer(state = initialState.bar, action) {
  let newState;

  switch (action.type) {
    case BAR_EXAMPLE:
      return objectAssign({}, state, { example: action.payload });

    case BAR_ANOTHER_EXAMPLE:
      newState = objectAssign({}, state);
      newState[action.payload.fieldName] = action.payload.value;

      return newState;

    default:
      return state;
  }
}
