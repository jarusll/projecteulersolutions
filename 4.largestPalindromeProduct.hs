-- https://projecteuler.net/problem=4

{-
    A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.
    Find the largest palindrome made from the product of two 3-digit numbers.
-}

palindrome :: String -> Bool
palindrome x = reverse x == x

main :: IO()
main = print $ show $ foldl max 0 [x * y | x <- [100..999], y <- [100..999], x /= y, palindrome . show $ x * y] 
