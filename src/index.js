import React from 'react';
import { render } from 'react-dom';
import App from './components/App';

// style imports
import 'bootstrap/dist/css/bootstrap.min.css';

// redux imports
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import rootReducer from './reducers';

// configure global store
const store = configureStore({
	reducer: rootReducer
});

render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);