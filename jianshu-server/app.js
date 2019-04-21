const express = require("express")
var bodyParser = require('body-parser')
var session = require('express-session')
const router = require("./router")
const app = express();

app.use(bodyParser.urlencoded({extended: false}))
// parse application/json
app.use(bodyParser.json())

// 在 Express 这个框架中，默认不支持 Session 和 Cookie
// 但是我们可以使用第三方中间件：express-session 来解决
// 1. npm install express-session
// 2. 配置 (一定要在 app.use(router) 之前)
// 3. 使用
//    当把这个插件配置好之后，我们就可以通过 req.session 来发访问和设置 Session 成员了
//    添加 Session 数据：req.session.foo = 'bar'
//    访问 Session 数据：req.session.foo

app.use(session({
    // 配置加密字符串，它会在原有加密基础之上和这个字符串拼起来去加密
    // 目的是为了增加安全性，防止客户端恶意伪造
    secret: 'jianshu',
    resave: false,
    saveUninitialized: false // 无论你是否使用 Session ，我都默认直接给你分配一把钥匙
}))
//配置路由
app.use(function (req, res,next) {
    res.setHeader('Access-Control-Allow-Origin', '*')
    next()
})
app.use(router)

app.use(function (err, req, res, next) {
    res.status(500).json({
        err_code: 500,
        status: 0,
        message: err.message
    })
})

app.listen(8888, function () {
    console.log("server is running at port 8888...")
})
