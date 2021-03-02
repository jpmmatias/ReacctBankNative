import React from 'react';
import Toast from 'react-native-toast-message';
import Routes from './src/navigation/Routes';
import { store } from './src/store';
import { Provider } from 'react-redux';
import AuthProvider from './src/utils/auth/AuthProvider';
export default function App() {
	return (
		<>
			<Provider store={store}>
				<AuthProvider>
					<Routes />
				</AuthProvider>
				<Toast ref={(ref) => Toast.setRef(ref)} />
			</Provider>
		</>
	);
}
