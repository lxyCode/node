var fs = require('fs');
var http = require('http');
var server = http.createServer();

server.on('request',function(req,res){
	 
     let url = req.url;
     fs.readFile('./resource/index.html',function(error,data){
          if(error){
          	 res.setHeader('Content-Type','text/plain; charset=utf-8');
             res.end("读取错误")
          }else{
          	 res.setHeader('Content-Type','text/html; charset=utf-8');
          	 res.end(data)
          }
     })
	 
})

server.listen(3000,function(){
	console.log('server is running')
})