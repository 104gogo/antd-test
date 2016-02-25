import React, { Component } from 'react';

import Header from './Header/header';
import Menu from './Menu/menu';

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