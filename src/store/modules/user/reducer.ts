import { Reducer } from 'redux';
import { IPlanoconta, IUser, IDepositoConta, IPagamentoConta} from '../../../types';

interface IState{
	user:IUser
	planosConta:IPlanoconta[]
	DepositosConta:IDepositoConta[]
	PagamentosConta:IPagamentoConta[]
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
	DepositosConta:[],
	PagamentosConta:[],
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
		case 'ADD_DEPOSITO_CONTA':
			const { DepositoConta } = action.payload;
			console.log(state);
			return {
				...state,
				DepositosConta: [...state.DepositosConta, DepositoConta],
			};

			case 'ADD_PAGAMENTO_CONTA':
				const { PagamentoConta } = action.payload;
				console.log(state);
				return {
					...state,
					PagamentosConta: [...state.PagamentosConta, PagamentoConta],
				};

		default: {
			return state;
		}
	}
};

export default userReducer;
