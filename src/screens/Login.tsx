import React, { useState, useContext, useRef } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import api from '../services/api';
import { useDispatch } from 'react-redux';
import Toast from 'react-native-toast-message';
//@ts-ignore
import styled from 'styled-components/native';

import {
	Dimensions,
	TextInput,
	TouchableWithoutFeedback,
	ScrollView,
} from 'react-native';
import { AuthNavProps, IUser } from '../types';
const { width, height } = Dimensions.get('window');

import { useStore } from 'react-redux';

import { AuthContext } from '../utils/auth/AuthProvider';

import { LoginUser } from '../store/modules/user/action';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Container = styled.View`
	flex: 1;
	background-color: #8c52e5;
	align-items: center;
	font-family: 'Roboto-Regular';
`;
const CardBody = styled.View`
	width: ${(width * 70) / 100};
	height: ${(height * 66) / 100};
`;
const Tittle = styled.Text`
	margin-top: 5px;
	font-size: 21px;
	text-align: center;
	font-weight: 500;
	color: #1d1d1d;
	line-height: 24.61px;
	margin-bottom: 60px;
`;
const Form = styled.View`
	margin-bottom: 37px;
`;

const Link = styled.Text`
	font-weight: 500;
	font-size: 13px;
	margin-bottom: 20px;
	color: #8c52e5;
	text-align: center;
`;

const Input = styled.TextInput`
	margin-bottom: 37px;
	padding: 5px;
	border-bottom-width: 1;
	border-bottom-color: #878686;
`;

const Logo = styled.Image`
	height: 55px;
	width: 249px;
	margin-top: 40px;
	margin-bottom: 60px;
`;

const Login = ({ navigation, route }: AuthNavProps<'Login'>) => {
	const { login } = useContext(AuthContext);
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const inputRef = useRef<TextInput>(null);
	const dispatch = useDispatch();
	const store = useStore();

	const handleSubmit = () => {
		api
			.post(`login`, { senha: password, usuario: username })
			.then(async (res: any) => {
				login();
				let user: IUser = res.data.usuario;
				console.log(user);
				dispatch(LoginUser(user));
				await AsyncStorage.setItem('@tokenApp', res.data.token);
			})
			.catch((err) => {
				console.log('aaa');
				console.log(err);
				Toast.show({
					type: 'error',
					position: 'top',
					text1: 'Oops',
					text2: err.message,
				});
			});
	};

	return (
		<Container>
			<Logo source={require('../assets/images/logo-gamaacademy.png')} />
			<ScrollView>
				<Card>
					<CardBody>
						<Tittle>Seja bem vindo, informe seus dados para logar.</Tittle>
						<Form>
							<Input
								onSubmitEditing={() => {
									if (inputRef.current) {
										inputRef.current.focus();
									}
								}}
								placeholderTextColor='#878686'
								placeholder='Digite seu usuário'
								textContentType='username'
								value={username}
								onChangeText={(text: string) => {
									setUsername(text);
								}}
								blurOnSubmit={false}
								style={{ marginBottom: 45 }}
							></Input>
							<Input
								textContentType='password'
								secureTextEntry={true}
								value={password}
								ref={inputRef}
								onChangeText={(text: string) => {
									setPassword(text);
								}}
								blurOnSubmit={false}
								placeholderTextColor='#878686'
								placeholder='Digite sua senha'
								style={{ marginBottom: 50 }}
							></Input>
							<Button
								text='Continuar'
								handleClick={handleSubmit}
								textColor='#fff'
								backgroundColor='#68DE5A'
								textSize={22}
								widthSize={265.64}
								heightSize={56.97}
								textWeight='600'
							/>
						</Form>
						<TouchableWithoutFeedback
							onPress={() => {
								navigation.navigate('PasswordRecovery');
							}}
						>
							<Link>Esqueci minha senha </Link>
						</TouchableWithoutFeedback>
						<TouchableWithoutFeedback
							onPress={() => {
								navigation.navigate('SignIn');
							}}
						>
							<Link>Ainda não sou cliente </Link>
						</TouchableWithoutFeedback>
					</CardBody>
				</Card>
			</ScrollView>
		</Container>
	);
};

export default Login;
