const jobsReducer = (state = [], action) => {
    switch(action.type){
        case 'SET_JOBS':
            return action.jobs;
        case 'LOAD_MORE_JOBS':
            return[...state, ...action.jobs];
        default:
            return state;
    }
}

export default jobsReducer

// This file adds the new jobs data coming from the API in redux using the SET_JOBS action. By using the LOAD_MORE_JOBS action, this will get more jobs and add them to the existing array using the spread operator