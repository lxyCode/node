
//1. 加载http 模块
var http = require('http');

//2. 使用http。crateServer()方法 创建服务器，返回server实例
 
var server = http.createServer();

//3. 提供服务：对数据的服务，收发请求，处理请求，反馈发送响应
// request 需要两个参数
// Request 请求对象，可以获取请求信息
// Respones 响应对象 用来给客户端响应消息

server.on('request',function(req,rep){
     console.log('收到客户端请求，路径为：'+req.url);
     //respones 对象的方法 write 用来发送响应数据
     // write可以使用多次，但是需要end来结束响应，否则客户端会一直等待
     rep.write('hello');
      rep.write('  nodejs!');
     rep.end()//用来结束响应
}) 

// 4. 绑定端口号，启动服务器
server.listen(8080,function(){
	 console.log('服务器已启动')
});