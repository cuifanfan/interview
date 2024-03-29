Function.prototype.myCall = function (target, ...args) {
    target.fn = this;
    return target.fn(...args)
}

const obj = {
    name: 'cuifan',
    sayName: function () {
        console.log(this.name);
        return 9999;
    }
}

var name = 'window';

const obj1 = {
    name: 'lijiamin',
}

const sayName = obj.sayName;
// console.log(sayName.call(obj1, 4, 5, 6));
// console.log(sayName.myCall(obj1, 1, 2, 3));


Function.prototype.myBind = function (target, ...args) {
    const fn = this;
    return function Fn() {
        fn.apply(this instanceof Fn ? this : target, [...args, ...arguments])
    }
}

const sayObj1Name = sayName.myBind(obj1, 4);
new sayObj1Name(5,6)
sayObj1Name(5,6);