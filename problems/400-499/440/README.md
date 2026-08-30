# [440] K-th Smallest in Lexicographical Order

## Description

[LeetCode Problem Description](https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/description/)

* algorithms
* Hard (46.53%)
* Likes:    1658
* Dislikes: 148
* Testcase Example:  '13\n2'

```md
Given two integers n and k, return the kth lexicographically smallest integer in the range [1, n].

Example 1:

Input: n = 13, k = 2
Output: 10
Explanation: The lexicographical order is [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9], so the second smallest number is 10.

Example 2:

Input: n = 1, k = 1
Output: 1


Constraints:

1 <= k <= n <= 109


```

## 中文翻译

给定两个整数 `n` 和 `k`，返回范围 `[1, n]` 中字典序第 `k` 小的整数。

示例 1：

输入：n = 13, k = 2
输出：10
解释：字典序为 [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]，因此第二小的数字是 10。

示例 2：

输入：n = 1, k = 1
输出：1

约束：
1 <= k <= n <= 10^9

## 解题思路

把 [1, n] 的数字按字典序排成一棵**十叉前缀树**：根的前缀是 1~9，每个节点 `prefix` 的子节点是 `prefix*10 ~ prefix*10+9`。字典序遍历这棵树即得到有序序列，第 k 个数就是树上第 k 个节点。

不需要真正建树，用「子树计数 + 移动指针」：

1. 从 `curr = 1` 出发（它本身就是第 1 个数），`k--`。
2. 循环直到 `k === 0`：
   - 计算 `steps = count(curr)`：以 `curr` 为前缀、不超过 `n` 的数字总数，即字典序区间 `[curr, curr+1)` 内数字的个数。逐层统计：`cur = curr`、`next = curr + 1`，每层累加 `min(n+1, next) - cur`，再 `cur *= 10, next *= 10`，直到 `cur > n`。
   - 若 `steps <= k`：答案不在该子树内，跳过整棵子树，`k -= steps`，`curr++`（移到右兄弟）。
   - 否则：答案在子树内，`curr *= 10`（深入第一个孩子），`k--`（新前缀本身算一个数）。

时间复杂度：`curr` 的移动路径最多约 `9 * log10(n) * 2` 步，每步计数 O(log n)，总复杂度 O(log²n)，n = 10^9 时毫秒级完成。

## Solution

[SourceCode](./solution.js)
