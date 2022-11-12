const session = require('express-session')
const express = require('express')

const app = express()

// 配置express-session中间件
app.use(session({
    secret: 'rwt',  // secret 属性的值可以为任意字符串
    resave: 'false',  //固定写法
    saveUninitialized: 'true',  //固定写法
}))

// 注意：只有当配置express-session中间件，才能通过req.session来访问和使用session对象