import {createStore,combineReducers,applyMiddleware } from 'redux';
import { Reducer } from './reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({Reducer})

export const Store = createStore(rootReducer,applyMiddleware(thunk))