# [2683] Neighboring Bitwise XOR

## Description

[LeetCode Problem Description](https://leetcode.com/problems/neighboring-bitwise-xor/description/)

* algorithms
* Medium (79.81%)
* Likes:    802
* Dislikes: 50
* Testcase Example:  '[1,1,0]'

```md
A 0-indexed array derived with length n is derived by computing the bitwise XOR(&oplus;) of adjacent values in a binary array original of length n.
Specifically, for each index i in the range [0, n - 1]:

If i = n - 1, then derived[i] = original[i] &oplus; original[0].
Otherwise, derived[i] = original[i] &oplus; original[i + 1].

Given an array derived, your task is to determine whether there exists a valid binary array original that could have formed derived.
Return true if such an array exists or false otherwise.

A binary array is an array containing only 0&#39;s and 1&#39;s


Example 1:

Input: derived = [1,1,0]
Output: true
Explanation: A valid original array that gives derived is [0,1,0].
derived[0] = original[0] &oplus; original[1] = 0 &oplus; 1 = 1
derived[1] = original[1] &oplus; original[2] = 1 &oplus; 0 = 1
derived[2] = original[2] &oplus; original[0] = 0 &oplus; 0 = 0

Example 2:

Input: derived = [1,1]
Output: true
Explanation: A valid original array that gives derived is [0,1].
derived[0] = original[0] &oplus; original[1] = 1
derived[1] = original[1] &oplus; original[0] = 1

Example 3:

Input: derived = [1,0]
Output: false
Explanation: There is no valid original array that gives derived.


Constraints:

n == derived.length
1 <= n<= 105
The values in derivedare either 0&#39;s or 1&#39;s


```

## 翻译

给定数组 derived，它由一个二进制数组 original 通过相邻元素异或（环形）生成。判断是否存在合法的 original 数组。

## Approach

关键观察：将所有 derived 元素异或起来，如果结果是 0 则存在，否则不存在。因为 derived[0]^derived[1]^...^derived[n-1] = (original[0]^original[1])^(original[1]^original[2])^...^(original[n-1]^original[0])，每个 original[i] 出现恰好两次，结果必然为 0。所以只需检查 derived 的异或和是否为 0。

## Solution

[SourceCode](./solution.js)
