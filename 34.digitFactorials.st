"https://projecteuler.net/problem=34"

"145 is a curious number, as 1! + 4! + 5! = 1 + 24 + 120 = 145.
Find the sum of all numbers which are equal to the sum of the factorial of their digits.
Note: As 1! = 1 and 2! = 2 are not sums they are not included."

Character>>asNumber 
	"Return $1 -> 1, ..."
	| number |
	number := self asInteger - 48.
	(number between: 0 and: 9)  ifTrue: [ ^number ]

Integer>>isDigitFactorial
	^ (self asString asArray collect: [ :x | x asNumber factorial ]) sum = self

((3 to: 100000) select: [ :x | x isDigitFactorial ]) sum