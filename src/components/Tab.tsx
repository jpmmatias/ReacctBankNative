import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { ITab } from '../types';

//@ts-ignore
import styled from 'styled-components/native';

const Container = styled.TouchableOpacity`
	flex: 1;
	align-items: center;
	justify-content: center;
	padding: 2px;
`;

const Tab = ({ color, tab, onPress, icon }: ITab) => {
	return (
		<Container onPress={onPress}>
			{icon !== 'cash-plus' ? (
				<FontAwesome5 name={icon} size={24} color={color} />
			) : (
				<MaterialCommunityIcons name={icon} size={24} color={color} />
			)}
			<Text
				style={{
					color: color,
					fontFamily: 'Roboto-Medium',
					marginTop: 12,
					fontSize: 12,
				}}
			>
				{tab.name}
			</Text>
		</Container>
	);
};

export default Tab;
