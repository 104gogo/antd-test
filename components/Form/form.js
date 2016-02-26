import React, { Component } from 'react';
import InlineForm from '../Common/InlineForm';
//import HorizontalForm from '../Common/HorizontalForm';
import './form.scss';

class Form extends Component {

	render() {

		return (
			<div className="form">
				<div className="box">
			      	<InlineForm />
			    </div>
			    <div className="box">
			    
			    </div>
		    </div>
	    );
	}
}

export default Form;