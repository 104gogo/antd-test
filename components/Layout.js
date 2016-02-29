import React, { Component } from 'react';

import Header from './header/Header';
import Menu from './menu/Menu';

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