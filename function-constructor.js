function constructor(c) {
    constructor = function () {
        return c
    }
    return 0;
}


function sum(a, b) {
    const c = constructor()
    return a + b + c;
}


/////////////
constructor(4)//?
sum(1, 3)//?