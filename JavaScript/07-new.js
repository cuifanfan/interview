// 1. 开辟一块内存空间创建对象
// 2. 将对象原型设置为构造函数的原型对象
// 3. 将this指向该对象
// 4. 盗用构造函数执行代码
// 5. 根据返回值类型判断返回内容

function myNew(targetFn, ...args) {
    const newObj = {};
    Object.setPrototypeOf(newObj, targetFn.prototype);
    const ans = targetFn.apply(newObj, args);
    return typeof ans === 'object' ? ans : newObj;
}