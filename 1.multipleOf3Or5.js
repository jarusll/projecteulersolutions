// https://projecteuler.net/problem=1

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