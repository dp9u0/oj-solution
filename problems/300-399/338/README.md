# [338] Counting Bits

## Description

[LeetCode Problem Description](https://leetcode.com/problems/counting-bits/description/)

* algorithms
* Medium (70.29%)
* Testcase Example:  '2'

```md
Given a non negative integer number num. For every numbers i in the range 0 ≤ i ≤ num calculate the number of 1's in their binary representation and return them as an array.
Example 1:
Input: 2
Output: [0,1,1]
Example 2:
Input: 5
Output: [0,1,1,2,1,2]
Follow up:
It is very easy to come up with a solution with run time O(n*sizeof(integer)). But can you do it in linear time O(n) /possibly in a single pass?
Space complexity should be O(n).
Can you do it like a boss? Do it without using any builtin function like __builtin_popcount in c++ or in any other language.

```

## Solution

第 i 个 1 的个数 = i>>1 加上 最低位是否是1 ? 0 : 0 `bits[i] = bits[i >> 1] + (i & 1)`

[SourceCode](./solution.js)
