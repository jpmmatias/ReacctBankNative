import { createStore, combineReducers } from 'redux';
import authReducer from './modules/auth/reducer';
import userReducer from './modules/user/reducer';

export const store = createStore(
	combineReducers({ user: userReducer, auth: authReducer })
);
