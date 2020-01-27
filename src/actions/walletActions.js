import { WALLET_FETCH_FUNDS, WALLET_FUNDS } from '../types/wallet';

export function fetchFunds(payload) {
  return {
    type: WALLET_FETCH_FUNDS,
    payload
  };
}

export function updateFunds(payload) {
  return {
    type: WALLET_FUNDS,
    payload
  };
}
