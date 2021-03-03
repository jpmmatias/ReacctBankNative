import {
	BottomTabBarProps,
	BottomTabBarOptions,
} from '@react-navigation/bottom-tabs';
import React, { useState } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import Tab from './Tab';

const { width } = Dimensions.get('screen');

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
		<View style={styles.wrapper}>
			<View style={styles.container}>
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
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	wrapper: {
		position: 'absolute',
		bottom: 0,
		width,
		height: 100,
		alignItems: 'center',
		justifyContent: 'center',
	},
	container: {
		backgroundColor: '#68DE5A',
		flexDirection: 'row',
		width,
		borderTopStartRadius: 19,
		borderTopEndRadius: 19,
		height: 100,
		justifyContent: 'space-between',
	},
});

export default TabBar;
