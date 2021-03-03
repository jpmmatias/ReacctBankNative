import { Reducer } from 'redux';
import { IUser } from '../../../types';

interface IState{
	user:IUser
}

const INITIAL_STATE:IState = {
	user: {
		id:0,
		login:'',
		cpf:'',
		nome:'',
		senha:'',
		redefinirSenha:false,
		senhaTemporaria:'',
	},
};

const userReducer: Reducer<IState> = (state:IState = INITIAL_STATE, action) => {
	switch (action.type) {
		case 'LOGIN':
			const {user} = action.payload;
			console.log(user)
			return {
				...state,
				user
			};
		default: {
			return state;
		}
	}
};

export default userReducer;
