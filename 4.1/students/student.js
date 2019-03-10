/*操作文件中的数据*/

//获取所有学生列表
//

var dbPath = './db.json'
var fs = require('fs')

exports.find=function(callback){
    fs.readFile(dbPath,'utf-8',function(err,data){
    	if(err){
    	    return callback(err)
    	}
        callback(null,JSON.parse(data).students)
        
    })
}

// 添加学生

exports.addStudent = function(student,callback){
     fs.readFile(dbPath,function(err,data){
          if(err){
              return callback(err)
          }

          var students = JSON.parse(data).students;
          
          student.id=students[students.length - 1]?students[students.length - 1].id+1
:0;          
          students.push(student)

          var ret = JSON.stringify({
          	students:students
          })

          fs.writeFile(dbPath,ret,function(err){
          	  if(err){
          	  	  return callback(err)
          	  }
          })

          callback(null)

     })
}


//查找学生

exports.findStudent = function(stdid,callback){
    console.log(stdid)
     fs.readFile(dbPath,function(err,data){
         if(err){
            return callback(err)
         }
         
         
         var students= JSON.parse(data).students
         
      
      
         var ret = students.find(function(item){
      
             return item.id === parseInt(stdid)
         }) 

        
        
         callback(null,ret)

     })
}

//更新学生

exports.updata = function(datas,callback){

      fs.readFile(dbPath,function(err,data){
           if(err){
               return callback(err)
           }

           var students = JSON.parse(data).students
           

           datas.id = parseInt(datas.id);

           var student = students.find(function(item){
                return item.id === datas.id
           })
           
        

           for(key in datas){
              student[key] = datas[key]
           }

           var ret = JSON.stringify({
               students:students
           })

           fs.writeFile(dbPath,ret,function(err){
                if(err){
                    return callback(err)
                }
            })

          callback(null)


      })

}
//删除学生

exports.delete =function(id,callback){
      
      fs.readFile(dbPath,function(err,data){
            if(err){
                 return callback(err)
            }
             
            var students = JSON.parse(data).students
                    
            var index = students.findIndex(function(item){

                  return item.id === parseInt(id)
            })

            students.splice(index,1);
            
            var ret = JSON.stringify({
              students:students
            })

            fs.writeFile(dbPath,ret,function(err){
                if(err){
                    return callback(err)
                }
            })

            callback(null)


      })
        

}