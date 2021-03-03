import {
	BottomTabBarProps,
	BottomTabBarOptions,
} from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Tab from './Tab';
//@ts-ignore
import styled from 'styled-components/native';
const { width } = Dimensions.get('screen');

const Wrapper = styled.View`
	position: absolute;
	bottom: 0;
	width: ${width}px;
	height: 100px;
	align-items: center;
	justify-content: center;
`;

const Container = styled.View`
	background-color: #68de5a;
	flex-direction: row;
	width: ${width}px;
	border-top-left-radius: 19px;
	border-top-right-radius: 19px;
	height: 100px;
	justify-content: space-between;
`;

const TabBar = ({
	state,
	navigation,
}: BottomTabBarProps<BottomTabBarOptions>) => {
	const { routes } = state;
	const [selected, setSelected] = useState('Home');

	const renderColor = (currentTab: string) =>
		currentTab === selected ? '#8C52E5' : '#ffff';

	const handlePress = (activateTab: string, index: number) => {
		if (activateTab === 'Transferir') {
			navigation.navigate('ModalTransferir');
		} else if (activateTab === 'Depositar') {
			navigation.navigate('ModalDepositar');
		} else {
			setSelected(activateTab);
			if (state.index !== index) {
				navigation.navigate(activateTab);
			}
		}
	};

	const getIconName = (tabName: string) => {
		switch (tabName) {
			case 'Depositar':
				return 'cash-plus';

			case 'Planos':
				return 'digital-tachograph';

			case 'Lançamentos':
				return 'money-check-alt';

			case 'Transferir':
				return 'exchange-alt';

			default:
				return 'icon';
		}
	};
	return (
		<Wrapper>
			<Container>
				{routes.map((route, index) => {
					if (route.name !== 'Home') {
						return (
							<Tab
								tab={route}
								icon={getIconName(route.name)}
								onPress={() => handlePress(route.name, index)}
								color={renderColor(route.name)}
								key={route.key}
							/>
						);
					}
				})}
			</Container>
		</Wrapper>
	);
};

export default TabBar;
