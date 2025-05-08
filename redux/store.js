import { createStore } from 'redux';
import counterReducer from './reducers/reducer.js'

const store = createStore(counterReducer);

export default store;