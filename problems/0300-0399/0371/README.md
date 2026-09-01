# [371] Sum of Two Integers

## Description

* algorithms
* Easy (51.22%)
* Total Accepted:    118.9K
* Total Submissions: 232.1K
* Testcase Example:  '1\n2'

```md
Calculate the sum of two integers a and b, but you are not allowed to use the operator + and -.
Example 1:
Input: a = 1, b = 2
Output: 3
Example 2:
Input: a = -2, b = 3
Output: 1

```

## Solution

 `a ^ b` 是二进制下不带进位的加法.`a & b` 是二进制下是否需要进位;

[SourceCode](./solution.js)