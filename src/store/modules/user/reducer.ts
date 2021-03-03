import { Reducer } from 'redux';
import { IPlanoconta, IUser } from '../../../types';

interface IState{
	user:IUser
	planosConta:IPlanoconta[]
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
	planosConta:[],
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
		case 'ADD_PLANOS_CONTA':
		const {planosConta} = action.payload;
		console.log(planosConta)
		return {
			...state,
			planosConta
		};
		case 'PUT_PLANO_CONTA':
		const {planoConta} = action.payload;
		console.log(state)
		return {
			...state,
			planosConta:[
				...state.planosConta,
				planoConta
			]
		};
		default: {
			return state;
		}
	}
};

export default userReducer;
