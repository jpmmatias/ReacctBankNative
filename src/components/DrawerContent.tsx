import React, { useContext, useEffect, useState } from 'react';

import {
	View,
	StyleSheet,
	Text,
	TouchableOpacity,
	Dimensions,
} from 'react-native';
import { FontAwesome5, AntDesign, Ionicons } from '@expo/vector-icons';
import {
	DrawerContentComponentProps,
	DrawerContentScrollView,
} from '@react-navigation/drawer';
import { AuthContext } from '../utils/auth/AuthProvider';
const { width, height } = Dimensions.get('screen');
import { useDispatch, useStore } from 'react-redux';
import { IPlanoconta, IUser } from '../types';
import api from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

const styles = StyleSheet.create({
	container: {
		zIndex: 20,
		flex: 1,
		backgroundColor: '#FBFBFB',
		paddingHorizontal: (width * 7) / 100,
	},
	header: {
		marginVertical: (height * 5) / 100,
		flexDirection: 'row',
		justifyContent: 'space-between',
	},
	drawerItem: {
		marginBottom: 20,
	},
	drawerItem_label: {
		fontFamily: 'Roboto-Medium',
		fontSize: 16,
		color: '#878686',
		marginBottom: 2,
	},
	drawerItem_value: {
		fontFamily: 'Roboto-Medium',
		fontSize: 21,
		color: '#8C52E5',
	},
	divisor: {
		backgroundColor: '#878686',
		height: 1,
		width: '100%',
		marginVertical: (height * 3) / 100,
	},
	logoutBtn: {
		marginVertical: (height * 1) / 100,
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
});

export function DrawerContent(props: DrawerContentComponentProps) {
	const { logout } = useContext(AuthContext);

	const store = useStore();
	const dispatch = useDispatch();
	const user: IUser = store.getState().user.user;
	const planosConta:IPlanoconta[] = store.getState().user.planosConta
	const [contas, setcontas] = useState<any>('');
	useEffect(() => {
		async function load() {
			api
				.get(`dashboard?fim=2021-02-18&inicio=2021-02-18&login=${user.login}`, {
					headers: {
						'Content-Type': 'application/json',
						Authorization: await AsyncStorage.getItem('@tokenApp'),
					},
				})
				.then((res) => {
					alert(res.data);
					setcontas(res.data.lancamentos.planosConta);
				})
				.catch((err) => {
					Toast.show({
						type: 'error',
						position: 'top',
						text1: err.message,
					});
				});
		}
		//load();
	}, []);

	return (
		<View style={styles.container}>
			<DrawerContentScrollView {...props}>
				{/* Header */}
				<View style={styles.header}>
					<FontAwesome5 name='user-circle' size={24} color='#8C52E5' />
					<TouchableOpacity onPress={() => props.navigation.closeDrawer()}>
						<AntDesign name='closecircleo' size={24} color='#8C52E5' />
					</TouchableOpacity>
				</View>
				{/* Dados do User */}
				<View style={styles.drawerItem}>
					<Text style={styles.drawerItem_label}>Seu nome:</Text>
					<Text style={styles.drawerItem_value}>{user.nome}</Text>
				</View>
				<View style={styles.drawerItem}>
					<Text style={styles.drawerItem_label}>Email:</Text>
					<Text style={styles.drawerItem_value}>email@email.com</Text>
				</View>
				<View style={styles.drawerItem}>
					<Text style={styles.drawerItem_label}>UserName</Text>
					<Text style={styles.drawerItem_value}>{user.login}</Text>
				</View>
				<View style={styles.drawerItem}>
					<Text style={styles.drawerItem_label}>CPF</Text>
					<Text style={styles.drawerItem_value}>{user.cpf}</Text>
				</View>
				{/* Divisor*/}
				<View style={styles.divisor}></View>
				{/* Numero de planos */}
				<View style={styles.drawerItem}>
					<Text style={styles.drawerItem_label}>Você tem</Text>
					<Text style={styles.drawerItem_value}>{planosConta.length+" planos de Conta"}</Text>
				</View>

				<TouchableOpacity
					onPress={() => {
						logout();
						props.navigation.closeDrawer();
						props.navigation.navigate('Login');
					}}
					style={styles.logoutBtn}
				>
					<Text style={styles.drawerItem_label}>Sair</Text>
					<Ionicons name='exit-outline' size={24} color='#8C52E5' />
				</TouchableOpacity>
			</DrawerContentScrollView>
		</View>
	);
}
