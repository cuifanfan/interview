function deepClone(obj, weakMap = new WeakMap()) {
    // 1. null 和 undefined 不进行深拷贝
    if (obj == null) {
        return obj;
    }
    // 2. Date对象
    if (obj instanceof Date) {
        return new Date(obj);
    }
    // 3. RegExp对象
    if (obj instanceof RegExp) {
        return new RegExp(obj);
    }
    // 4. 函数和普通值
    if (typeof obj !== 'object') {
        return obj;
    }
    // 5. 对象

    if (weakMap.has(obj)) {
        return weakMap.get(obj);
    }
    weakMap.set(obj, cloneObj);
    const cloneObj = new obj.construtor();
    // 获取对象自身所有属性（包含可枚举和不可枚举）
    const objKeys = [...Object.getOwnPropertyNames(), ...Object.getOwnPropertySymbols()];
    for (let key of objKeys) {
        cloneObj[key] = deepClone(cloneObj[key], weakMap);
    }
}