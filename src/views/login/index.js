import React, { Component } from "react";
// 引用css样式
import './index.scss'

// 组件
import LoginForm from "./LoginForm"
import RegisterForm from './RegisterForm'

// 登录
class Login extends Component{
    constructor(){
        super();
        this.state = {
            // 定义一个参数，存放form表单的类型，默认是登录
            formType:"login"
        };
    }   
    // 通过监听switchForm携带的属性是否变化来更新formType属性值
    switchForm = (value) => {
        this.setState({formType:value})
        console.log(value)
    }

    render(){
        return <div>
            {/* 使用三木进行简单的判断 */}
            {/* 将父组件传递给子组件的方法通过属性的方式传递 */}
            { 
                this.state.formType === "login" 
                ? <LoginForm switchForm={this.switchForm} /> 
                : <RegisterForm switchForm={this.switchForm} /> 
            }
        </div>
    }
}

export default Login;