// closure is the combination of a function and the lexical envirenment within which the functon was decalred


function memoize(fn) {
    const cache = new Map()
    return function(...args) {
        const key = JSON.stringify(args)
        if (cache.has(key)) {
            console.log('cache hit')
            return cache.get(key)
        }

        const result = fn(...args)
        cache.set(key, result)
        console.log('cache miss')
        return result
    }
}

function add(a, b) {
    return a + b
}

const memoizedAdd = memoize(add)

console.log(memoizedAdd(1, 2))
console.log(memoizedAdd(1, 2))
console.log(memoizedAdd(1, 2))