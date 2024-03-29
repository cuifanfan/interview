// 1.原型链继承
function Parent1() {
    this.name = 'parent1';
    this.play = [1, 2, 3]
}
function Child1() {
    this.type = 'child1';
}
Child1.prototype = new Parent1();

// 存在问题：多个实例共享同一个原型对象
var s1 = new Child1();
var s2 = new Child1();
s1.play.push(4);
// console.log(s1.play, s2.play); // [1,2,3,4]

// 寄生式组合继承
function Parent2(name, play) {
    this.name = name || 'parent2';
    this.play = play || [1,2,3];
}
Parent2.prototype.sayName = function() {
    console.log(this.name);
}

function Child2(name, play, type) {
    Parent2.call(this, name, play);
    this.type = type || 'child2';
}
Child2.prototype.sayType = function() {
    console.log(this.type);
}

Child2.prototype.__proto__ = Object.create(Parent2.prototype);

const child2 = new Child2('child2', null, 'child2Type');
console.log(child2);
child2.sayName();
child2.sayType();
const child3 = new Child2('child3', null, 'child3Type');
console.log(child3);
child3.sayName();
child3.sayType();