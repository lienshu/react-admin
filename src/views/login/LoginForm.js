import React, { Component, Fragment } from "react";
// 引用css样式
import './index.scss';
// antd
import { Form, Input, Button, Row, Col } from 'antd';
import { UserOutlined, UnlockOutlined } from '@ant-design/icons';
// 验证
import { validate_password } from '../../utils/validate';

class LoginForm extends Component{
    constructor(){
        super();
        this.state = {};
        // 方法一：构造器中声明
        // this.onFinish = this.onFinish.bind(this)
    }

    onFinish = (values) => {
        console.log('Received values of form: ', values);
    }; 

    toggleForm = () => {
        // 子组件接收父组件传递的方法
        // 子组件获取父组件的方法，通过关键字 this.props 获取
        this.props.switchForm("register");
        // alert(111)
    }

    render(){
        return (
            <Fragment>
                <div className="form-wrap">
                    <div>
                        <div className="form-header">
                            <h4 className="column">登录</h4>
                            <span onClick={this.toggleForm}>账号注册</span>
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
                            // onFinish = { ()=>this.onFinish } 
                            // 点击提交时，会触发onFinish方法
                            onFinish = { this.onFinish }  // 因为onFinish使用的是箭头函数的方法定义的，所以这里调用的时候不需要写成箭头函数，直接调用即可
                            >
                                {/* rules:校验规则 */}
                                {/* required:组件中提供的解密性验证规则，为true是必填项，不填会有提示信息message */}
                                {/* 账号 */}
                                {/* type:类型，常见有 string |number |boolean |url | email */}
                                <Form.Item name="username" rules={
                                    [ 
                                        { required: true, message: '邮箱不能为空!', }, 
                                        { type: "email", message: "邮箱格式不正确" }
                                    ]
                                } >
                                    <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="请输入邮箱" />
                                </Form.Item>
                                {/* 密码 */}
                                <Form.Item name="password" rules={
                                    [ 
                                        { required: true, message: '密码不能为空!', }, 
                                        // 可以用过自定义的方法进行校验密码格式:validator
                                        // { min: 6, max: 20, pattern: /^[0-9]*$/ ,message: "请输入大于6位小于20位数字+字母"}
                                        // 这里是自定义验证的方法，这里和antd3对比更简便
                                        // ({ getFieldValue }) => ({    // { getFieldValue } 通过ES6解构的方式编写，里面的数据都可以查看，只要把参数更改即可，这里面其实就是一个参数，只是把参数进行了解构
                                        // // ( context ) => ({    // ES6结构赋值， 将{ getFieldValue }参数改成context，然后打印context，即可查看里面的数据内容，使用context时需要把if判断注释，否则会报错
                                        // // 如果想要结果其他的数据，直接使用花括号，通过逗号隔开即可，如：{ getFildError, getFiledValue }
                                        //     validator(rule, value) {
                                        //         // console.log(context)
                                        //         // 如果想要获取某一个输入框的值，根据输入框的name取即可，将name值放在getFiledValue里面
                                        //         // getFieldValue: 获取对应字段名的值
                                        //         // getFieldValue('password')获取到的值和validator(rule, value)获取到的value值是一样的，那么为什么还要多写一步呢？
                                        //         // 当注册页，第一次输入密码和第二次输入密码作比较时，这时就要获取到第一次密码，可以通过getFieldValue('password')的方法获取到第一次输入密码的值
                                        //         console.log(getFieldValue('password'))
                                        //         // if (!value || getFieldValue('password') === value) {
                                        //         // 这里做判断如果密码的长度小于6，返回reject
                                        //         if ( value.length < 6 ) {
                                        //         // 自定义验证，需要通过promise返回值验证通过不通过
                                        //         // 验证通过，返回resolve
                                        //         // return Promise.resolve();
                                        //             return Promise.reject(new Error('密码不能小于6位'));
                                        //         }else{
                                        //             return Promise.resolve();
                                        //             // 验证不通过，返回reject
                                        //             // return Promise.reject(new Error('The two passwords that you entered do not match!'));
                                        //         }
                                        //     },
                                        // }),
                                        // { min: 6, message: "密码不能小于6位" },
                                        // { max: 20, message: "密码不能大于20位" },
                                        { pattern: validate_password, message: "请输入6-20位数字与字母" }
                                    ]
                                } >
                                    <Input prefix={<UnlockOutlined className="site-form-item-icon" />} placeholder="请输入密码" />
                                </Form.Item>
                                {/* 获取验证码 */}
                                <Form.Item name="code" rules={
                                    [ 
                                        { required: true, message: '验证码不能为空!' }, 
                                        { len:6, message: '请输入6位验证码!' }
                                    ]
                                } >
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
                                {/* 提交 */}
                                <Form.Item>
                                    {/* block:将按钮宽度调整为其父宽度的选项 */}
                                    {/* 传统的html的button类型只需要写成type，在这里需要写成htmlType */}
                                    <Button type="primary" htmlType="submit" className="login-form-button" block>登录</Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default LoginForm;