// require:
//  1. 加载文件模块并执行里面的代码
//  2. 拿到被加载文件模块导出的接口对象

//每个文件模块都提供一个对象：exports 默认为空对象
// 把所有需要被外部访问的成员挂载到exports上面
var ret = require('./b');
console.log(ret.age);
console.log(ret.add(3,4))