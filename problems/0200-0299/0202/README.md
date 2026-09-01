# [202] Happy Number

## Description

* algorithms
* Easy (43.55%)
* Total Accepted:    199.4K
* Total Submissions: 457.8K
* Testcase Example:  '19'

```md
Write an algorithm to determine if a number is "happy".
A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits, and repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy numbers.
Example:
Input: 19
Output: true
Explanation:
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1

```

## Solution

所有不快乐数的数位平方和计算 最后都会进入类似的循环 `4 → 16 → 37 → 58 → 89 → 145 → 42 → 20 → 4`.

并且100以内的快乐数有: 1, 7, 10, 13, 19, 23, 28, 31, 32, 44, 49, 68, 70, 79, 82, 86, 91, 94, 97, 100

[SourceCode](./solution.js)