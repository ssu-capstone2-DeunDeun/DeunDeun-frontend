import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import { createStore } from 'redux';
import rootReducer, { rootSaga } from 'modules/index';
import { composeWithDevTools } from '../node_modules/redux-devtools-extension';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { ACCESS_TOKEN } from 'constants/index';
import { getUserInfo } from 'modules/currentUserInfo';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)));

function loadUser() {
	try {
		const user = localStorage.getItem(ACCESS_TOKEN);
		console.log('user', user);
		if (!user) return;

		store.dispatch(getUserInfo());
	} catch (e) {
		console.log('localstorage is not working!');
	}
}

sagaMiddleware.run(rootSaga);
loadUser();

ReactDOM.render(
	<Provider store={store}>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</Provider>,
	document.getElementById('root')
);
