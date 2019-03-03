var fs = require('fs');

//第一个参数为要写入的文件路径
// 第二个参数为文件内容
// 第三个参数为回调函数

// error 成功：文件写入成功 error 为 null
//       失败：文件写入失败 error 为错误对象
fs.writeFile('./data/hard.txt','hard learn!',function(error){
	if(error){
          console.log('写入失败')
	}else{
		 console.log('写入成功')
	}
   
})