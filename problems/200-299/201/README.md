# [201] Bitwise AND of Numbers Range

## Description

[LeetCode Problem Description](https://leetcode.com/problems/bitwise-and-of-numbers-range/description/)

* algorithms
* Medium (39.05%)
* Testcase Example:  '5\n7'

```md
Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of all numbers in this range, inclusive.
Example 1:
Input: [5,7]
Output: 4
Example 2:
Input: [0,1]
Output: 0
```

## Solution

`rangeBitwiseAnd(m,n)`

```js
11010(m)
11011
11100　　
11101　　
11110(n)
```

观察可知,这五个数字,低3位 要么位0 要么为1, 不完全相同, `and` 操作后肯定为 `000`

因此只要找出 m n 从高位起 完全相同的位 `and` 即可

[SourceCode](./solution.js)
