import React from 'react'
// 导入路由
import { Switch,Route,BrowserRouter } from 'react-router-dom';
// 引用组件
import Login from './views/login/index'

// 使用ES6自己声明一个组件
class App extends React.Component {
  // 初始化钩子函数
  constructor(props){
    super(props);
    this.state = {};
  }
  // 渲染内容
  render(){
    return(
      // 在return中渲染路由
      <BrowserRouter>
          <Switch>
            <Route exact component={Login} path="/" />
          </Switch>
        </BrowserRouter>
    )
  }
}

export default App;
