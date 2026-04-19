# [2226] Maximum Candies Allocated to K Children

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-candies-allocated-to-k-children/description/)

* algorithms
* Medium (49.88%)
* Likes:    1839
* Dislikes: 85
* Testcase Example:  '[5,8,6]\n3'

```md
You are given a 0-indexed integer array candies. Each element in the array denotes a pile of candies of size candies[i]. You can divide each pile into any number of sub piles, but you cannot merge two piles together.
You are also given an integer k. You should allocate piles of candies to k children such that each child gets the same number of candies. Each child can be allocated candies from only one pile of candies and some piles of candies may go unused.
Return the maximum number of candies each child can get.

Example 1:

Input: candies = [5,8,6], k = 3
Output: 5
Explanation: We can divide candies[1] into 2 piles of size 5 and 3, and candies[2] into 2 piles of size 5 and 1. We now have five piles of candies of sizes 5, 5, 3, 5, and 1. We can allocate the 3 piles of size 5 to 3 children. It can be proven that each child cannot receive more than 5 candies.

Example 2:

Input: candies = [2,5], k = 11
Output: 0
Explanation: There are 11 children but only 7 candies in total, so it is impossible to ensure each child receives at least one candy. Thus, each child gets no candy and the answer is 0.


Constraints:

1 <= candies.length <= 105
1 <= candies[i] <= 107
1 <= k <= 1012


```

## 翻译

给定糖果堆数组 `candies`，每堆大小为 `candies[i]`。可以将每堆分成任意数量的子堆，但不能合并。将糖果分配给 `k` 个孩子，每人分到相同数量的糖果，每人只能从一堆中取。返回每个孩子能分到的最大糖果数。

## Approach

**二分答案。** 对每个孩子分到的糖果数 `x` 进行二分搜索。验证函数：计算所有堆能分出多少个大小为 `x` 的子堆（`sum(floor(candies[i] / x))`），若 >= k 则 `x` 可行。

二分范围 `[1, max(candies)]`，找到最大的可行 `x`。

时间复杂度：O(n log M)，M 为最大堆大小。空间复杂度：O(1)

## Solution

[SourceCode](./solution.js)
