import React from 'react';
import { StyleSheet, View } from 'react-native';
//@ts-ignore
import styled from 'styled-components/native';

const Container = styled.View`
	border-radius: 8px;
	background-color: #fff;
	margin-top: 6px;
	margin-bottom: 6px;
`;

const ContentWrapper = styled.View`
	margin: 27px 20px;
`;
const Card: React.FC = ({ children }) => {
	return (
		<Container
			style={{
				elevation: 3,
				shadowOffset: { width: 1, height: 1 },
				shadowColor: '#333',
				shadowOpacity: 0.3,
				shadowRadius: 2,
			}}
		>
			<ContentWrapper>{children}</ContentWrapper>
		</Container>
	);
};

export default Card;
