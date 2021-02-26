import React, { useState, useRef } from 'react';
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
import { NewPasswordSchema } from '../utils/validations/RecoveryPasswordValidation';
const PasswordRecovery2 = ({
	navigation,
	route,
}: AuthNavProps<'PasswordRecovery2'>) => {
	const [password, setPassword] = useState('');
	const [password2, setPassword2] = useState('');
	const [email, setEmail] = useState('');
	const inputRef = useRef<TextInput>(null);

	const handleSubmit = () => {
		NewPasswordSchema.validate({ password, password2 }, { abortEarly: false })
			.then((res: any) => {
				console.log(password);
				api
					.post(`altera-senha?senhaTemporaria=${route.params.temporaryPass}`, {
						email: email,
						passowrd: password,
					})
					.then((res) => {
						navigation.navigate('PasswordChanged');
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
					<Text style={styles.title}>Redefinir Senha</Text>
					<View style={styles.form}>
						<TextInput
							textContentType='emailAddress'
							value={email}
							ref={inputRef}
							onChangeText={(text) => {
								setEmail(text);
							}}
							blurOnSubmit={false}
							placeholderTextColor='#878686'
							placeholder='Digite seu email'
							style={[styles.input, { marginBottom: 50 }]}
						></TextInput>
						<TextInput
							textContentType='newPassword'
							secureTextEntry={true}
							value={password}
							onChangeText={(text) => {
								setPassword(text);
							}}
							blurOnSubmit={false}
							placeholderTextColor='#878686'
							placeholder='Digite sua nova senha'
							style={[styles.input, { marginBottom: 20 }]}
						></TextInput>
						<TextInput
							textContentType='newPassword'
							secureTextEntry={true}
							value={password2}
							onChangeText={(text) => {
								setPassword2(text);
							}}
							blurOnSubmit={false}
							placeholderTextColor='#878686'
							placeholder='Confirme sua senha'
							style={[styles.input, { marginBottom: 20 }]}
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
						<Text style={styles.link}>Ir para Login</Text>
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

export default PasswordRecovery2;
