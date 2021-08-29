export default (fn, l = fn.length) => {


    const curried = (...args1) => {

        if (l === 0) {
            return (...args2) => {
                if (args2.length < 1) {
                    return fn(...args1)
                }

                return curried(...args1, ...args2)
            }
        }

        if (l > args1.length) {
            return (...args2) => curried(...args1, ...args2)
        }
        return fn(...args1)
    }

    return curried;
}