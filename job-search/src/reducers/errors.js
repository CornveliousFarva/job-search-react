const errorsReducer = (state = {}, action) => {
    switch(action.type){
        case 'SET_ERRORS':
            return{
                error: action.error
            };
        case 'RESET_ERRORS':
            return {};
        default:
            return state;
    }
}

export default errorsReducer

// The errors reducer adds an API error, if there is one, into the redux store by dispatching the SET_ERRORS action and removing the error object from the redux store if there is no error while getting a response from the API with the RESET_ERRORS action