import React, { Component } from 'react';
import { Row, Col } from 'antd';
import './header.scss';

class Header extends Component {
	render() {
		return (
			<div className="header">
				<div className="fl oh">
					<i className="antd-bg"></i>
				</div>
				<span className="fl">Ant Design</span>
			</div>
	    );
	}
}

export default Header;