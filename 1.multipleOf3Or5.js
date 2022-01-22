// https://projecteuler.net/problem=1

/**
  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
  Find the sum of all the multiples of 3 or 5 below 1000.
*/

function generate(n){
  if (n == 0)
    return []
  return [...generate(n - 1), n]
}

function multiplesOf3and5(number) {
  return generate(number - 1)
    .filter(x => (x % 3 == 0) || (x % 5 == 0))
    .reduce((acc, curr) => acc + curr, 0)
}