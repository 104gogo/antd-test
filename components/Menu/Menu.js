import React, { Component } from 'react';
import { Link } from 'react-router';
import './menu.scss';

class Menu extends Component {
	render() {
		return (
			<ul className="menu">
				<Link to='app/form'><li>Form</li></Link>
				<Link to='app/table'><li>Table</li></Link>
			</ul>
	    );
	}
}

export default Menu;