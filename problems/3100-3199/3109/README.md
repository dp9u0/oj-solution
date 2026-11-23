# [3109] 查找排列的下标

## Description


```md
https://leetcode.cn/problems/find-the-index-of-permutation/description/
* algorithms
* Medium (22.35%)
* Likes:    3
* Dislikes: -
* Testcase Example:  '[1,2]'
给定一个长度为 n 的数组 perm，它是 [1, 2, ..., n] 的一个排列，将 [1, 2, ..., n] 所有的排列放在数组中，并以 字典序 排序，返回这个数组中 perm 的下标。
由于答案可能非常大，返回值对 109 + 7 取模。

示例 1：
输入：perm = [1,2]
输出：0
解释：
按以下顺序只有 2 种排列：
[1,2], [2,1]
并且 [1,2] 在下标 0。
示例 2：
输入：perm = [3,1,2]
输出：4
解释：
按以下顺序只有 6 种排列：
[1,2,3], [1,3,2], [2,1,3], [2,3,1], [3,1,2], [3,2,1]
并且 [3,1,2] 在下标 4。

提示：
1 <= n == perm.length <= 105
perm 是 [1, 2, ..., n] 的一个排列。
Hint 1: If perm[0] is x, there are at least (x - 1) * (n - 1)! permutations before perm. (All the ones starting with numbers less than x)
Hint 2: Can you find out what happens for perm[1] onwards?
Hint 3: Think about the count of the numbers that can be in place of perm[i] and come before it.

```

## Solution

[SourceCode](./solution.js)

## 思路 (Approach)

Problem (EN): Given a permutation of [1..n], return its 0-based lexicographic rank mod 1e9+7. n up to 1e5.

Approach: Lehmer code. index = sum over i of smaller_i * (n-1-i)!, where smaller_i = number of not-yet-used values smaller than perm[i]. BIT over values 1..n for the counts; factorial table mod 1e9+7. O(n log n).
