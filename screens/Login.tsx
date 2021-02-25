import React, { useState, useEffect, useRef } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import api from '../services/api';
import Toast from 'react-native-toast-message';
import {
	StyleSheet,
	Text,
	View,
	Image,
	Dimensions,
	TextInput,
	TouchableWithoutFeedback,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthNavProps } from '../types';
const { width, height } = Dimensions.get('window');

const Login = ({ navigation, route }: AuthNavProps<'Login'>) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const inputRef = useRef<TextInput>(null);

	const handleSubmit = () => {
		api
			.post(`login`, { senha: password, usuario: username })
			.then((res) => {
				localStorage.setItem('@tokenApp', res.data.token);
				console.log('go to dashboard');
			})
			.catch((err) => {
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
			<Card>
				<View style={styles.cardBody}>
					<Text style={styles.title}>
						Seja bem vindo, informe seus dados para logar.
					</Text>
					<View style={styles.form}>
						<TextInput
							onSubmitEditing={() => {
								if (inputRef.current) {
									inputRef.current.focus();
								}
							}}
							placeholderTextColor='#878686'
							placeholder='Digite seu usuário'
							textContentType='username'
							value={username}
							onChangeText={(text) => {
								setUsername(text);
							}}
							blurOnSubmit={false}
							style={[styles.input, { marginBottom: 79 }]}
						></TextInput>
						<TextInput
							textContentType='password'
							secureTextEntry={true}
							value={password}
							ref={inputRef}
							onChangeText={(text) => {
								setPassword(text);
							}}
							blurOnSubmit={false}
							placeholderTextColor='#878686'
							placeholder='Digite sua senha'
							style={[styles.input, { marginBottom: 50 }]}
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
							navigation.navigate('PasswordRecovery');
						}}
					>
						<Text style={styles.link}>Esqueci minha senha </Text>
					</TouchableWithoutFeedback>
					<TouchableWithoutFeedback
						onPress={() => {
							navigation.navigate('SignIn');
						}}
					>
						<Text style={styles.link}>Ainda não sou cliente </Text>
					</TouchableWithoutFeedback>
				</View>
			</Card>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
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
		height: (height * 66) / 100,
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

export default Login;
