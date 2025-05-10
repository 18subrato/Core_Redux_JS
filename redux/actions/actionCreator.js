import {INCREMENT, DECREMENT, RESET} from './actionType.js'

export const increment = (val)=>{
    return {
        type:INCREMENT,
        payload: val
    }
}

export const decrement = ()=>{
    return {type:DECREMENT}
}

export const reset = ()=>{
    return {type:RESET}
}