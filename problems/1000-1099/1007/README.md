# [1007] Minimum Domino Rotations For Equal Row

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-domino-rotations-for-equal-row/description/)

* algorithms
* Medium (56.48%)
* Likes:    3286
* Dislikes: 271
* Testcase Example:  '[2,1,2,4,2,2]\n[5,2,6,2,3,2]'

```md
In a row of dominoes, tops[i] and bottoms[i] represent the top and bottom halves of the ith domino. (A domino is a tile with two numbers from 1 to 6 - one on each half of the tile.)
We may rotate the ith domino, so that tops[i] and bottoms[i] swap values.
Return the minimum number of rotations so that all the values in tops are the same, or all the values in bottoms are the same.
If it cannot be done, return -1.

Example 1:


Input: tops = [2,1,2,4,2,2], bottoms = [5,2,6,2,3,2]
Output: 2
Explanation:
The first figure represents the dominoes as given by tops and bottoms: before we do any rotations.
If we rotate the second and fourth dominoes, we can make every value in the top row equal to 2, as indicated by the second figure.

Example 2:

Input: tops = [3,5,1,2,3], bottoms = [3,6,3,3,4]
Output: -1
Explanation:
In this case, it is not possible to rotate the dominoes to make one row of values equal.


Constraints:

2 <= tops.length <= 2 * 104
bottoms.length == tops.length
1 <= tops[i], bottoms[i] <= 6


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

一排多米诺骨牌，tops[i] 和 bottoms[i] 分别表示第 i 张牌的上半和下半。可以旋转任意一张牌（交换上下值）。返回使 tops 中所有值相同或 bottoms 中所有值相同所需的最小旋转次数。无法实现则返回 -1。

## 解题思路

**枚举目标值**

值域只有 1-6，枚举目标值 target。对于每个 target：
- 检查每个位置 i，tops[i] 或 bottoms[i] 中至少有一个等于 target（否则该 target 不可行）
- 统计需要旋转的次数：使 tops 全为 target 的次数 = bottoms 中等于 target 的个数；使 bottoms 全为 target 的次数 = tops 中等于 target 的个数

取所有可行 target 中最小的旋转次数。

时间复杂度 O(6n) = O(n)，空间复杂度 O(1)。
