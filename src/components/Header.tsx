import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Dimensions,
} from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
const { width, height } = Dimensions.get('screen');
import { IHeader } from '../types';
//@ts-ignore
import styled from 'styled-components/native';
const Container = styled.View`
	width: ${width}px;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin-top: ${(height * 5) / 100}px;
	margin-bottom: ${(height * 5) / 100}px;
	padding-right: ${(width * 7) / 100}px;
	padding-left: ${(width * 7) / 100}px;
`;
const Hello = styled.Text`
	font-family: 'Roboto-Medium';
	font-size: 22px;
	color: #fff;
`;
const IconsContainer = styled.View`
	flex-direction: row;
`;
const Header = ({ name, openDrawer, goToHome }: IHeader) => {
	return (
		<Container>
			<Hello>Olá {name}</Hello>
			<IconsContainer>
				<TouchableOpacity onPress={goToHome}>
					<FontAwesome5
						style={{ marginRight: (width * 5) / 100 }}
						name='home'
						size={24}
						color='white'
					/>
				</TouchableOpacity>
				<TouchableOpacity onPress={openDrawer}>
					<FontAwesome5 name='user-circle' size={24} color='white' />
				</TouchableOpacity>
			</IconsContainer>
		</Container>
	);
};

export default Header;
