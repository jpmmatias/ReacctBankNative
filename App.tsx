import React from 'react';
import Toast from 'react-native-toast-message';
import Routes from './src/navigation/Routes';
import { store } from './src/store';
import { Provider } from 'react-redux';
export default function App() {
	return (
		<>
			<Provider store={store}>
				<Routes />
				<Toast ref={(ref) => Toast.setRef(ref)} />
			</Provider>
		</>
	);
}
