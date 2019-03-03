
//1. 加载http 模块
var http  = require('http');


//2. 使用http。crateServer()方法 创建服务器，返回server实例
 
var server = http.createServer();

//3. 提供服务：对数据的服务，收发请求，处理请求，反馈发送响应


server.on('request',function(req,res){
	console.log(req.url)
	//req.url获取端口号或者域名后面的地址
	//res.write("1");

	var url = req.url;
	var products = [
        {
           name:'苹果',
           price:8888
        },
        {
           name:'橘子',
           price:6666
        },
        {
           name:'香蕉',
           price:3333
        },
	]

	if(url === '/'){
       res.end("index")
	}else if( url == '/products'){
	   res.end(JSON.stringify(products)) // 响应内容只能是字符串和二进制
	}else{
	   res.end('404')
	}
	//res.end(req.url);
})



// 4. 绑定端口号，启动服务器
server.listen(8080,function(){
	 console.log('服务器已启动')
});