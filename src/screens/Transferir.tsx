import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import Card from '../components/Card';
import Button from '../components/Button';
import { AppTabNavProps } from '../types';
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

const { width, height } = Dimensions.get('window');

const Container = styled.View`
	font-family: 'Roboto-Regular';
	flex: 1;
	background-color: #8c52e5;
	align-items: center;
`;

const Logo = styled.Image`
	height: 55px;
	width: 249px;
	margin-top: 40px;
	margin-bottom: 40px;
`;

const ButtonVoltar = styled.View`
	width: ${width}px;
	padding-left: ${(width * 10) / 100}px;
	margin-bottom: 10px;
`;

const CardBody = styled.View`
	width: ${(width * 70) / 100}px;
	height: ${(height * 60) / 100}px;
`;

const Input = styled.TextInput`
	padding: 5px;
	border-bottom-width: 1px;
	border-bottom-color: #878686;
`;

const Title = styled.Text`
	margin-top: -20px;
	text-align: center;
	margin-bottom: 60px;
	font-size: 21px;
`;

const Form = styled.View`
	margin-bottom: 37px;
`;

const ImageIcon = styled.View`
	width: 30px;
	height: 30px;
	margin-bottom: -5px;
`;

const Transferir = ({ navigation, route }: AppTabNavProps<'Transferir'>) => {
	navigation.setOptions({ tabBarVisible: false });
	const handleSubmit = () => {};
	const inputRef = useRef<TextInput>(null);
	return (
		<Container>
			<Logo source={require('../assets/images/logo-gamaacademy.png')} />
			<ButtonVoltar>
				<TouchableOpacity
					onPress={() => {
						navigation.goBack();
					}}
				>
					<Ionicons name='arrow-back' color='#fff' size={22} />
				</TouchableOpacity>
			</ButtonVoltar>
			<Card>
				<CardBody>
					<ImageIcon source={require('../assets/images/account.png')} />
					<Title>Transferências</Title>
					<Form>
						<Input
							placeholder='Destinatário'
							style={{ marginBottom: 20 }}
						></Input>
						<Input
							placeholder='Plano de conta a debitar'
							style={{ marginBottom: 20 }}
						></Input>
						<Input
							placeholder='Tipo de transação'
							style={{ marginBottom: 20 }}
						></Input>
						<Input
							placeholder='Valor da transferência'
							style={{ marginBottom: 50 }}
						></Input>
						<Button
							text='Realizar Transferência'
							handleClick={handleSubmit}
							textColor='#fff'
							backgroundColor='#68DE5A'
							textSize={22}
							widthSize={265.64}
							heightSize={56.97}
							textWeight='600'
						/>
					</Form>
				</CardBody>
			</Card>
		</Container>
	);
};

export default Transferir;
