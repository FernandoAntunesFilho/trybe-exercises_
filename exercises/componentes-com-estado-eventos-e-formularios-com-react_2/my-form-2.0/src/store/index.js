import { createStore, combineReducers } from 'redux';
import listReducer from '../../src/reducers';

const rootReducer = combineReducers({ listReducer });

const store = createStore(rootReducer);

export default store;
