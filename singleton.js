function singleton(start = 0) {
    singleton = () => {
        return start
    }
    return 0;
}

const sum = (a, b) => {
    const c = singleton()
    return a + b + c
}

singleton(3)
sum(1, 3)

