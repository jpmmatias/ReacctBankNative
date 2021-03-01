import { createStore, combineReducers } from 'redux';
import userReducer from './modules/user/reducer';

export const store = createStore(combineReducers({ user: userReducer }));
