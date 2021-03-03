import {
  SEARCH_DOMAIN_SUCCESS,
  SEARCH_DOMAIN_START,
  SEARCH_DOMAIN_ERROR,
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  domains: JSON.parse(localStorage.getItem('domains')) || [],
};

const actions = {
  [SEARCH_DOMAIN_START](state) {
    return {
      ...state, loading: true,
    };
  },
  [SEARCH_DOMAIN_SUCCESS](state, { domains }) {
    return {
      ...state, loading: false, domains: domains,
    };
  },
  [SEARCH_DOMAIN_ERROR](state) {
    return {
      ...state, loading: false,
    };
  },
};

export default function domainReducer(state = initialState, action) {
  if (typeof actions[action.type] === 'function') {
    return actions[action.type](state, action);
  }
  return state;
}
