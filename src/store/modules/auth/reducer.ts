import { Reducer } from 'redux';

const INITIAL_STATE = {
	user: {},
};

const userReducer: Reducer<any> = (state = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'ADD_USER':
			const { user } = action.payload;
			console.log(action.payload);
			return {
				...state,
				user,
			};

		default: {
			return state;
		}
	}
};

export default userReducer;
