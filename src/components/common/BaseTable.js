import React, { Component } from 'react';
import { Table, Icon } from 'antd';

const columns = [{
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        render(text) {
            return <a href="#">{ text }</a>;
        }
    }, {
        title: '年龄',
        dataIndex: 'age',
        key: 'age',
    }, {
        title: '住址',
        dataIndex: 'address',
        key: 'address'
    }, {
        title: '操作',
        key: 'operation',
        render(text, record) {
            return (
                <span>
                    <a href="#">操作一{ record.name }</a>
                    <span className="ant-divider"></span>
                    <a href="#">操作二</a>
                    <span className="ant-divider"></span>
                    <a href="#" className="ant-dropdown-link"> 更多 <Icon type="down" />
                    </a>
                </span>
            );
        }
    }];


class BaseTable extends Component {
    render() {
        const { data } = this.props;

        return (
            <Table columns={columns} dataSource={data} />
        );
    }
}

export default BaseTable;