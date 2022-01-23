-- https://projecteuler.net/problem=7

{-
By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.
What is the 10 001st prime number?
-}

main :: IO()
main = print $ head $ primeWhile (\x -> length x == 10001) 2 [2]

nextPrime :: Int -> [Int] -> Int
nextPrime num beforePrimes = if all (\x ->  num `mod` x /= 0) beforePrimes
  then num 
  else nextPrime (num + 1) beforePrimes

isPrime :: Int -> [Int] -> Bool
isPrime num = all (\x -> num `mod` x /= 0)

primeWhile :: ([Int] -> Bool) -> Int -> [Int] -> [Int]
primeWhile pred current beforePrimes
  | pred beforePrimes = beforePrimes
  | isPrime current beforePrimes = primeWhile pred (current + 1) (current:beforePrimes)
  | otherwise = primeWhile pred (current + 1) beforePrimes
