
// 将所有的html文件放入views中
// 为了统一处理静态资源，将静态资源都存放到public中
var http = require('http')
var fs = require('fs')
var url = require('url')
var art = require('art-template')


var comments = [
  { name:"徐霞",msg:"我很美",data:"2018-04-03"},
 
]
var server = http.createServer();

server.on('request',function (req,res) {
	  var parseObj = url.parse(req.url,true);
	  var pathname = parseObj.pathname

	  
		  if(pathname === '/') {
	          fs.readFile('./views/index.html',function(err,data){
	          	  if(err){
	          	  	 return res.end('404')
	          	  }

	          	  var ret = art.render(data.toString(),{comments:comments})
	              
	          	  res.end(ret)
	          })
	       } else if (pathname === '/post') {
	       	  fs.readFile('./views/post.html',function(err,data){
                  if(err){
                    return res.end('404')
                  }
                  res.end(data)
	       	  }) 

	       } else if (pathname === '/pinglun') {

				var date = new Date();
				var current_date = date.getDate() < 10 ? "0"+ date.getDate() : date.getDate() ; 
				var current_month = date.getMonth() + 1 < 10 ? "0"+ (date.getMonth() + 1) : date.getMonth() + 1;
				var current_year = date.getFullYear();
             
                var comment = parseObj.query
                comment.data = current_year +"-"+ current_month+"-"+ current_date
                comments.unshift(comment)
                res.statusCode = 302 
                res.setHeader('Location','/')
                res.end()
                              
	       } else if (pathname.indexOf('/public/') === 0 ) {

              fs.readFile('.'+pathname,function(err,data){
              	  if(err){
              	  	return res.end('404')
              	  }
          
              	  res.end(data)
              })

	       } else {
	       	   fs.readFile('./views/404.html',function(err,data){
	       	   	   if(err){
	       	   	   	    return res.end('404')
	       	   	   }
       
                   res.end(data)
	       	   })
	       }
	
}).listen(3000,function(){
	console.log('running!')
})