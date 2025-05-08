import store from './redux/store.js';
import {increment, decrement, reset} from './redux/actions/actionCreator.js'

console.log(store);
console.log('initial',store.getState());
store.dispatch(increment());
console.log('increment1',store.getState());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
store.dispatch(increment());
console.log('increment1',store.getState());
store.dispatch(decrement());
console.log('decrement1',store.getState());