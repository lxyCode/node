var express = require('express');
var app = express()

// 第一个为请求路径 第二个为目录
//app.use("/public/",express.static('./public/'))

// 当省略第一个参数的时候，直接访问 理解成默认为/
//app.use(express.static('/public/'))


// a 替换public请求
app.use("/a/",express.static('./public/'))



app.get("/",function(req,res){
	 res.send("hello w")
})

app.listen(3000,function(){
	console.log("running")
})


//router 

