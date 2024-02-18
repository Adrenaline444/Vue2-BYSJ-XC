//导入express
const express = require('express')
//创建服务器的实例对象
const app = express()
//导入并配置cors中间件
const cors = require('cors')
//导入用于将客户端发送过来的jwt字符串，解析还原成json对象的包
const expressJwt = require('express-jwt')
//全局变量
const public_var = require('./public_var/index')

//配置请求头
app.all('*',function (req,res,next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header('Access-Control-Allow-Headers', 'Authorization');
    next();
})

//设置跨域请求
app.use(cors())
//接受格式
app.use(express.json())

//配置解析表单数据的中间件，注意：这个中间件，只解析 application/x-www-form-urlencoded
app.use(express.urlencoded({express:false}))

//导入并使用用户路由模块
const userRouter = require('./router/router')
//配置接口名
app.use('/admin',userRouter)

//解密,配置成功后挂载到app.user
app.use(expressJwt({
    secret:public_var.key,
    algorithms:['HS256'],   //一定添加这段代码不然报错
}).unless({
    //指定路径请求不经过token解析
    path:[/^\/admin\//]
}))

//查询信息模块
const Userinfo = require('./token/index')
app.use('/api',Userinfo)

//处理全局jwt捕获错误中间件  jwt身份过期
app.use((err,req,res,next)=>{
    //这是由token解析失败
    if(err.name === 'UnauthorizedError'){
        return res.send({
            status:401,
            msg:'无效的token'
        })
    }
    res.send({
        status:500,
        msg:'未知错误'
    })
})

//启动服务器
app.listen(8090,()=>{
    console.log('success run service：http://localhost:8090')
})
