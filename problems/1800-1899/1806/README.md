# [1806] Minimum Number of Operations to Reinitialize a Permutation

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-number-of-operations-to-reinitialize-a-permutation/description/)

* algorithms
* Medium (72.57%)
* Likes:    328
* Dislikes: 176
* Testcase Example:  '2'

```md
You are given an even integer n​​​​​​. You initially have a permutation perm of size n​​ where perm[i] == i​ (0-indexed)​​​​.
In one operation, you will create a new array arr, and for each i:

If i % 2 == 0, then arr[i] = perm[i / 2].
If i % 2 == 1, then arr[i] = perm[n / 2 + (i - 1) / 2].

You will then assign arr​​​​ to perm.
Return the minimum non-zero number of operations you need to perform on perm to return the permutation to its initial value.

Example 1:

Input: n = 2
Output: 1
Explanation: perm = [0,1] initially.
After the 1st operation, perm = [0,1]
So it takes only 1 operation.

Example 2:

Input: n = 4
Output: 2
Explanation: perm = [0,1,2,3] initially.
After the 1st operation, perm = [0,2,1,3]
After the 2nd operation, perm = [0,1,2,3]
So it takes only 2 operations.

Example 3:

Input: n = 6
Output: 4


Constraints:

2 <= n <= 1000
n​​​​​​ is even.


```

## 中文翻译

给定偶数 n，初始排列 perm[i]=i。每次操作：偶数位 i 取 perm[i/2]，奇数位 i 取 perm[n/2+(i-1)/2]。求多少次操作后排列恢复初始状态。

## 解题思路

跟踪位置 1 的变化，计算其回到 1 的周期。因为排列是若干环的乘积，总周期为所有环长度的 LCM。但直接模拟位置 1 的路径即可——因为只需要找到第一个环的长度就是答案（实际上所有环长度相同，但只需跟踪一个位置即可）。

实际上只需跟踪 pos=1，反复应用变换直到回到 1。

时间复杂度：O(n)，空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
