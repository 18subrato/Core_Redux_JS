import store from './redux/store.js';
import {increment, decrement, reset} from './redux/actions/actionCreator.js'

console.log(store);
console.log('initial',store.getState());
store.dispatch(increment(10));
console.log('increment1',store.getState());
store.dispatch(increment(100));
store.dispatch(increment(20));
store.dispatch(increment(10));
store.dispatch(increment(30));
console.log('increment1',store.getState());
store.dispatch(decrement());
console.log('decrement1',store.getState());