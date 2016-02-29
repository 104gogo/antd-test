import React, { Component } from 'react';
import { Row, Col } from 'antd';
import BaseTable from '../common/BaseTable';
import './table.scss';

class Table extends Component {
	render() {
		return (
			<div className="table">
				<Row>
					<Col span="12">
						<div className="box">
					      	<BaseTable />
					    </div>
				    </Col>
			    </Row>
		    </div>
	    );
	}
}

export default Table;