function* sayHelloWords() {
    yield 'hello';
    yield 'world';
    return 'ending';
}

const g = sayHelloWords();
console.log(g === g[Symbol.iterator]());

console.log(g.next());
console.log(g.next());
console.log(g.next());


function* objectEntries(obj) {
    let propKeys = Reflect.ownKeys(obj);

    for (let propKey of propKeys) {
        yield [propKey, obj[propKey]];
    }
}