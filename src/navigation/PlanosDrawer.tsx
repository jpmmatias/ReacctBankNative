import React from 'react';
import Planos from '../screens/Planos';
import { PlanosParamList } from '../types';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from '../components/DrawerContent';

const Drawer = createDrawerNavigator<PlanosParamList>();
const PlanosDrawer: React.FC = ({}) => {
	return (
		<Drawer.Navigator
			drawerPosition='right'
			drawerType='front'
			drawerStyle={{ flexDirection: 'column-reverse' }}
			drawerContent={(props) => <DrawerContent {...props} />}
			initialRouteName='Planos'
		>
			<Drawer.Screen name='Planos' component={Planos} />
		</Drawer.Navigator>
	);
};

export default PlanosDrawer;
