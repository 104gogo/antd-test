import React from 'react';
import { render } from 'react-dom';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';

import './public/css/antd.css';
import './public/css/app.scss';

import Layout from './components/Layout';
import Container from './components/container/Container';
import Form from './components/form/Form';
import Table from './components/table/Table';

const history = useRouterHistory(createHashHistory)({ queryKey: false });
const routes = (
	<Route path="/" component={ Layout }>
		<Route path="app" component={ Container }>
			<Route path="form" component={ Form } />
			<Route path="table" component={ Table } />
		</Route>
	</Route>
);

render(<Router history={ history } routes={ routes } />, document.getElementById('root'));