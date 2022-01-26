-- https://projecteuler.net/problem=48

{-
The series, 11 + 22 + 33 + ... + 1010 = 10405071317.
Find the last ten digits of the series, 11 + 22 + 33 + ... + 10001000.
-}

main = print $ sum [x^x `mod` 10^10| x <- [1..1000]]
