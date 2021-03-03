import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { AuthNavProps } from '../types';
const { width, height } = Dimensions.get('window');
//@ts-ignore
import styled from 'styled-components/native';

const Container = styled.View`
	font-family: 'Roboto-Regular';
	flex: 1;
	background-color: #8c52e5;
	align-items: center;
	justify-content: center;
`;

const Like = styled.Image`
	width: 200px;
	height: 200px;
`;

const Message = styled.Text`
	font-family: 'Roboto-Medium';
	color: #fff;
	font-size: 20px;
`;
const AccountCreated = ({
	navigation,
	route,
}: AuthNavProps<'PasswordChanged'>) => {
	useEffect(() => {
		setTimeout(() => {
			navigation.navigate('Login');
		}, 5000);
	}, []);
	return (
		<Container>
			<Like source={require('../assets/images/like.png')} />
			<Message>Senha trocada com sucesso!</Message>
		</Container>
	);
};

export default AccountCreated;
