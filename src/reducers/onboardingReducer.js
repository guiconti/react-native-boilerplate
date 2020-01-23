import { CHANGE_PAGE } from '../types/onboarding';
import objectAssign from 'object-assign';
import initialState from './initialState';

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function onboardingReducer(state = initialState.onboarding, action) {
  switch (action.type) {
    case CHANGE_PAGE:
      return objectAssign({}, state, { page: action.value });

    default:
      return state;
  }
}
