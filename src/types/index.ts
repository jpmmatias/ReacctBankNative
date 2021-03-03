import { StackNavigationProp } from '@react-navigation/stack';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RouteProp } from '@react-navigation/native';
import {
	BottomTabBarProps,
	BottomTabBarOptions,
	BottomTabNavigationProp,
} from '@react-navigation/bottom-tabs';

export type AuthParamList = {
	Login: undefined;
	SignIn: undefined;
	AccountCreated: undefined;
	PasswordRecovery: undefined;
	PasswordRecovery2: { temporaryPass: string };
	PasswordChanged: undefined;
	Transferir: undefined;
	Depositar: undefined;
	Planos: undefined;
};

export type AppParamList = {
	Home: undefined;
	Transferir: { tabPress: any };
	Lançamentos: undefined;
	Depositar: undefined;
	Planos: undefined;
	tabBar?: (props: BottomTabBarProps<BottomTabBarOptions>) => React.ReactNode;
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
	Home: undefined;
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

export interface AppTabNavProps<T extends keyof AppParamList> {
	navigation: BottomTabNavigationProp<AppParamList, T>;
	route: RouteProp<AppParamList, T>;
}

export interface ITab {
	color: string;
	tab: any;
	onPress: () => void;
	icon: string;
}

export interface IHeader {
	name: string;
	openDrawer: () => void;
	goToHome: () => void;
}

export interface IPlanoconta {
	id: number;
	descricao: string;
	login: string;
	tipoMovimento: string;
	padrao: boolean;
}

export interface IListData {
	key: string;
}

export interface IUser{
	id:number,
	login:string,
	cpf:string,
	nome:string,
	senha:string,
	redefinirSenha:boolean,
	senhaTemporaria:string,
}
