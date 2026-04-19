# [1734] Decode XORed Permutation

## Description

[LeetCode Problem Description](https://leetcode.com/problems/decode-xored-permutation/description/)

* algorithms
* Medium (66.78%)
* Likes:    805
* Dislikes: 35
* Testcase Example:  '[3,1]'

```md
There is an integer array perm that is a permutation of the first n positive integers, where n is always odd.
It was encoded into another integer array encoded of length n - 1, such that encoded[i] = perm[i] XOR perm[i + 1]. For example, if perm = [1,3,2], then encoded = [2,1].
Given the encoded array, return the original array perm. It is guaranteed that the answer exists and is unique.

Example 1:

Input: encoded = [3,1]
Output: [1,2,3]
Explanation: If perm = [1,2,3], then encoded = [1 XOR 2,2 XOR 3] = [3,1]

Example 2:

Input: encoded = [6,5,4,6]
Output: [2,4,1,5,3]


Constraints:

3 <= n <105
nis odd.
encoded.length == n - 1


```

## Solution

[SourceCode](./solution.js)

## 题意翻译

给定编码数组 encoded，其中 encoded[i] = perm[i] XOR perm[i+1]。perm 是 [1,2,...,n] 的一个排列，n 为奇数。求原始数组 perm。

## 解题思路

XOR性质。先求 totalXOR = 1^2^...^n（perm所有元素的异或）。再求 encodedXOR = encoded[1]^encoded[3]^... （奇数下标的异或），这等于 perm[1]^perm[2]^...^perm[n-1]。因此 perm[0] = totalXOR ^ encodedXOR。得到 perm[0] 后，perm[i+1] = perm[i] ^ encoded[i] 逐步还原。
