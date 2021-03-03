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

// const styles = StyleSheet.create({
// 	container: {
// 		fontFamily: 'Roboto-Regular',
// 		flex: 1,
// 		backgroundColor: '#8C52E5',
// 		alignItems: 'center',
// 	},
// 	form: {
// 		marginBottom: 37,
// 	},
// 	logo: {
// 		height: 55,
// 		width: 249,
// 		marginTop: 40,
// 		marginBottom: 60,
// 	},
// 	cardBody: {
// 		width: (width * 70) / 100,
// 		height: (height * 66) / 100,
// 	},
// 	title: {
// 		marginTop: 5,
// 		fontSize: 21,
// 		textAlign: 'center',
// 		fontWeight: '500',
// 		color: '#1d1d1d',
// 		lineHeight: 24.61,
// 		marginBottom: 60,
// 	},
// 	link: {
// 		fontWeight: '500',
// 		fontSize: 13,
// 		marginBottom: 20,
// 		color: '#8C52E5',
// 		textAlign: 'center',
// 	},
// 	input: {
// 		padding: 5,
// 		borderBottomWidth: 1,
// 		borderBottomColor: '#878686',
// 	},
// });

export default AccountCreated;
