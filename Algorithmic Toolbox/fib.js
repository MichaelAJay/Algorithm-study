function naiveFib(n) {
    if (n == 0 || n == 1) return n
    return fib(n-1) + fib(n-2)
}

function fib(n) {
    let fibArray = new Array(n)
    fibArray[0] = 0
    fibArray[1] = 1
    for (let i = 2; i <=n; i++) {
        fibArray[i] = fibArray[i - 2] + fibArray[i - 1]
    }
    return fibArray[n]
}

function fib_lastDigit(n) {
    let fibArray = new Array(n)
    fibArray[0] = 0
    fibArray[1] = 1
    for (let i = 2; i < n; i++) {
        fibArray[i] = fibArray[i - 2] + fibArray[i - 1]
        console.log(fibArray[i])
        if (!(typeof fibArray[i] == "number")) {
            console.log('whoops!')
            fibArray[i] = BigInt(fibArray[i - 2] + fibArray[i - 1])
            console.log(typeof fibArray[i])
        }
    }
    return fibArray[n - 1] % 10
}

let n = 499
console.log(`last digit of fib${n}`,fib_lastDigit(n))

module.exports = {fib, fib_lastDigit};