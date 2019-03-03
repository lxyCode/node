var http = require('http');
var server = http.createServer();

server.on('request',function(req,res){
	 // 默认发送的数据为 utf8编码的内容，但是浏览器不知道这是utf8编码
	 // 默认使用操作系统的编码 gbk
	 // 在http协议中，content-type就是用来告知对方发送的数据类型
     let url = req.url;
	 if(url === '/plain'){
		 res.setHeader('Content-Type','text/plain; charset=utf-8');
	     res.end('星期日')
     }
     else if(url === '/html'){
         res.setHeader('Content-Type','text/html; charset=utf-8');
         res.end('<p>星期日</p>')
     }
})

server.listen(3000,function(){
	console.log('server is running')
})