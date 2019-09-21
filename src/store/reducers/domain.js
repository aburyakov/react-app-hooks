import {
  SEARCH_DOMAIN_SUCCESS,
  SEARCH_DOMAIN_START,
  SEARCH_DOMAIN_ERROR
} from '../actions/actionTypes';

const initialState = {
  loading: false,
  domains: JSON.parse(localStorage.getItem('domains')) || [],
}

const actions = {
  [SEARCH_DOMAIN_START](state, action) {
    return {
      ...state, loading: true
    }
  },
  [SEARCH_DOMAIN_SUCCESS](state, action) {
    return {
      ...state, loading: false, domains: action.domains
    }
  },
  [SEARCH_DOMAIN_ERROR](state, action) {
    return {
      ...state, loading: false
    }
  },
}

export default function domainReducer(state = initialState, action) {
  if(typeof actions[action.type] === 'function') {
    return actions[action.type].call(this, state, action);
  }
  return state;
}
