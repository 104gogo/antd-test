import React, { Component } from 'react';
import { Form, Input, Button, Checkbox, Radio, Row, Col } from 'antd';

const FormItem = Form.Item;
const RadioGroup = Radio.Group;

class HorizontalForm extends Component {
  	handleSubmit(e) {
    	e.preventDefault();
    	console.log('收到表单值：', this.props.form.getFieldsValue());
  	}

  	render() {
    	const { getFieldProps } = this.props.form;

    	return (
      		<Form horizontal onSubmit={ this.handleSubmit.bind(this) }>
        		<FormItem 
                    label="用户名："
                    labelCol={{ span: 3 }}
                    wrapperCol={{ span: 20 }}>
          			<p className="ant-form-text" id="userName" name="userName">大眼萌 minion</p>
        		</FormItem>
        		<FormItem
                    label="密码："
                    labelCol={{ span: 3 }}
                    wrapperCol={{ span: 20 }}>
                    <Input type="password" { ...getFieldProps('pass') } placeholder="请输入密码" />
                </FormItem>
        		<FormItem
                    label="您的性别："
                    labelCol={{ span: 3 }}
                    wrapperCol={{ span: 20 }}>
                    <RadioGroup { ...getFieldProps('gender', { initialValue: "female" }) }>
                        <Radio value="male">男</Radio>
                        <Radio value="female">女</Radio>
                    </RadioGroup>
                </FormItem>
                <FormItem
                    label="备注："
                    labelCol={{ span: 3 }}
                    wrapperCol={{ span: 20 }}
                    help="随便写点什么">
                    <Input type="textarea" placeholder="随便写" {...getFieldProps('remark')} />
                </FormItem>
                <FormItem
                    wrapperCol={{ span: 14, offset: 3 }}>
                    <label>
                        <Checkbox {...getFieldProps('agreement')} />同意
                    </label>
                </FormItem>
                <Row>
                    <Col span="14" offset="3">
        		      <Button type="primary" htmlType="submit">登录</Button>
                    </Col>
                </Row>
      		</Form>
    	);
    }
}

export default Form.create({})(HorizontalForm);