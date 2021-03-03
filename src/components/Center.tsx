import React from 'react';
import { View } from 'react-native';
//@ts-ignore
import styled from 'styled-components/native';

interface CenterProps {}

const Container = styled.View`
	flex: 1;
	background-color: #8c52e5;
	align-items: center;
	justify-content: center;
`;

export const Center: React.FC<CenterProps> = ({ children }) => {
	return <Container>{children}</Container>;
};
