import React, { useEffect } from 'react';
import { Dimensions } from 'react-native';
import { AuthNavProps } from '../types';
import { Center } from '../components/Center';
const { width, height } = Dimensions.get('window');
//@ts-ignore
import styled from 'styled-components/native';

const Like = styled.Image`
	height: 162px;
	width: 162px;
	margin-bottom: 30px;
`;

const Title = styled.Text`
	font-family: 'Roboto-Medium';
	color: #fff;
	font-size: 20;
`;
const AccountCreated = ({
	navigation,
	route,
}: AuthNavProps<'AccountCreated'>) => {
	useEffect(() => {
		setTimeout(() => {
			navigation.navigate('Login');
		}, 5000);
	}, []);
	return (
		<Center>
			<Like source={require('../assets/images/like.png')} />
			<Title>Conta criada com sucesso!</Title>
		</Center>
	);
};

export default AccountCreated;
