import axios from 'axios';

import {
  SEARCH_DOMAIN_START,
  SEARCH_DOMAIN_SUCCESS,
  SEARCH_DOMAIN_ERROR,
} from './actionTypes';

export function searchDomain(domain) {
  return (dispatch) => {
    dispatch(searchDomainStart());
    return new Promise( (resolve, reject) => {
      axios.post('/api/dns/fullLookup/' + domain, {
        responseType: 'json',
      }).then((responce) => {
        const message = responce.data.message;
        let domains = [];
        if (message) {
          if (message.lookup) {
            domains = message.lookup.filter(function(el) {
              return ((el || {}).name || '').split('.')[0] === domain;
            });
            localStorage.setItem('domains', JSON.stringify(domains));
            dispatch(searchDomainSuccess(domains));
            resolve(responce.data);
          }
        } else {
          dispatch(searchDomainError(responce));
        }
      }).catch( (error) => {
        dispatch(searchDomainError(error));
        reject(error);
      });
    });
  };
}

export function searchDomainStart() {
  return {
    type: SEARCH_DOMAIN_START,
  };
}

export function searchDomainSuccess(domains) {
  return {
    type: SEARCH_DOMAIN_SUCCESS,
    domains,
  };
}

export function searchDomainError(e) {
  return {
    type: SEARCH_DOMAIN_ERROR,
    error: e,
  };
}
