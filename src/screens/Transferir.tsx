import React, { useRef, useState } from 'react';
import { View, Text } from 'react-native';
import Card from '../components/Card';
import Button from '../components/Button';
import { AppTabNavProps, ItransferenciaConta, IUser } from '../types';
import {
	StyleSheet,
	Image,
	Dimensions,
	TextInput,
	TouchableOpacity,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';

//@ts-ignore
import styled from 'styled-components/native';
import { useDispatch, useStore } from 'react-redux';
import api from '../services/api';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DadosUserInfo } from '../store/modules/user/action';
import Toast from 'react-native-toast-message';

const { width, height } = Dimensions.get('window');



const Transferir = ({ navigation, route }: AppTabNavProps<'Transferir'>) => {
	navigation.setOptions({ tabBarVisible: false });
	const handleSubmit = () => {};
	const inputRef = useRef<TextInput>(null);

	const store = useStore()
	const dispatch = useDispatch()
	const dadosUser = store.getState().user.dadosUser
	const user:IUser = store.getState().user.user

	const[valor, setValor] = useState(0)
	const[data, setData] = useState('')
	const[descricao, setDescricao] = useState('')
	const[contaDestino, setContaDestino] = useState('')
	


	function fazerTransferencia(){
		let transferencia:ItransferenciaConta = {
			valor:valor,
			data:data,
			descricao:descricao,
			login: user.login,
			conta: dadosUser.contaBanco.id,
			planoConta:838,
			contaDestino:contaDestino
		};
		
		async function postTransferencia( ){
			api
			.post('lancamentos', transferencia, {
				headers: {
					'Content-Type': 'application/json',
					Authorization:  await AsyncStorage.getItem('@tokenApp'),
				},
			})
			.then((res) => {
				switch (transferencia.conta) {
					case dadosUser.contaBanco.id:
						dadosUser.contaBanco.saldo -= transferencia.valor;
						dadosUser.contaBanco.lancamentos.push({
							...transferencia,
							valor: transferencia.valor * -1,
						});
						dispatch(DadosUserInfo(dadosUser));
						break;
					case dadosUser.contaCredito.id:
						dadosUser.contaCredito.saldo -= transferencia.valor;
						dadosUser.contaCredito.lancamentos.push({
							...transferencia,
							valor: transferencia.valor * -1,
						});
						dispatch(DadosUserInfo(dadosUser));
						break;
					default:
						break;
				}
				Toast.show({
					type: 'success',
					position: 'top',
					text1: 'Oops',
					text2: "Depósito Realizado com Sucesso!",
				});
			})
			.catch((err) => {
				Toast.show({
					type: 'error',
					position: 'top',
					text1: 'Oops',
					text2: err.message,
				});
			});
		}

		postTransferencia()
		
	}


	return (
		<View style={styles.container}>
			<Image
				style={styles.logo}
				source={require('../assets/images/logo-gamaacademy.png')}
			/>
			<View
				style={{
					width: width,
					paddingLeft: (width * 10) / 100,
					marginBottom: 10,
				}}
			>
				<TouchableOpacity
					onPress={() => {
						navigation.goBack();
					}}
				>
					<Ionicons name='arrow-back' color='#fff' size={22} />
				</TouchableOpacity>
			</View>
			<Card>
				<View style={styles.cardBody}>
					<Image
						style={styles.account}
						source={require('../assets/images/account.png')}
					/>
					<Text style={styles.depos}>Depósitos</Text>
					<View style={styles.form}>
						<TextInput
							value={valor.toString()}
							onChangeText={(value) => value != ''? setValor(parseFloat(value)) : setValor(0)}
							style={[styles.input, { marginBottom: 20 }]}
						></TextInput>
						<TextInput
							placeholder='Data'
							value={data}
							onChangeText={(value) => setData(value)}
							style={[styles.input, { marginBottom: 20 }]}
						></TextInput>
						<TextInput
							placeholder='Conta de Destino'
							value={contaDestino}
							onChangeText={(value) => setContaDestino(value)}
							style={[styles.input, { marginBottom: 20 }]}
						></TextInput>
						<TextInput
							placeholder='Descrição'
							value={descricao}
							onChangeText={(value) => setDescricao(value)}
							style={[styles.input, { marginBottom: 50 }]}
						></TextInput>
						<Button
							text='Realizar Transferência'
							handleClick={fazerTransferencia}
							textColor='#fff'
							backgroundColor='#68DE5A'
							textSize={22}
							widthSize={265.64}
							heightSize={56.97}
							textWeight='600'
						/>
					</View>
				</View>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		fontFamily: 'Roboto-Regular',
		flex: 1,
		backgroundColor: '#8C52E5',
		alignItems: 'center',
	},
	form: {
		marginBottom: 37,
	},
	logo: {
		height: 55,
		width: 249,
		marginTop: 40,
		marginBottom: 60,
	},
	account: {
		width: 30,
		height: 30,
		marginBottom: -5,
	},
	cardBody: {
		width: (width * 70) / 100,
		height: (height * 60) / 100,
	},
	title: {
		marginTop: 5,
		fontSize: 21,
		textAlign: 'center',
		fontWeight: '500',
		color: '#1d1d1d',
		lineHeight: 24.61,
		marginBottom: 60,
	},
	depos: {
		marginTop: -20,
		textAlign: 'center',
		marginBottom: 60,
		fontSize: 21,
	},
	link: {
		fontWeight: '500',
		fontSize: 13,
		marginBottom: 20,
		color: '#8C52E5',
		textAlign: 'center',
	},
	input: {
		padding: 5,
		borderBottomWidth: 1,
		borderBottomColor: '#878686',
	},
});

export default Transferir;
