import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Row, Col } from 'antd';
import * as TableActions from '../../actions/table';
import BaseTable from '../common/BaseTable';
import PageTable from '../common/PageTable';
import EditTable from '../common/EditTable';
import './table.scss';

class Table extends Component {
	render() {
		const data1 = [{
		    key: '1',
		    name: '胡彦斌',
		    age: 32,
		    address: '西湖区湖底公园1号'
		}, {
		    key: '2',
		    name: '胡彦祖',
		    age: 42,
		    address: '西湖区湖底公园2号'
		}, {
		    key: '3',
		    name: '李大嘴',
		    age: 32,
		    address: '西湖区湖底公园3号'
		}];

		const { table, actions } = this.props;

		return (
			<div className="table">
				<Row>
					<Col span="12">
						<div className="box">
					      	<BaseTable data={ data1 } />
					    </div>
				    </Col>
				    <Col span="12">
						<div className="box">
					      	<PageTable { ...table.pageTableData } actions={ actions } />
					    </div>
				    </Col>
				    
				    
			    </Row>
			    <Row>
			    	<Col span="12">
						<div className="box">
					      	<EditTable data={ data1 } />
					    </div>
				    </Col>
			    </Row>
		    </div>
	    );
	}
}

function mapStateToProps(state) {
  	return {
    	table: state.table.toJS()
  	}
}

function mapDispatchToProps(dispatch) {
  	return {
    	actions: bindActionCreators(TableActions, dispatch)
  	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Table);