# [4007] Widest Possible Fence

## Description

[LeetCode Problem Description](https://leetcode.com/problems/widest-possible-fence/description/)

* algorithms
* Medium (16.89%)
* Likes:    94
* Dislikes: 18
* Testcase Example:  '[1,3,2,5,7,5,4,2,1]'

```md
You are given an integer array planks, where planks[i] represents the height of the ith wooden plank. Each plank has a width of 1 unit.
You want to build a fence consisting of planks that all have the same height.
You may either use a plank as is, or combine exactly two distinct original planks into a single plank whose height equals the sum of their heights. Each original plank can be used at most once, and not all original planks need to be used.
Return the maximum possible width of the fence that can be built.

Example 1:

Input: planks = [1,3,2,5,7,5,4,2,1]
Output: 4
Explanation:
We can have four planks of height 5.

planks[3] = 5
planks[5] = 5
planks[0] + planks[6] = 1 + 4 = 5
planks[1] + planks[2] = 3 + 2 = 5

Hence, the maximum width is 4.

Example 2:

Input: planks = [2,3,7]
Output: 1
Explanation:

It is impossible to form two planks of the same height, even after combining two distinct original planks.
Since not all original planks need to be used, we can choose any one plank as the fence.
Therefore, the maximum possible width is 1.



Constraints:

1 <= planks.length <= 1000
1 <= planks[i] <= 109


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定木板高度数组（每块宽 1）。建篱笆要求所有木板等高：每块原板可单独用，或与**另一块不同原板**拼成一块（高度相加）；每块至多用一次，不必全用。返回篱笆最大宽度。

示例 1：`[1,3,2,5,7,5,4,2,1]` → `4`（两块 5 + 1+4 + 3+2）
示例 2：`[2,3,7]` → `1`

约束：`n ≤ 1000`，`planks[i] ≤ 10^9`

## 解题思路

候选高度 H 的贡献 = `c[H]（单块数） + Σ_{x<y, x+y=H} min(c[x], c[y]) + ⌊c[H/2]/2⌋（自配对）`。

实现：按**不同值对**聚合——枚举所有 distinct 值对 (x, y)（O(D²/2)，D ≤ 1000 → 50 万），把 `min(c[x], c[y])`（x=y 时 `⌊c/2⌋`）累加进 `pairCount[x+y]` 的 Map；最后答案 = max(最大频率, max_H (pairCount[H] + c[H]))。

朴素"每个候选 H 双指针扫全值域"是 O(P·D) ≈ 5×10^8，判题机 TLE；按值对聚合每对 O(1) 共 50 万次 ✓。注意答案可以"单块 + 拼块"混合。