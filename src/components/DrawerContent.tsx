import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import {
	DrawerContentScrollView,
	DrawerItem,
	DrawerContentComponentProps,
} from '@react-navigation/drawer';

export function DrawerContent(props: DrawerContentComponentProps) {
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
			}}
		>
			<Text>Dados do Usuárioo</Text>
		</View>
	);
}
