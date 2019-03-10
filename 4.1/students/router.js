//路由模块根据不同的方法处理路由

var express = require('express')
var fs =require('fs')

var router = express.Router()
var student = require('./student')


router.get('/students',function(req,res){
	//第二个参数是可选的，可以设置编码

	student.find(function(err,data){
        if(err){
        	return res.status.send("err")
        }
        res.render('index.html',{
        	students:data
        })
	})
     
})


router.get('/students/new',function(req,res){
     res.render('new.html')
})



router.post('/students/new',function(req,res){

	 student.addStudent(req.body,function(err){
	 	if(err){
	 		return res.send("err")
	 	}
              res.redirect('/students')

	 })
})

router.get('/students/edit',function(req,res){
	  
     student.findStudent(req.query.id,function(err,data){

     	   if(err){
     	   	   return res.send("404")
     	   }
     	   
           res.render("edit.html",{
           	  student:data
           })

     })
})
//函数参数？？？


router.post('/students/edit',function(req,res){

	console.log(req.body)
     student.updata(req.body,function(err){
          if(err){
          	  return res.send("err")
          }
          res.redirect('/students')
     })
})


router.get('/students/delete',function(req,res){
    
         student.delete(req.query.id,function(err){
	     	 if(err){
	     	 	return res.send("err")
	     	 }
	     	 res.redirect('/students')
	     })   
})





module.exports=router