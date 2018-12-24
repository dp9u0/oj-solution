# [172] Factorial Trailing Zeroes

## Description

* algorithms
* Easy (37.02%)
* Total Accepted:    139.5K
* Total Submissions: 376.8K
* Testcase Example:  '3'

```md
Given an integer n, return the number of trailing zeroes in n!.
Example 1:
Input: 3
Output: 0
Explanation: 3! = 6, no trailing zero.
Example 2:
Input: 5
Output: 1
Explanation: 5! = 120, one trailing zero.
Note: Your solution should be in logarithmic time complexity.

```

## Solution

计算 `1~n` 共有多少个数是`5`的1倍,2倍...将这些个数加起来即可.

[SourceCode](./solution.js)