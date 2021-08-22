/**
 * 1 реализация
 * @param fns
 * @returns {function(...[*]): *}
 */
// const compose = (...fns) => (...args) => {
//     const lastFn = fns.pop();
//
//     return fns.reduceRight((composed, fn)=>{
//       return fn(composed)
//     },lastFn(...args)) //?
// };



/**
 * 2 реализация
 * @param fns
 * @returns {function(...[*]): *}
 */
// const compose = (...fns) => (...arg) => {
//     if(fns.length < 2) {
//         return fns[0](...arg)
//     }
//     const firstFn = fns.shift();
//     return firstFn(compose(...fns)(...arg));
// }

/**
 * 3 реализация
 * @param fns
 * @returns {function(...[*]): *}
 */
// const compose = (...fns) => fns.reduceRight((acc, curr)=>(...args)=>curr(acc(...args)))


const fn1 = (a, b, c) => a + b + c;
const fn2 = a => a*2;
const fn3 = a => a+3;
compose( fn3, fn2, fn1)(2, 3, 1); //?
