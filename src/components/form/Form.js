import React, { Component } from 'react';
import { Row, Col } from 'antd';
import InlineForm from '../Common/InlineForm';
import HorizontalForm from '../Common/HorizontalForm';
import InputCompose from '../Common/InputCompose';
import Validate from '../Common/Validate';
import './form.scss';

class Form extends Component {

	render() {

		return (
			<div className="form">
				<Row>
					<Col span="12">
						<div className="box">
					      	<InlineForm />
					    </div>
				    </Col>
				    <Col span="12">
					    <div className="box">
					    	<HorizontalForm /> 
					    </div>
				    </Col>
				    <Col span="12">
					    <div className="box">
					    	<InputCompose /> 
					    </div>
				    </Col>
				    <Col span="12">
					    <div className="box">
					    	<Validate /> 
					    </div>
				    </Col>
			    </Row>
		    </div>
	    );
	}
}

export default Form;