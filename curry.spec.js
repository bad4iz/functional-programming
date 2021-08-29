import curry from './curry'

describe('curry', function () {
    it('should sum random1 + random2 + random3 = random1 + random2 + random3 ', function () {
        const sum = (a, b, c) => a + b + c;
        const random1 = Math.round(Math.random() * 20)
        const random2 = Math.round(Math.random() * 20)
        const random3 = Math.round(Math.random() * 20)
        const curriedSum = curry(sum);
        const sumWithRandom1 = curriedSum(random1);
        curriedSum(Math.random());
        const sumWithRandom2 = sumWithRandom1(random2);

        expect(sumWithRandom2(random3)).toBe(
            random1 +
            random2 +
            random3
        )
    });
    it('should sum 2 + 3 + 4 = 9', function () {
        const sum = (a, b, c) => a + b + c;
        const curriedSum = curry(sum);
        const sumWithTwo = curriedSum(2, 3);

        expect(sumWithTwo(4)).toBe(9)
    });

    it('should sum ', function () {
        const sum = (...args) => args.reduce((acc, cur) => acc + cur);


        const curriedSum = curry(sum, 3);
        const sumWithTwo = curriedSum(2);

        expect(sumWithTwo(3, 1)).toBe(6)
    });
    it('should sum ', function () {
        const sum = (...args) => args.reduce((acc, cur) => acc + cur);

        const curriedSum = curry(sum);
        const sumWithTwo = curriedSum(2);

        expect(sumWithTwo(3, 1)()).toBe(6)
    });
});