import {
  BAR_FETCH_EXAMPLE,
  BAR_EXAMPLE,
  BAR_ANOTHER_EXAMPLE
} from '../types/bar';

export function fetchExample(payload) {
  return {
    type: BAR_FETCH_EXAMPLE,
    payload
  };
}

export function example(payload) {
  return {
    type: BAR_EXAMPLE,
    payload
  };
}

export function anotherExample(payload) {
  return {
    type: BAR_ANOTHER_EXAMPLE,
    payload,
  };
}
