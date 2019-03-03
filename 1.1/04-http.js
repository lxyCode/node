//创建服务器
// 核心模块 http
// http 负责创建编写服务器

//1. 加载http 模块
var http = require('http');

//2. 使用http。crateServer()方法 创建服务器，返回server实例
 
var server = http.createServer();

//3. 提供服务：对数据的服务，收发请求，处理请求，反馈发送响应
// 注册 request 请求事件
// 客户端请求后，自动触发服务器的request请求事件，然后执行回调函数
server.on('request',function(){
     console.log('收到客户端的请求了！')
}) 

// 4. 绑定端口号，启动服务器
server.listen(8080,function(){
	 console.log('服务器已启动')
});