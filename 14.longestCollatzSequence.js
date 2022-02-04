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