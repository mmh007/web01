const express = require('express');
const bodyParser = require('body-parser');
const user = require('./routes/user.js');
const demo = require('./routes/demo.js');
//创建web服务器
var server = express();
server.listen(3000);
//托管静态资源到public目录下
server.use(express.static('public'));
//使用body-parser中间件将post请求数据分析为对象
//注意：一定要写在路由的前面
server.use(bodyParser.urlencoded({
    extended:false
}));

//把用户路由器挂载到/user
server.use('/user',user);
//注册路由器挂载
 server.use('/demo',demo);
