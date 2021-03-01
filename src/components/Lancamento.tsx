import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
export interface ILancamento {
	data: string;
	valor: number;
}

const Lancamento = ({ data, valor }: ILancamento) => {
	return (
		<View style={styles.wrapper}>
			<View style={styles.divisor}></View>
			<Text
				style={[styles.textValue, { color: valor < 0 ? '#F45F5F' : '#34A6E7' }]}
			>
				{valor}
			</Text>
			<Text style={styles.textData}>{data}</Text>
		</View>
	);
};

export default Lancamento;

const styles = StyleSheet.create({
	wrapper: {
		justifyContent: 'center',
		alignItems: 'center',
		marginBottom: 29,
	},
	divisor: {
		width: 1,
		height: 20,
		backgroundColor: '#878686',
		marginBottom: 10,
	},
	textValue: {
		fontFamily: 'Roboto-Bold',
		fontSize: 28,
		marginBottom: 3,
	},
	textData: {
		fontFamily: 'Roboto-Medium',
		fontSize: 15,
		color: '#9B9B9B',
	},
});
