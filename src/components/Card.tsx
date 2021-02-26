import React from 'react';
import { StyleSheet, View } from 'react-native';

const Card: React.FC = ({ children }) => {
	const { card, cardContent } = styles;
	return (
		<View style={card}>
			<View style={cardContent}>{children}</View>
		</View>
	);
};

const styles = StyleSheet.create({
	card: {
		borderRadius: 8,
		elevation: 3,
		backgroundColor: '#fff',
		shadowOffset: { width: 1, height: 1 },
		shadowColor: '#333',
		shadowOpacity: 0.3,
		shadowRadius: 2,
		marginHorizontal: 4,
		marginVertical: 6,
	},
	cardContent: {
		marginHorizontal: 27,
		marginVertical: 20,
	},
});

export default Card;
