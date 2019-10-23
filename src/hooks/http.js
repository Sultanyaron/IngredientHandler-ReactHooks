import { useReducer, useCallback } from 'react';

const initialState = {
    loading: false, 
    error: null,
    data: null,
    extra: null,
    identifier: null
};

const httpReducer = (httpState, action) => {
    switch (action.type) {
        case 'SEND_REQ':
            return {
                loading: true, 
                error: null, 
                data: null, 
                extra: null, 
                identifier: action.identifier};
        case 'RESPONSE':
            return {
                ...httpState,
                loading: false, 
                data: action.responseData, 
                extra: action.extra};
        case 'ERROR':
            return {
                loading: false, 
                error: action.errorMsg};
        case 'CLEAR':
            return initialState
        default:
            throw new Error('Should not be reached')
    };
  };

const useHttp = () => {
    const [ httpState, dispatchHttp ] = useReducer(httpReducer, initialState);

    const clear = useCallback(() =>  dispatchHttp({type: 'CLEAR' }), []);

    const sendRequest = useCallback((url, method, body, reqExtra, reqIdentifier) => {
        dispatchHttp({ type: 'SEND_REQ', identifier: reqIdentifier})
        fetch(
            url, 
            {
                method: method,
                body: body
            }
        )
          .then(res => {
            return res.json();
          }).then(resData => {
            dispatchHttp({type: 'RESPONSE', extra: reqExtra, responseData: resData});
          })
          .catch(err => {
            dispatchHttp({type: 'ERROR', errorMsg: err.message});
          });
    }, []);

    return {
        isLoading: httpState.loading,
        data: httpState.data,
        error: httpState.error,
        sendRequest: sendRequest,
        reqExtra: httpState.extra,
        reqIdentifier: httpState.identifier,
        clear: clear
    }; //can return any value
};

export default useHttp