// npm i art-template 模板引擎
// 需要的模块中加载 require('art-template') 下载包的名字
// 查文档使用的API

// 模板引擎 诞生于服务器领域，后来发展到了前端
var http = require('http')
var fs   = require('fs')
var template = require('art-template');

var server = http.createServer()

server.on('request',function(req,res){
    fs.readFile('./template.html',function(err,data){

    	 var ret = template.render(data.toString(),{
	          name:"王刚123"
         })
         res.setHeader('Content-Type','text/html; charset=utf-8')
         res.end(ret)
    })

})




server.listen(3000,function(){
	console.log('running')
})
