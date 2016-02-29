import React, { Component } from 'react';
import InlineForm from '../Common/InlineForm';
import HorizontalForm from '../Common/HorizontalForm';
import { Row, Col } from 'antd';
import './form.scss';

class Form extends Component {

	render() {

		return (
			<div className="form">
				<Row>
					<Col span="8">
						<div className="box">
					      	<InlineForm />
					    </div>
				    </Col>
			    </Row>
			    <Row>
				    <Col span="8">
					    <div className="box">
					    	<HorizontalForm /> 
					    </div>
				    </Col>
			    </Row>
		    </div>
	    );
	}
}

export default Form;