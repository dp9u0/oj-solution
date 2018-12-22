# [136] Single Number

## Description

* algorithms
* Easy (57.92%)
* Total Accepted:    383.6K
* Total Submissions: 662.4K
* Testcase Example:  '[2,2,1]'

```md
Given a non-empty array of integers, every element appears twice except for one. Find that single one.
Note:
Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?
Example 1:
Input: [2,2,1]
Output: 1
Example 2:
Input: [4,1,2,1,2]
Output: 4

```

## Solution

`x ^ y ^ y = x`

[SourceCode](./solution.js)