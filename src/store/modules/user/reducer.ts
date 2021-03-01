import { Reducer } from 'redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

let storageToken = async () => {
	try {
		return await AsyncStorage.getItem('@tokenApp');
	} catch (err) {
		console.log(err);
	}
};

const INITIAL_STATE = {
	user: {},
	logged: async () => {
		await storageToken().then((value) => {
			return value;
		});
	},
};

const userReducer: Reducer<any> = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'LOGIN':
			const { user } = action.payload;
			return {
				...state,
				logged: true,
				user,
			};
		case 'LOGOUT':
			return {
				...state,
				logged: false,
				user: {},
			};

		default: {
			return state;
		}
	}
};

export default userReducer;
