
const compose = (...fns) => (...arg) => {
    if(fns.length < 2) {
        return fns[0](...arg)
    }
    const firstFn = fns.shift();
    return firstFn(compose(...fns)(...arg));
}
const fn1 = (a,b, c) => a+ b + c;
const fn2 = a => a*2;
const fn3 = a => a+3;
compose( fn3, fn2, fn1)(2, 3, 1); //?

//
// const compose = (...fns) => (...args) => {
//     const lastFn = fns.pop();
//
//     return fns.reduceRight((composed, fn)=>{
//       return fn(composed)
//     },lastFn(...args)) //?
// };
//



















