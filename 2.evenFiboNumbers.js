// https://projecteuler.net/problem=2

/**
    Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:
    1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
    By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

function last(arr){
    return arr.slice(-1)[0]
}

function secondLast(arr){
    return arr.slice(-2)[0]
}

function fibUntil(fn, collect = [0, 1]){
    if (fn(last(collect)))
        return fibUntil(fn, [...collect, last(collect) + secondLast(collect)])
    return collect
}

const even = x => x % 2 == 0
console.log(fibUntil((x => x < 4000000)).filter(x => even(x)).reduce((prev, current) => prev + current, 0))