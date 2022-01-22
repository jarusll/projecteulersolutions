// https://projecteuler.net/problem=3

/**
    The prime factors of 13195 are 5, 7, 13 and 29.
    What is the largest prime factor of the number 600851475143 ?
*/

// attempt 1 => resulted in maximum call stack exceeded
// console.log(generatePrime(x => x <= 600851475143).slice(-1)[0])

function last(x){
    return x.slice(-1)[0]
}

function nextPrime(beforePrimes, n){
    const notDivisible = (x, y) => x % y !== 0
    if (beforePrimes.every(x => notDivisible(n, x)))
        return n
    return nextPrime(beforePrimes, n + 1)
}

function generatePrime(fn, collect = [2]){
    const newCollect = [...collect, nextPrime(collect, last(collect))]
    if (fn(last(newCollect)))
        return generatePrime(fn, newCollect)

    return collect
}

// attempt 2
function generate(n, start = 1){
    if (n == start || n == 0)
        return []
    return [...generate(n - 1), n]
}

const divisible = (x, y) => x % y == 0
const isPrime = num => generate(Math.ceil(Math.sqrt(num)), 2).every(x => num % x !== 0)
function solve(number, n){
    let divisor = Math.floor(number / n)
    if (divisible(number, n) && isPrime(divisor)){
        return divisor
    }
    return solve(number, n + 1)
}

// console.log(isPrime(200))
console.log(generate(600851475143).filter(x => isPrime(x)))