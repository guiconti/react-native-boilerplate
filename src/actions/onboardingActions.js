import { CHANGE_PAGE } from '../types/onboarding';
import { retrieveFunds } from '../services/onboardingServices';

// example of a thunk using the redux-thunk middleware
export function getFunds() {
  //  async example
  return async function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the data using an API
    return dispatch({
      type: CHANGE_PAGE,
      // value: 13.37,
      value: await retrieveFunds(),
    });
  };
}

export function changePage(value) {
  return {
    type: CHANGE_PAGE,
    value,
  };
}
