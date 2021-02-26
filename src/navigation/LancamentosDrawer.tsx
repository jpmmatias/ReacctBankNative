import React from 'react';
import { LancamentosParamList } from '../types';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DrawerContent } from '../components/DrawerContent';
import Lancamentos from '../screens/Lancamentos';

const Drawer = createDrawerNavigator<LancamentosParamList>();
const LancamentosDrawer: React.FC = ({}) => {
	return (
		<Drawer.Navigator
			drawerPosition='right'
			drawerType='front'
			drawerStyle={{ flexDirection: 'column-reverse' }}
			drawerContent={(props) => <DrawerContent {...props} />}
			initialRouteName='Lancamentos'
		>
			<Drawer.Screen name='Lancamentos' component={Lancamentos} />
		</Drawer.Navigator>
	);
};

export default LancamentosDrawer;
