import {createSelector} from 'reselect';

const getDomainsFromState = (state) => state.domain.domains;
const getLoadingFromState = (state) => state.domain.loading;

export const getAllDomains = createSelector(
    getDomainsFromState,
    (domains) => domains
);

export const getLoading = createSelector(
    getLoadingFromState,
    (loading) => loading
);
