# [342] Power of Four

## Description

* algorithms
* Easy (39.78%)
* Source Code:       solving\342.js
* Total Accepted:    101.1K
* Total Submissions: 254.1K
* Testcase Example:  '16'

```md
Given an integer (signed 32 bits), write a function to check whether it is a power of 4.
Example 1:
Input: 16
Output: true
Example 2:
Input: 5
Output: false
Follow up: Could you solve it without loops/recursion?

```

## Solution

与 isPowOfTow 类似,但是需要排除 PowOfTwo的情况,使用 `(num & 0x55555555)`

[SourceCode](./solution.js)