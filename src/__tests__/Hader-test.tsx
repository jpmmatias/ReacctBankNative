import React from 'react';
import { View } from 'react-native';
import { create } from 'react-test-renderer';
import Header from '../components/Header';

const tree = create(
	<Header
		name='User'
		openDrawer={() => {
			console.log('opend drwer');
		}}
		goToHome={() => {
			console.log('go to home');
		}}
	/>
);

test('Home', () => {
	expect(tree).toMatchSnapshot();
});
