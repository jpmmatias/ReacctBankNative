import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

export type AuthParamList = {
	Login: undefined;
	SignIn: undefined;
	AccountCreated: undefined;
	PasswordRecovery: undefined;
	PasswordRecovery2: { temporaryPass: string };
	PasswordChanged: undefined;
};

export type AppParamList = {
	Home: undefined;
	Transferir: undefined;
	Lançamentos: undefined;
	Depositar: undefined;
	Planos: undefined;
};

export interface AuthNavProps<T extends keyof AuthParamList> {
	navigation: StackNavigationProp<AuthParamList, T>;
	route: RouteProp<AuthParamList, T>;
}
