import React, { useState, useEffect, useRef } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import api from '../services/api';
import Toast from 'react-native-toast-message';
import {
	Dimensions,
	TextInput,
	ScrollView,
	TouchableWithoutFeedback,
} from 'react-native';
import { AuthNavProps } from '../types';
//@ts-ignore
import styled from 'styled-components/native';

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
	width: ${(width * 70) / 100}px;
	height: ${(height * 70) / 100}px;
`;

const Input = styled.TextInput`
	padding: 5px;
	border-bottom-width: 1px;
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

const PasswordRecovery = ({
	navigation,
	route,
}: AuthNavProps<'PasswordRecovery'>) => {
	const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const inputRef = useRef<TextInput>(null);

	const handleSubmit = () => {
		api
			.post(`nova-senha`, { email: email, login: username })
			.then((res) => {
				navigation.navigate('PasswordRecovery2', { temporaryPass: res.data });
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
		<Container>
			<Logo source={require('../assets/images/logo-gamaacademy.png')} />
			<ScrollView>
				<Card>
					<CardBody>
						<Title>Redefinir Senha</Title>
						<Form>
							<Input
								textContentType='emailAddress'
								value={email}
								ref={inputRef}
								onChangeText={(text: string) => {
									setEmail(text);
								}}
								blurOnSubmit={false}
								placeholderTextColor='#878686'
								placeholder='Digite seu email'
								style={{ marginBottom: 30 }}
							></Input>
							<Input
								onSubmitEditing={() => {
									if (inputRef.current) {
										inputRef.current.focus();
									}
								}}
								style={{ marginBottom: 50 }}
								placeholderTextColor='#878686'
								placeholder='Digite seu login'
								textContentType='username'
								value={username}
								onChangeText={(text: string) => {
									setUsername(text);
								}}
								blurOnSubmit={false}
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
							<Link>Ir para Login</Link>
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

export default PasswordRecovery;
