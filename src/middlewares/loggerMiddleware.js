function loggerMiddleware(store) {
    return function(next) {
        return function(action) {
            console.log('action: ', action);
            console.log('Store before: ', store.getState());
            let result = next(action);
            console.log('Store after: ', store.getState());
            return result;
        }
    }
}

export default loggerMiddleware;