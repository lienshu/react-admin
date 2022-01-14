// const proxy = require("http-proxy-middleware");
const {createProxyMiddleware} = require('http-proxy-middleware');

module.exports = function(app){
    // 可以配置多个跨域的执行
    // app.use(proxy("/manage",{
    //     target: "http://www.web-jshtml.cn/api/react", // 配置你要请求的服务地址
    //     changeOrigin: true,
    // }))
    // app.use(proxy("/manage/api",{
    //     target: "http://admintest.happymmall.com:7000",
    //     changeOrigin: true,
    // }))
    app.use(createProxyMiddleware('/api', { target: 'http://localhost:8000/' }));

}