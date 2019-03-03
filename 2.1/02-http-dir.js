var http = require('http')
var fs = require('fs')

var server = http.createServer()

server.on('request',function(req,res){
	var url = req.url;

	fs.readFile('./template.html',function(err,data){
		 var result;
		 if(err){
		 	 return res.end('404')
		 }
          
         fs.readdir('./www',function(err,files){
             if(err){
             	return res.end('not www')
             }
             
         })


         
		 res.end(files)


	})
})

server.listen(3000,function(){
	 console.log('running')
})

