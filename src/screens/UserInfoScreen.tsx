import React, { useContext, useRef, useState, useEffect } from 'react';

import { Center } from '../components/Center';
import { Text } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { HomeDrawerNavProps } from '../types';

function UserIndoScreen({ navigation }: HomeDrawerNavProps<'UserInfoScreen'>) {
	return (
		<Center>
			<Text>User Info Screen</Text>
		</Center>
	);
}
export default UserIndoScreen;
