import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { FontAwesome5, MaterialCommunityIcons } from '@expo/vector-icons';
import { ITab } from '../types';

const Tab = ({ color, tab, onPress, icon }: ITab) => {
	return (
		<TouchableOpacity style={styles.container} onPress={onPress}>
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
		</TouchableOpacity>
	);
};

export default Tab;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		padding: 2,
	},
});
