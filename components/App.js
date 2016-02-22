import React, { Component } from 'react';
import { Row, Col, Input } from 'antd';

const InputGroup = Input.Group;

class App extends Component {
	render() {
		return <Row>
		    <InputGroup>
		      	<Col span="6">
		        	<Input id="largeInput" size="large" placeholder="大尺寸" />
		      	</Col>
		      	<Col span="6">
		        	<Input id="defaultInput" placeholder="默认尺寸" />
		      	</Col>
		      	<Col span="6">
		        	<Input id="smallInput" placeholder="小尺寸" size="small" />
		      	</Col>
		    </InputGroup>
	  	</Row>;
	}
}

export default App;