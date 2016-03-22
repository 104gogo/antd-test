import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from 'react-router!./components/Layout';
import Index from 'react-router!./components/index/Index';
import Container from 'react-router!./components/container/Container';
import Form from 'react-router!./components/form/Form';
import Table from 'react-router!./components/table/Table';

export default (
	<Route path="/" component={ Layout }>
		<IndexRoute component={ Index } />
		<Route path="app" component={ Container }>
			<Route path="form" component={ Form } />
			<Route path="table" component={ Table } />
		</Route>
	</Route>
);