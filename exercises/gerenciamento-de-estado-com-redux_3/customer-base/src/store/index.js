import { createStore, combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';
import customerReducer from '../reducers/customerReducer';

const rootReducer = combineReducers({ userReducer, customerReducer, });

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;
