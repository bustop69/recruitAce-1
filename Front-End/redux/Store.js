import {createStore,combineReducers,applyMiddleware } from 'redux';
import { Reducer } from './Reducer';
import thunk from 'redux-thunk';

const rootReducer = combineReducers({Reducer})

export const Store = createStore(rootReducer,applyMiddleware(thunk))