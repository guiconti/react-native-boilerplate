import {
  FOO_FETCH_EXAMPLE,
  FOO_EXAMPLE,
  FOO_ANOTHER_EXAMPLE
} from '../types/foo';

export function fetchExample(payload) {
  return {
    type: FOO_FETCH_EXAMPLE,
    payload
  };
}

export function example(payload) {
  return {
    type: FOO_EXAMPLE,
    payload
  };
}

export function anotherExample(payload) {
  return {
    type: FOO_ANOTHER_EXAMPLE,
    payload,
  };
}
