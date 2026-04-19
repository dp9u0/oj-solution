# [2600] K Items With the Maximum Sum

## Description

[LeetCode Problem Description](https://leetcode.com/problems/k-items-with-the-maximum-sum/description/)

* algorithms
* Easy (60.19%)
* Likes:    338
* Dislikes: 40
* Testcase Example:  '3\n2\n0\n2'

```md
There is a bag that consists of items, each itemhas a number 1, 0, or -1 written on it.
You are given four non-negative integers numOnes, numZeros, numNegOnes, and k.
The bag initially contains:

numOnes items with 1s written on them.
numZeroes items with 0s written on them.
numNegOnes items with -1s written on them.

We want to pick exactly k items among the available items. Return the maximum possible sum of numbers written on the items.

Example 1:

Input: numOnes = 3, numZeros = 2, numNegOnes = 0, k = 2
Output: 2
Explanation: We have a bag of items with numbers written on them {1, 1, 1, 0, 0}. We take 2 items with 1 written on them and get a sum in a total of 2.
It can be proven that 2 is the maximum possible sum.

Example 2:

Input: numOnes = 3, numZeros = 2, numNegOnes = 0, k = 4
Output: 3
Explanation: We have a bag of items with numbers written on them {1, 1, 1, 0, 0}. We take 3 items with 1 written on them, and 1 item with 0 written on it, and get a sum in a total of 3.
It can be proven that 3 is the maximum possible sum.


Constraints:

0 <= numOnes, numZeros, numNegOnes <= 50
0 <= k <= numOnes + numZeros + numNegOnes


```

## 翻译

袋子里有三种物品：写着1的有numOnes个，写着0的有numZeros个，写着-1的有numNegOnes个。从中恰好取k个物品，求数字之和的最大值。

## 解题思路

贪心：优先取1，再取0，最后取-1。取min(numOnes, k)个1，剩余取min(numZeros, k-numOnes)个0，剩余再取-1。

## Solution

[SourceCode](./solution.js)
