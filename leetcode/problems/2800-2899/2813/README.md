# [2813] Maximum Elegance of a K-Length Subsequence

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-elegance-of-a-k-length-subsequence/description/)

* algorithms
* Hard (28.63%)
* Likes:    323
* Dislikes: 5
* Testcase Example:  '[[3,2],[5,1],[10,1]]\n2'

```md
You are given a 0-indexed 2D integer array items of length n and an integer k.
items[i] = [profiti, categoryi], where profiti and categoryi denote the profit and category of the ith item respectively.
Let&#39;s define the elegance of a subsequence of items as total_profit + distinct_categories2, where total_profit is the sum of all profits in the subsequence, and distinct_categories is the number of distinct categories from all the categories in the selected subsequence.
Your task is to find the maximum elegance from all subsequences of size k in items.
Return an integer denoting the maximum elegance of a subsequence of items with size exactly k.
Note: A subsequence of an array is a new array generated from the original array by deleting some elements (possibly none) without changing the remaining elements&#39; relative order.

Example 1:

Input: items = [[3,2],[5,1],[10,1]], k = 2
Output: 17
Explanation: In this example, we have to select a subsequence of size 2.
We can select items[0] = [3,2] and items[2] = [10,1].
The total profit in this subsequence is 3 + 10 = 13, and the subsequence contains 2 distinct categories [2,1].
Hence, the elegance is 13 + 22 = 17, and we can show that it is the maximum achievable elegance.

Example 2:

Input: items = [[3,1],[3,1],[2,2],[5,3]], k = 3
Output: 19
Explanation: In this example, we have to select a subsequence of size 3.
We can select items[0] = [3,1], items[2] = [2,2], and items[3] = [5,3].
The total profit in this subsequence is 3 + 2 + 5 = 10, and the subsequence contains 3 distinct categories [1,2,3].
Hence, the elegance is 10 + 32 = 19, and we can show that it is the maximum achievable elegance.
Example 3:

Input: items = [[1,1],[2,1],[3,1]], k = 3
Output: 7
Explanation: In this example, we have to select a subsequence of size 3.
We should select all the items.
The total profit will be 1 + 2 + 3 = 6, and the subsequence contains 1 distinct category [1].
Hence, the maximum elegance is 6 + 12 = 7.

Constraints:

1 <= items.length == n <= 105
items[i].length == 2
items[i][0] == profiti
items[i][1] == categoryi
1 <= profiti <= 109
1 <= categoryi <= n
1 <= k <= n


```

## 翻译

给定 items 数组 [profit, category] 和整数 k。选大小为 k 的子序列，优雅度 = 总利润 + 不同类别数^2。求最大优雅度。

## 解题思路

贪心 + 替换策略。按利润降序排列，先选前 k 个，然后尝试用剩余元素替换已选的重复类别元素。

1. 按 profit 降序排序，先选前 k 个，计算初始优雅度。
2. 维护已选中"有重复类别"的最小利润元素（用最小堆），和已使用的类别集合。
3. 遍历剩余元素：若其类别未出现在已选中，用它替换堆顶（重复类别中利润最小的），更新优雅度。
4. 每次替换增加一个新类别，利润变化 = 新利润 - 被替换利润，类别数+1。

## Solution

[SourceCode](./solution.js)
