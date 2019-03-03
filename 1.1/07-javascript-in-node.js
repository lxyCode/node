//核心模块
//node为JavaScript提供了很多服务器级别的API，这些API都被包装到了一个具名的核心模块中
// 文件操作 fs 模块，http服务构建的http模块，path路径操作模块，os操作系统信息模块
//使用核心模块 require() 用来加载模块
//

var os = require('os'); // 用来获取操作系统信息
var path = require('path'); //用来操作路径

console.log(os.totalmem()/1024/1024/1024)

console.log(path.extname('/d/d/d3.jpg')) //获取后缀名