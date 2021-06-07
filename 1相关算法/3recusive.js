// 递归相关算法


// 斐波那契数列
function fibonacci(n) {
    if (n === 1 || n === 0) return n;
    console.log(`fibonacci(${n} - 1) + fibonacci(${n}- 2)`)
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// 缺点
// 1、占用大量的内存
//2 大量 重复运算

// 尾调用或递推法

// 尾调用
function fibonacci(n, current = 0, next = 1) {
    if (n == 0) return 0;
    if (n == 1) return next
    return fibonacci(n - 1, next, current + 1)
}

// 循环
function fibonacci(n) {
    let current = 0;
    let next = 1;
    for (let i = 0; i < n; i++) {
        [current, next] = [next, current + next];
    }
    return current;
}
// Generator
function* fibonacci() {
    let current = 0;
    let next = 1;
    yield current;
    yield next;
    while (true) {
        [current, next] = [next, current + next];
        yield next;
    }
}

// 2深拷贝
// 1. JSON.parse(JSON.stringfi())
function clone(target,map = new WeakMap()) {
    if (typeof target == "object") {
        let cloneTarget = Array.isArray(target) ? [] : {};
        if(map.get(target)){
            return map.get(target)
        }
        map.set(target.cloneTarget)
        for (key in target) {
            cloneTarget[key] = clone(target[key],map)
        }
        return cloneTarget
    } else {
        return target
    }
}