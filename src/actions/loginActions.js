import { LOGIN, KEYBOARD, CPF } from '../types/login';
import { retrieveFunds } from '../services/loginServices';

// example of a thunk using the redux-thunk middleware
export function getFunds() {
  //  async example
  return async function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the data using an API
    return dispatch({
      type: LOGIN,
      // value: 13.37,
      value: await retrieveFunds(),
    });
  };
}

export function changeCPF(value) {
  return {
    type: CPF,
    value,
  };
}

export function toggleKeyboard(value) {
  return {
    type: KEYBOARD,
    value,
  };
}
