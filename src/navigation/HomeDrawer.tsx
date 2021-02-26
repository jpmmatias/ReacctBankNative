import React from 'react';
import UserInfoScreen from '../screens/UserInfoScreen';
import HomeFeed from '../screens/HomeFeed';
import { HomeParamList } from '../types';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from '../components/DrawerContent';

const Drawer = createDrawerNavigator<HomeParamList>();
const HomeStack: React.FC = ({}) => {
	return (
		<Drawer.Navigator
			drawerPosition='right'
			drawerType='front'
			drawerStyle={{ flexDirection: 'column-reverse' }}
			drawerContent={(props) => <DrawerContent {...props} />}
			initialRouteName='HomeFeed'
		>
			<Drawer.Screen name='HomeFeed' component={HomeFeed} />
		</Drawer.Navigator>
	);
};

export default HomeStack;
