import { BAR_EXAMPLE, BAR_ANOTHER_EXAMPLE } from '../types/bar';
import { retrieveExample } from '../services/barServices';

// example of a thunk using the redux-thunk middleware
export function example(value) {
  //  async example
  return async function (dispatch) {
    // thunks allow for pre-processing actions, calling apis, and dispatching multiple actions
    // in this case at this point we could call a service that would persist the data using an API
    return dispatch({
      type: BAR_EXAMPLE,
      example: await retrieveExample(value),
    });
  };
}

export function anotherExample(fieldName, value) {
  return {
    type: BAR_ANOTHER_EXAMPLE,
    fieldName,
    value,
  };
}
