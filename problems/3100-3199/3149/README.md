# [3149] Find the Minimum Cost Array Permutation

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-the-minimum-cost-array-permutation/description/)

* algorithms
* Hard (25.54%)
* Likes:    151
* Dislikes: 8
* Testcase Example:  '[1,0,2]'

```md
You are given an array nums which is a permutation of [0, 1, 2, ..., n - 1]. The score of any permutation of [0, 1, 2, ..., n - 1] named perm is defined as:
score(perm) =
perm[0] - nums[perm[1]]
+
perm[1] - nums[perm[2]]
+ ... +
perm[n - 1] - nums[perm[0]]

Return the permutation perm which has the minimum possible score. If multiple permutations exist with this score, return the one that is lexicographically smallest among them.

Example 1:

Input: nums = [1,0,2]
Output: [0,1,2]
Explanation:

The lexicographically smallest permutation with minimum cost is [0,1,2]. The cost of this permutation is
0 - 0
+
1 - 2
+
2 - 1
= 2.

Example 2:

Input: nums = [0,2,1]
Output: [0,2,1]
Explanation:

The lexicographically smallest permutation with minimum cost is [0,2,1]. The cost of this permutation is
0 - 1
+
2 - 2
+
1 - 0
= 2.


Constraints:

2 <= n == nums.length <= 14
nums is a permutation of [0, 1, 2, ..., n - 1].


```

## 翻译

给定一个排列 `nums`（即 [0, 1, 2, ..., n-1] 的某种排列）。定义一个排列 `perm` 的分数为：
score(perm) = Σ |perm[i] - nums[perm[(i+1) % n]]|（环形求和）

返回分数最小的排列。如果有多个，返回字典序最小的。

## 解题思路

**Bitmask DP + 贪心重建**

1. **环形排列**：score 是环形求和，可以枚举首元素 first (0..n-1)，对每个 first 做一次 DP。
2. **正向 DP**：`dp[mask][last]` 表示已放置 mask 中的元素，最后一个为 last 的最小代价。转移：枚举下一个元素 next，代价加上 |last - nums[next]|。
3. **求最小分数**：对每个 first，总代价 = dp[fullmask][last] + |last - nums[first]|（环形闭合边）。
4. **反向 DP**：对选定的 bestFirst，计算 `rem[mask][last]`（从当前状态完成剩余放置并闭合环的最小代价）。
5. **贪心重建**：从左到右，在所有达到最优代价的选项中选择字典序最小的元素。

时间复杂度：O(n³ · 2ⁿ)，空间复杂度：O(n · 2ⁿ)。n <= 14 可行。

## Solution

[SourceCode](./solution.js)
