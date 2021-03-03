import React, { useState, useRef } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import api from '../services/api';
import Toast from 'react-native-toast-message';
import { TextInputMask } from 'react-native-masked-text';
//@ts-ignore
import styled from 'styled-components/native';

import {
	StyleSheet,
	ScrollView,
	Dimensions,
	TextInput,
	TouchableWithoutFeedback,
} from 'react-native';
import { AuthNavProps } from '../types';
import { UserSchema } from '../utils/validations/UserValidation';

const { width, height } = Dimensions.get('window');

const Container = styled.View`
	font-family: 'Roboto-Regular';
	flex: 1;
	background-color: #8c52e5;
	align-items: center;
`;
const Link = styled.Text`
	font-weight: 500;
	font-size: 13px;
	margin-bottom: 20px;
	color: #8c52e5;
	text-align: center;
`;
const Logo = styled.Image`
	height: 55px;
	width: 249px;
	margin-top: 40px;
	margin-bottom: 60px;
`;

const CardBody = styled.View`
	width: ${(width * 70) / 100};
	height: ${(height * 70) / 100};
`;

const Input = styled.TextInput`
	padding: 5px;
	border-bottom-width: 1;
	border-bottom-color: #878686;
	margin-bottom: 20px;
`;

const Form = styled.View`
	margin-bottom: 37px;
`;

const Title = styled.Text`
	margin-top: 5px;
	font-size: 21px;
	font-weight: 500;
	color: #1d1d1d;
	line-height: 24.61px;
	margin-bottom: 36px;
`;

const SignIn = ({ navigation, route }: AuthNavProps<'SignIn'>) => {
	const [cpf, setCpf] = useState('');
	const [name, setName] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');

	const inputRefs = {
		cpfRef: useRef<TextInputMask | null>(null),
		nameRef: useRef<TextInput>(null),
		usernameRef: useRef<TextInput>(null),
		password: useRef<TextInput>(null),
		password2: useRef<TextInput>(null),
	};

	const handleSubmit = () => {
		UserSchema.validate(
			{
				cpf: cpf,
				name,
				username,
				password,
				password2,
			},
			{ abortEarly: false }
		)
			.then((res: any) => {
				api
					.post(`usuarios`, {
						cpf: res.cpf,
						login: res.username,
						nome: res.name,
						senha: res.password,
					})
					.then((res) => {
						navigation.navigate('AccountCreated');
					})
					.catch((err) => {
						Toast.show({
							type: 'error',
							position: 'top',
							text1: 'Oops',
							text2: err.message,
						});
					});
			})
			.catch((err: any) => {
				alert(cpf);
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
						<Title>Peça sua conta e cartão de crédito do Gama Bank</Title>
						<Form>
							<TextInputMask
								placeholderTextColor='#878686'
								placeholder='Digite seu CPF'
								type={'cpf'}
								value={cpf}
								textContentType='postalCode'
								onChangeText={(value, rawText) => {
									setCpf(value);
								}}
								keyboardType='number-pad'
								returnKeyType='done'
								style={{
									padding: 5,
									borderBottomWidth: 1,
									borderBottomColor: '#878686',
									marginBottom: 20,
								}}
								ref={(ref) => (inputRefs.cpfRef.current = ref)}
							/>
							<Input
								ref={inputRefs.usernameRef}
								placeholderTextColor='#878686'
								placeholder='Escolha um nome de usuário'
								textContentType='username'
								value={username}
								onSubmitEditing={() => {
									if (inputRefs.nameRef.current) {
										inputRefs.nameRef.current.focus();
									}
								}}
								onChangeText={(text: string) => {
									setUsername(text);
								}}
								blurOnSubmit={false}
							></Input>
							<Input
								ref={inputRefs.nameRef}
								placeholderTextColor='#878686'
								placeholder='Nome completo'
								textContentType='name'
								value={name}
								onChangeText={(text: string) => {
									setName(text);
								}}
								onSubmitEditing={() => {
									if (inputRefs.password.current) {
										inputRefs.password.current.focus();
									}
								}}
								blurOnSubmit={false}
							></Input>
							<Input
								onSubmitEditing={() => {
									if (inputRefs.password2.current) {
										inputRefs.password2.current.focus();
									}
								}}
								textContentType='password'
								secureTextEntry={true}
								value={password}
								ref={inputRefs.password}
								onChangeText={(text: string) => {
									setPassword(text);
								}}
								blurOnSubmit={false}
								placeholderTextColor='#878686'
								placeholder='Digite sua senha'
							></Input>
							<Input
								style={{ marginBottom: 30 }}
								onSubmitEditing={() => {
									handleSubmit();
								}}
								ref={inputRefs.password2}
								textContentType='password'
								secureTextEntry={true}
								value={password2}
								onChangeText={(text: string) => {
									setPassword2(text);
								}}
								blurOnSubmit={false}
								placeholderTextColor='#878686'
								placeholder='Confirme sua senha'
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
								navigation.navigate('Login');
							}}
						>
							<Link>Voltar para o login </Link>
						</TouchableWithoutFeedback>
					</CardBody>
				</Card>
			</ScrollView>
		</Container>
	);
};

export default SignIn;
