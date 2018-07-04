import ReactDOM from 'react-dom';
import React from 'react';
import App from '@/components/App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux';
import reducers from '@/reducers';

const store = createStore(
	reducers,
	applyMiddleware(thunk),
);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.querySelector('#app')
);