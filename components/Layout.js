import React, { Component } from 'react';

import Header from './Header';
import Menu from './Menu';
import Container from './Container';

class Layout extends Component {
	render() {
		return (
			<div>
		      	<Header />
		      	<Menu />
		      	{ this.props.children }
		    </div>
	    );
	}
}

export default Layout;