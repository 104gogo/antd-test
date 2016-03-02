import React, { Component } from 'react';
import { Table, Icon, Input, Select } from 'antd';

const columns = [{
        title: '姓名',
        dataIndex: 'name',
        key: 'name',
        render(text) {
            return <Input />;
        }
    }, {
        title: '性别',
        dataIndex: 'gender',
        key: 'gender',
        render(text) {
            return (
                <Select showSearch
                    style={{ width: 200 }}
                    placeholder="请选择人员"
                    defaultValue="female"
                    optionFilterProp="children"
                    notFoundContent="无法找到"
                    searchPlaceholder="输入关键词">
                    <Option value="male">男</Option>
                    <Option value="female">女</Option>
                </Select>
            );
        }
    }, {
        title: '住址',
        dataIndex: 'address',
        key: 'address',
        render(text) {
            return <Input />;
        }
    }, {
        title: '操作',
        key: 'operation',
        render(text, record) {
            return (
                <span>
                    <a href="#">操作一</a>
                    <span className="ant-divider"></span>
                    <a href="#">操作二</a>
                    <span className="ant-divider"></span>
                    <a href="#" className="ant-dropdown-link"> 更多 <Icon type="down" />
                    </a>
                </span>
            );
        }
    }];


class EditTable extends Component {
    render() {
        const { data } = this.props;
        const rowKey = function(record) {
            return record.key;
        };

        const param = {
            dataSource: data,
            rowKey,
            columns,
            pagination: {
                onChange: function(page) {
                    
                }.bind(this)
            }
        };

        return (
            <Table  { ...param } />
        );
    }
}

export default EditTable;