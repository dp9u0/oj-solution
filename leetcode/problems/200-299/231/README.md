# [231] Power of Two

## Description

* algorithms
* Easy (41.36%)
* Total Accepted:    202.6K
* Total Submissions: 489.6K
* Testcase Example:  '1'

```md
Given an integer, write a function to determine if it is a power of two.
Example 1:
Input: 1
Output: true
Explanation: 20 = 1
Example 2:
Input: 16
Output: true
Explanation: 24 = 16
Example 3:
Input: 218
Output: false

```

## Solution

位运算 如果是 `pow(2,x)` 则满足 `n & (n - 1) === 0`

另一种方案是 `1073741824 % n === 0`

[SourceCode](./solution.js)