var express = require('express')
var fs = require('fs')
var app = express()
var bodyParser = require('body-parser')

var router = require('./router')



//npm install -S art-template express-art-template
app.engine('html',require('express-art-template'))

app.use("/public/",express.static("./public/"))
app.use('/node_modules/',express.static('./node_modules/'))

//在路由之前使用
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use(router)
//路由设计
// 请求方法，请求路径，get参数 ，post 参数,作用
//  GET      /                       渲染首页
//  GET      /student/news           渲染添加学生页面
//  POST     /students/new       name,age...  添加新学生
//  GET      /students/edit id       渲染编辑页面
//  POST     /students/edit      name,age... 处理编辑请求
//  GET      /students/delete



app.listen(3000,function(){
	console.log("run")
})