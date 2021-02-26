import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
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
	Transferir: { tabPress: any };
	Lançamentos: undefined;
	Depositar: undefined;
	Planos: undefined;
};

export interface AuthNavProps<T extends keyof AuthParamList> {
	navigation: StackNavigationProp<AuthParamList, T>;
	route: RouteProp<AuthParamList, T>;
}

export type HomeParamList = {
	HomeFeed: undefined;
};

export type LancamentosParamList = {
	Lancamentos: undefined;
};

export interface HomeDrawerNavProps<T extends keyof HomeParamList> {
	navigation: DrawerNavigationProp<HomeParamList, T>;
	route: RouteProp<HomeParamList, T>;
}

export interface LancamentosDrawerNavProps<
	T extends keyof LancamentosParamList
> {
	navigation: DrawerNavigationProp<LancamentosParamList, T>;
	route: RouteProp<LancamentosParamList, T>;
}
