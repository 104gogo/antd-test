import React, { Component } from 'react';

import Header from './Header/header';
import Menu from './Menu';
import Container from './Container';

class Layout extends Component {
	render() {
		return (
			<div>
		      	<Header />
		      	<Menu />
		      	<div className="fl">
		      		{ this.props.children }
		      	</div>
		    </div>
	    );
	}
}

export default Layout;