# [2561] Rearranging Fruits

## Description

[LeetCode Problem Description](https://leetcode.com/problems/rearranging-fruits/description/)

* algorithms
* Hard (57.36%)
* Likes:    946
* Dislikes: 58
* Testcase Example:  '[4,2,2,2]\n[1,4,1,2]'

```md
You have two fruit baskets containing n fruits each. You are given two 0-indexed integer arrays basket1 and basket2 representing the cost of fruit in each basket. You want to make both baskets equal. To do so, you can use the following operation as many times as you want:

Choose two indices i and j, and swap the ith fruit of basket1 with the jth fruit of basket2.
The cost of the swap is min(basket1[i], basket2[j]).

Two baskets are considered equal if sorting them according to the fruit cost makes them exactly the same baskets.
Return the minimum cost to make both the baskets equal or -1 if impossible.

Example 1:

Input: basket1 = [4,2,2,2], basket2 = [1,4,1,2]
Output: 1
Explanation: Swap index 1 of basket1 with index 0 of basket2, which has cost 1. Now basket1 = [4,1,2,2] and basket2 = [2,4,1,2]. Rearranging both the arrays makes them equal.

Example 2:

Input: basket1 = [2,3,4,1], basket2 = [3,2,5,1]
Output: -1
Explanation: It can be shown that it is impossible to make both the baskets equal.


Constraints:

basket1.length == basket2.length
1 <= basket1.length <= 105
1 <= basket1[i], basket2[i] <= 109


```

## 翻译

两个篮子各有 n 个水果，用 basket1 和 basket2 数组表示水果代价。可以进行交换操作：选 basket1[i] 和 basket2[j] 交换，代价为 min(basket1[i], basket2[j])。目标是使两个篮子排序后完全相同，返回最小代价，不可能则返回 -1。

## 解题思路

1. 统计每个值在两个篮子中的差值 diff。若任何值的 diff 为奇数则不可能。
2. basket1 中多余的值需要换到 basket2，反之亦然。收集所有需要交换的元素。
3. 排序后取前半部分（较小的 k 个），每个代价为 min(val, 2 * globalMin)。2*globalMin 是间接交换（通过全局最小值中转两次）的代价上限。
4. 求和即可。

## Solution

[SourceCode](./solution.js)
