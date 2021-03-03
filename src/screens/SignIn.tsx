import React, { useState, useRef } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import api from '../services/api';
import Toast from 'react-native-toast-message';
import { TextInputMask } from 'react-native-masked-text';

import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	Image,
	Dimensions,
	TextInput,
	TouchableWithoutFeedback,
} from 'react-native';
import { AuthNavProps } from '../types';
import { UserSchema } from '../utils/validations/UserValidation';

const { width, height } = Dimensions.get('window');

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
		<View style={styles.container}>
			<Image
				style={styles.logo}
				source={require('../assets/images/logo-gamaacademy.png')}
			/>
			<ScrollView>
				<Card>
					<View style={styles.cardBody}>
						<Text style={styles.title}>
							Peça sua conta e cartão de crédito do Gama Bank
						</Text>
						<View style={styles.form}>
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
								style={styles.input}
								ref={(ref) => (inputRefs.cpfRef.current = ref)}
							/>
							<TextInput
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
								onChangeText={(text) => {
									setUsername(text);
								}}
								blurOnSubmit={false}
								style={[styles.input, { marginBottom: 20 }]}
							></TextInput>
							<TextInput
								ref={inputRefs.nameRef}
								placeholderTextColor='#878686'
								placeholder='Nome completo'
								textContentType='name'
								value={name}
								onChangeText={(text) => {
									setName(text);
								}}
								onSubmitEditing={() => {
									if (inputRefs.password.current) {
										inputRefs.password.current.focus();
									}
								}}
								blurOnSubmit={false}
								style={[styles.input, { marginBottom: 20 }]}
							></TextInput>
							<TextInput
								onSubmitEditing={() => {
									if (inputRefs.password2.current) {
										inputRefs.password2.current.focus();
									}
								}}
								textContentType='password'
								secureTextEntry={true}
								value={password}
								ref={inputRefs.password}
								onChangeText={(text) => {
									setPassword(text);
								}}
								blurOnSubmit={false}
								placeholderTextColor='#878686'
								placeholder='Digite sua senha'
								style={[styles.input, { marginBottom: 20 }]}
							></TextInput>
							<TextInput
								onSubmitEditing={() => {
									handleSubmit();
								}}
								ref={inputRefs.password2}
								textContentType='password'
								secureTextEntry={true}
								value={password2}
								onChangeText={(text) => {
									setPassword2(text);
								}}
								blurOnSubmit={false}
								placeholderTextColor='#878686'
								placeholder='Confirme sua senha'
								style={[styles.input, { marginBottom: 33 }]}
							></TextInput>
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
						</View>
						<TouchableWithoutFeedback
							onPress={() => {
								navigation.navigate('Login');
							}}
						>
							<Text style={styles.link}>Voltar para o login </Text>
						</TouchableWithoutFeedback>
					</View>
				</Card>
			</ScrollView>
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
	cardBody: {
		width: (width * 70) / 100,
		height: (height * 70) / 100,
	},
	title: {
		marginTop: 5,
		fontSize: 21,
		fontWeight: '500',
		color: '#1d1d1d',
		lineHeight: 24.61,
		marginBottom: 36,
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

export default SignIn;
