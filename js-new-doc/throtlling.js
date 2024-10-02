// throttling is a technique used to limit the number of times a function is called
// it is used to limit the number of times a function is called



function throttle(func, delay) {
    let last = 0
    return function(...args) {
        const now = new Date().getTime()
        if (now - last < delay) return
        last = now
        func(...args)
    }
}

function sayHello() {
    console.log('Hello')
}

const throttledHello = throttle(sayHello, 1000)

throttledHello()
throttledHello()
throttledHello()    






