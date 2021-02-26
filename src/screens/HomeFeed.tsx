import React, { useContext, useRef, useState, useEffect } from 'react';

import { Center } from '../components/Center';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { HomeDrawerNavProps } from '../types';

function HomeFeed({ navigation }: HomeDrawerNavProps<'HomeFeed'>) {
	return (
		<Center>
			<Text>Home Feed</Text>
		</Center>
	);
}
export default HomeFeed;
