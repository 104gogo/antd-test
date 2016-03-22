import React from 'react';
import { render } from 'react-dom';
import { Router, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import { Provider } from 'react-redux';
import configureStore from './store/configureStore';
import routes from './routes';

import './static/css/antd.css';
import './static/css/app.scss';

const store = configureStore();
const history = useRouterHistory(createHashHistory)({ queryKey: false });

render(
	<Provider store={ store }>
		<Router history={ history } routes={ routes } />
	</Provider>, 
	document.getElementById('root')
);
