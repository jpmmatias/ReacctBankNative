import React from 'react';
import { View, StyleSheet, Text, Button } from 'react-native';
import {
	DrawerContentScrollView,
	DrawerItem,
	DrawerContentComponentProps,
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch } from 'react-redux';
import { Logout } from '../store/modules/user/action';
import { useStore } from 'react-redux';

export function DrawerContent(props: DrawerContentComponentProps) {
	const dispatch = useDispatch();
	const store = useStore();
	return (
		<View
			style={{
				flex: 1,
				justifyContent: 'center',
			}}
		>
			<Text>Dados do Usuárioo</Text>
			<Button
				title='Logout'
				onPress={() => {
					AsyncStorage.clear();
					dispatch(Logout());
					console.log(store.getState());
					props.navigation.closeDrawer();
				}}
			/>
		</View>
	);
}
