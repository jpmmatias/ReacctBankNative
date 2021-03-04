import React from 'react';
import { View } from 'react-native';
import { create } from 'react-test-renderer';
import { Center } from '../components/Center';

const tree = create(
	<Center>
		<View></View>
	</Center>
);

test('center', () => {
	expect(tree).toMatchSnapshot();
});
