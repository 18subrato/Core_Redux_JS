import {INCREMENT, DECREMENT, RESET} from '../actions/actionType.js'

const initialState = 0;

function counterReducer(state = initialState,action){
    if(action.type == INCREMENT){
        return state+1;
    } 

    if(action.type == DECREMENT){
        return state-1;
    }

    if(action.type == RESET){
        return state = 0;
    }

    return state;
}

export default counterReducer