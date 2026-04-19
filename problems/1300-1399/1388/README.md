# [1388] Pizza With 3n Slices

## Description

[LeetCode Problem Description](https://leetcode.com/problems/pizza-with-3n-slices/description/)

* algorithms
* Hard (53.82%)
* Likes:    1140
* Dislikes: 24
* Testcase Example:  '[1,2,3,4,5,6]'

```md
There is a pizza with 3n slices of varying size, you and your friends will take slices of pizza as follows:

You will pick any pizza slice.
Your friend Alice will pick the next slice in the anti-clockwise direction of your pick.
Your friend Bob will pick the next slice in the clockwise direction of your pick.
Repeat until there are no more slices of pizzas.

Given an integer array slices that represent the sizes of the pizza slices in a clockwise direction, return the maximum possible sum of slice sizes that you can pick.

Example 1:


Input: slices = [1,2,3,4,5,6]
Output: 10
Explanation: Pick pizza slice of size 4, Alice and Bob will pick slices with size 3 and 5 respectively. Then Pick slices with size 6, finally Alice and Bob will pick slice of size 2 and 1 respectively. Total = 4 + 6.

Example 2:


Input: slices = [8,9,8,6,1,1]
Output: 16
Explanation: Pick pizza slice of size 8 in each turn. If you pick slice with size 9 your partners will pick slices of size 8.


Constraints:

3 * n == slices.length
1 <= slices.length <= 500
1 <= slices[i] <= 1000


```

## 中文翻译

3n 块披萨排成环形。每轮你选一块，Alice 和 Bob 分别取逆时针和顺时针相邻的块。求你能获得的披萨大小之和的最大值。

约束：3n == slices.length <= 500, slices[i] <= 1000

## 解题思路

**环形 DP（House Robber II 变形）**

1. 等价于从环形数组中选 n 个不相邻元素使和最大。
2. 环形处理：拆为两个线性问题——不含首元素、不含末元素，取较大值。
3. 线性 DP：dp[i][j] = 前 i 个元素选 j 个不相邻的最大和。
   dp[i][j] = max(dp[i-1][j], dp[i-2][j-1] + arr[i-1])
4. 滚动数组优化空间到 O(k)。时间 O(n * k)。

## Solution

[SourceCode](./solution.js)
