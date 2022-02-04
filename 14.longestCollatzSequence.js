// https://projecteuler.net/problem=14

/*
The following iterative sequence is defined for the set of positive integers:

n → n/2 (n is even)
n → 3n + 1 (n is odd)

Using the rule above and starting with 13, we generate the following sequence:

13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.

Which starting number, under one million, produces the longest chain?

NOTE: Once the chain starts the terms are allowed to go above one million.
*/

// global memoized
let chains = {}
let max = {
    key: 1,
    value: 1
}

function collatz(n){
    if (n in chains)
        return chains[n]
    else if (n == 1)
        return 1
    else if (n % 2 == 1){
        let nextCol = 3 * n + 1
        chains[n] = 1 + collatz(nextCol)
        return chains[n]
    } else {
        let nextCol = Math.trunc(n / 2)
        chains[n] = 1 + collatz(nextCol)
        return chains[n]
    }
}

for (let i = 2; i < 1000000; i++){
    let val = collatz(i)
    if (val > max.value)
        max = {
            key: i,
            value: val
        }
}

console.log(max) // { key: 837799, value: 525 }
