// debouncing is a technique used to limit the number of times a function is called


function debounce(func, delay) {
    let timeout
    return function(...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => func(...args), delay)
    }
}


function sayHello() {
    console.log('Hello')
}

const debouncedHello = debounce(sayHello, 1000)

debouncedHello()
debouncedHello()
debouncedHello()