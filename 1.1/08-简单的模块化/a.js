// require是一个方法，用来加载模块
// 模块有三种
// 具名的核心模块 例如 fs,http
// 用户自己编写的文件模块 相对路径必须为./
// node 中没有全局作用域,只有模块作用域或者文件作用域

var foo ="aaa";
console.log('start a')
require('./b.js')//或者 require('./b')
console.log('end a')
console.log('foo的值是：'+foo);
