# [2551] Put Marbles in Bags

## Description

[LeetCode Problem Description](https://leetcode.com/problems/put-marbles-in-bags/description/)

* algorithms
* Hard (72.14%)
* Likes:    2651
* Dislikes: 125
* Testcase Example:  '[1,3,5,1]\n2'

```md
You have k bags. You are given a 0-indexed integer array weights where weights[i] is the weight of the ith marble. You are also given the integer k.
Divide the marbles into the k bags according to the following rules:

No bag is empty.
If the ith marble and jth marble are in a bag, then all marbles with an index between the ith and jth indices should also be in that same bag.
If a bag consists of all the marbles with an index from i to j inclusively, then the cost of the bag is weights[i] + weights[j].

The score after distributing the marbles is the sum of the costs of all the k bags.
Return the difference between the maximum and minimum scores among marble distributions.

Example 1:

Input: weights = [1,3,5,1], k = 2
Output: 4
Explanation:
The distribution [1],[3,5,1] results in the minimal score of (1+1) + (3+1) = 6.
The distribution [1,3],[5,1], results in the maximal score of (1+3) + (5+1) = 10.
Thus, we return their difference 10 - 6 = 4.

Example 2:

Input: weights = [1, 3], k = 2
Output: 0
Explanation: The only distribution possible is [1],[3].
Since both the maximal and minimal score are the same, we return 0.


Constraints:

1 <= k <= weights.length <= 105
1 <= weights[i] <= 109


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定 weights 数组和整数 k，将 weights 分成 k 个连续非空的段（放入 k 个袋子）。每段的 cost 为该段首尾元素之和（weights[i] + weights[j]）。返回所有分配方案中最大 score 与最小 score 的差值。

## 解题思路

**贪心 / 排序**

k 个袋子意味着有 k-1 个分割点。每个分割点在位置 i 和 i+1 之间，分割产生的额外 cost 为 weights[i] + weights[i+1]。

总 score = weights[0] + weights[n-1] + sum(每个分割点的 weights[i] + weights[i+1])。

其中 weights[0] + weights[n-1] 是固定值，最大 score 对应选最大的 k-1 个分割点值，最小 score 对应选最小的 k-1 个分割点值。

所以：计算所有相邻对的和，排序后取最大的 k-1 个之和减去最小的 k-1 个之和。

时间复杂度 O(n log n)，空间复杂度 O(n)。
