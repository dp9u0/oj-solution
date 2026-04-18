# [3480] Maximize Subarrays After Removing One Conflicting Pair

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximize-subarrays-after-removing-one-conflicting-pair/description/)

* algorithms
* Hard (64.59%)
* Likes:    307
* Dislikes: 57
* Testcase Example:  '4\n[[2,3],[1,4]]'

```md
You are given an integer n which represents an array nums containing the numbers from 1 to n in order. Additionally, you are given a 2D array conflictingPairs, where conflictingPairs[i] = [a, b] indicates that a and b form a conflicting pair.
Remove exactly one element from conflictingPairs. Afterward, count the number of non-empty subarrays of nums which do not contain both a and b for any remaining conflicting pair [a, b].
Return the maximum number of subarrays possible after removing exactly one conflicting pair.

Example 1:

Input: n = 4, conflictingPairs = [[2,3],[1,4]]
Output: 9
Explanation:

Remove [2, 3] from conflictingPairs. Now, conflictingPairs = [[1, 4]].
There are 9 subarrays in nums where [1, 4] do not appear together. They are [1], [2], [3], [4], [1, 2], [2, 3], [3, 4], [1, 2, 3] and [2, 3, 4].
The maximum number of subarrays we can achieve after removing one element from conflictingPairs is 9.


Example 2:

Input: n = 5, conflictingPairs = [[1,2],[2,5],[3,5]]
Output: 12
Explanation:

Remove [1, 2] from conflictingPairs. Now, conflictingPairs = [[2, 5], [3, 5]].
There are 12 subarrays in nums where [2, 5] and [3, 5] do not appear together.
The maximum number of subarrays we can achieve after removing one element from conflictingPairs is 12.



Constraints:

2 <= n <= 105
1 <= conflictingPairs.length <= 2 * n
conflictingPairs[i].length == 2
1 <= conflictingPairs[i][j] <= n
conflictingPairs[i][0] != conflictingPairs[i][1]


```

## 题目翻译

给定 nums=[1,2,...,n] 和冲突对列表。移除恰好一个冲突对后，统计不包含任何剩余冲突对的双元素的子数组数量。返回最大数量。

## 解题思路

**扫描线 + Top-2 追踪**

对每个冲突对 [a,b]（归一化 a<b），子数组 [l,r] 包含两者当且仅当 l≤a 且 r≥b。

对固定右端 r，左边界约束为 l > max(a_i)，其中 b_i ≤ r。

关键：维护活跃对中最大和次大的 'a' 值。扫描位置 r，逐段计算：
- baseTotal += Σ(r - maxA)
- 当 maxA 仅由一个对贡献时，该对的 bonus += 段长 × (maxA - secondMaxA)

最终答案 = baseTotal + max(bonus)。

## Solution

[SourceCode](./solution.js)
