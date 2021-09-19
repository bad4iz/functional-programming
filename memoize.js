const sum = (a, b) => {
    a; //?
    b;//?
    return a.val + b.val;
}

const memoize = (fn) => {
    fn.values = {};
    return (...args) => {
        const keyCache = JSON.stringify(args);
        if (!fn.values[keyCache]) {
            fn.values[keyCache] = fn(...args);
        }
        return fn.values[keyCache]
    }
};

const memoizedSum = memoize(sum);

memoizedSum({val: 3}, {val: 6}); //?
memoizedSum({val: 3}, {val: 6}); //?
memoizedSum({val: 3}, {val: 7}); //?
memoizedSum({val: 5}, {val: 7}); //?
memoizedSum({val: 5}, {val: 7}); //?

