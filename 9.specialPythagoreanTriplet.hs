-- https://projecteuler.net/problem=9

{-
A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.
There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc.
-}

sqr :: Int -> Int
sqr x = x * x

main = print $ head [a * b * c | c <- [1..1000], b <- [1..c], a <- [1..b], sqr a + sqr b == sqr c, a + b + c == 1000]
