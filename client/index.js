import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react'
import App from './components/App.jsx';
import store from './store'



render(
	<Provider store={store.store}>
		<PersistGate loading={null} persistor={store.persistor}>
  		<App />
		</PersistGate>
	</Provider>,
  document.getElementById('container')
);
