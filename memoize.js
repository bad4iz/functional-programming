const sum = (a, b) => {
    a; //?
    b;//?
    return a.val === b.val;
}

const memoize = (fn) => {
    fn.values = {};
    return (...args) => {
        const keyCache = JSON.stringify(args);
        if (!(keyCache in fn.values)) {
            fn.values[keyCache] = fn(...args);
        }
        return fn.values[keyCache]
    }
};

const memoizedSum = memoize(sum);

memoizedSum({val: 3}, {val: 2}); //?
memoizedSum({val: 3}, {val: 2}); //?
