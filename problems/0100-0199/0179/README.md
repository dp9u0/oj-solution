# [179] Largest Number

## Description

[LeetCode Problem Description](https://leetcode.com/problems/largest-number/description/)

* algorithms
* Medium (27.85%)
* Testcase Example:  '[10,2]'

```md
Given a list of non negative integers, arrange them such that they form the largest number.
Example 1:
Input: [10,2]
Output: "210"
Example 2:
Input: [3,30,34,5,9]
Output: "9534330"
Note: The result may be very large, so you need to return a string instead of an integer.

```

## Solution

1. 对输入排序(注意全0 的情况)

```js
nums.sort((a, b) => `${b}${a}` - `${a}${b}`)
```

[SourceCode](./solution.js)
