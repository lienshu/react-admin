import React, { Component, Fragment } from "react";
// 引用css样式
import './index.scss'
// antd
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';

class RegisterForm extends Component{
    constructor(){
        super();
        this.state = {};
    }

    onFinish = (values) => {
        console.log('Received values of form: ', values);
    }; 

    toggleFoem = () => {
        this.props.switchForm("login")
    }

    render(){
        return (
            <Fragment>
                <div className="form-wrap">
                    <div>
                        <div className="form-header">
                            <h4 className="column">账号注册</h4>
                            <span onClick={this.toggleFoem}>登录</span>
                        </div>
                        <div className="form-content">
                            <Form
                            name="normal_login"
                            className="login-form"
                            initialValues={{ remember: true, }}
                            // 方法一调用onFinish函数方法
                            // onFinish = {this.onFinish}
                            // 方法二：bind()绑定
                            // onFinish={this.onFinish.bind(this)}
                            // 方法三：箭头函数，在小括号中进行传参
                            onFinish = { ()=>this.onFinish }
                            >
                                {/* rules: 校验规则 */}
                                {/* required: 是否为必选字段, 组件中提供的解密性验证规则, 为true是必填项, 不填会有提示信息message */}
                                {/* 账号 */}
                                <Form.Item name="username" rules={
                                    [ 
                                        { required: true, message: '邮箱不能为空!', }, 
                                        { type: "email", message:'邮箱格式不正确'}
                                    ]
                                } >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入邮箱" />
                                </Form.Item>
                                {/* 密码 */}
                                <Form.Item name="password" rules={[ { required: true, message: '密码不能为空!', }, ]} >
                                    <Input prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="请输入密码" />
                                </Form.Item>
                                {/* 确认密码 */}
                                <Form.Item name="password" rules={[ { required: true, message: '再次确认密码不能为空!', }, ]} >
                                    <Input prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="请再次输入密码" />
                                </Form.Item>
                                {/* 获取验证码 */}
                                <Form.Item name="passwords" rules={[ { required: true, message: '请输入长度为6位的字符!', }, ]} >
                                    {/* gutter:栅格间隔 */}
                                    <Row gutter={13}>
                                        {/* span:栅栏占位格数，为0时相当于：display:none */}
                                        <Col span={15}>
                                            <Input prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="请输入验证码" />
                                        </Col>
                                        <Col span={9}>
                                            <Button type="danger" block>获取验证码</Button>
                                        </Col>
                                    </Row>
                                </Form.Item>
                                {/* 登录 */}
                                <Form.Item>
                                    {/* block:将按钮宽度调整为其父宽度的选项 */}
                                    <Button type="primary" htmlType="submit" className="login-form-button" block>注册</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default RegisterForm;