# [1982] Find Array Given Subset Sums

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-array-given-subset-sums/description/)

* algorithms
* Hard (49.48%)
* Likes:    640
* Dislikes: 44
* Testcase Example:  '3\n[-3,-2,-1,0,0,1,2,3]'

```md
You are given an integer n representing the length of an unknown array that you are trying to recover. You are also given an array sums containing the values of all 2n subset sums of the unknown array (in no particular order).
Return the array ans of length n representing the unknown array. If multiple answers exist, return any of them.
An array sub is a subset of an array arr if sub can be obtained from arr by deleting some (possibly zero or all) elements of arr. The sum of the elements in sub is one possible subset sum of arr. The sum of an empty array is considered to be 0.
Note: Test cases are generated such that there will always be at least one correct answer.

Example 1:

Input: n = 3, sums = [-3,-2,-1,0,0,1,2,3]
Output: [1,2,-3]
Explanation: [1,2,-3] is able to achieve the given subset sums:
- []: sum is 0
- [1]: sum is 1
- [2]: sum is 2
- [1,2]: sum is 3
- [-3]: sum is -3
- [1,-3]: sum is -2
- [2,-3]: sum is -1
- [1,2,-3]: sum is 0
Note that any permutation of [1,2,-3] and also any permutation of [-1,-2,3] will also be accepted.

Example 2:

Input: n = 2, sums = [0,0,0,0]
Output: [0,0]
Explanation: The only correct answer is [0,0].

Example 3:

Input: n = 4, sums = [0,0,5,5,4,-1,4,9,9,-1,4,3,4,8,3,8]
Output: [0,-1,4,5]
Explanation: [0,-1,4,5] is able to achieve the given subset sums.


Constraints:

1 <= n <= 15
sums.length == 2n
-104 <= sums[i] <= 104


```

## 中文翻译

给定整数 n 和一个数组 sums，包含某个未知数组的所有 2^n 个子集和（无序）。
返回任意一个满足条件的长度为 n 的数组。
保证至少有一个正确答案。

约束：1 <= n <= 15，sums.length == 2^n，-10^4 <= sums[i] <= 10^4

## 解题思路

**排序 + 递归分治**

1. 将 sums 排序。最小值和次小值之差 d 就是原数组中的一个元素（或其相反数）。
2. 取 d = sums[1] - sums[0]，将 sums 分成两组：包含 d 的和不包含 d 的子集和。
3. 使用频率计数配对：对排序后的 sums，逐个尝试将元素分到 S0（不含 d）和 S1（含 d，即 s+d）两组。
4. 递归处理 S0，直到 n=1 时返回。

## Solution

[SourceCode](./solution.js)
