// 最简单版本的递归 当然会有性能问题哈
function fibonacci(n) {
    if (n === 0) {
        return 0
    } else if (n === 1) {
        return 1
    } else {
        return fibonacci(n-1) + fibonacci(n-2);
    }
}
//console.log(fibonacci(50));
function fibonacci2(n){
    let n1 = 1,
        n2 = 1,
        sum = 1
    for(let i = 3; i <= n; i ++) {
        sum = n1 + n2
        n1 = n2
        n2 = sum
    }
    return sum
}
//console.log(fibonacci2(50));
function fib3(n){
    function fib_(n,a,b){
        if(n==0)  return a
        else return fib_(n-1,b,a+b)
    }
    return fib_(n,0,1)
}
//console.log(fib3(5));

// 缓存函数
function memozi(fn){
    var r = {}
    return function(n){
      if(r[n] == null){
        r[n] = fn(n)
        return r[n]
      }else{
          return r[n]
      }
    }
}

var fibfn = memozi(function(n){
    if(n==0){
        return 0
    }else if(n==1){
        return 1
    }else{
        return fibfn(n-1) + fibfn(n-2)
    }
})

//console.log(fibfn(50));

// 尾递归
'use strict'
function fibonacciwei(n, current = 0, next = 1) {
    if(n === 1) return next;
    if(n === 0) return 0;
    return fibonacciwei(n - 1, next, current + next);
}
//console.log(fibonacciwei(50));
 
// 解构赋值的版本
function fibonaccinew(n) {
    let current = 0;
    let next = 1;
    for(let i = 0; i < n; i++){
        [current, next] = [next, current + next];
    }
    return current;
}

// console.log(fibonaccinew(50));

function awesomefibonacci(n){
	let seed = 1;
	return [...Array(n)].reduce(p => {
		const temp = p + seed; 
		seed = p;
		return temp;
	},0)
}

console.log(awesomefibonacci(50));

