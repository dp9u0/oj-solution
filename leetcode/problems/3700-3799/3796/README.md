# [3796] Find Maximum Value in a Constrained Sequence

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-maximum-value-in-a-constrained-sequence/description/)

* algorithms
* Medium (62.12%)
* Likes:    81
* Dislikes: 10
* Testcase Example:  '10\n[[3,1],[8,1]]\n[2,2,3,1,4,5,1,1,2]'

```md
You are given an integer n, a 2D integer array restrictions, and an integer array diff of length n - 1. Your task is to construct a sequence of length n, denoted by a[0], a[1], ..., a[n - 1], such that it satisfies the following conditions:

a[0] is 0.
All elements in the sequence are non-negative.
For every index i (0 <= i <= n - 2), abs(a[i] - a[i + 1]) <= diff[i].
For each restrictions[i] = [idx, maxVal], the value at position idx in the sequence must not exceed maxVal (i.e., a[idx] <= maxVal).

Your goal is to construct a valid sequence that maximizes the largest value within the sequence while satisfying all the above conditions.
Return an integer denoting the largest value present in such an optimal sequence.

Example 1:

Input: n = 10, restrictions = [[3,1],[8,1]], diff = [2,2,3,1,4,5,1,1,2]
Output: 6
Explanation:

The sequence a = [0, 2, 4, 1, 2, 6, 2, 1, 1, 3] satisfies the given constraints (a[3] <= 1 and a[8] <= 1).
The maximum value in the sequence is 6.


Example 2:

Input: n = 8, restrictions = [[3,2]], diff = [3,5,2,4,2,3,1]
Output: 12
Explanation:

The sequence a = [0, 3, 3, 2, 6, 8, 11, 12] satisfies the given constraints (a[3] <= 2).
The maximum value in the sequence is 12.



Constraints:

2 <= n <= 105
1 <= restrictions.length <= n - 1
restrictions[i].length == 2
restrictions[i] = [idx, maxVal]
1 <= idx < n
1 <= maxVal <= 106
diff.length == n - 1
1 <= diff[i] <= 10
The values of restrictions[i][0] are unique.


```

## 中文翻译

构造长度为 n 的序列 a[0..n-1]，a[0]=0，所有元素非负，相邻差值 |a[i]-a[i+1]| <= diff[i]，某些位置有上限限制。求满足条件下序列最大值。

## 解题思路

先算前缀和作为无限制时的最大值，然后应用限制条件。做一次前向传播（从左到右取 min(maxVals[i], maxVals[i-1]+diff[i-1])）和一次反向传播（从右到左取 min(maxVals[i], maxVals[i+1]+diff[i])），得到每个位置的实际可达最大值。

## Solution

[SourceCode](./solution.js)
