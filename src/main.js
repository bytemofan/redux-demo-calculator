import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import './assets/mobile-reset.scss';

import App from './components/App';
//import reducer from './reducers';

import reducers from './reducers/reducers';

const store = createStore(reducers);
render(
	<Provider store={store}>
		<App/>
	</Provider>,
	document.getElementById('app')
);
