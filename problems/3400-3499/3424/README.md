# [3424] Minimum Cost to Make Arrays Identical

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-cost-to-make-arrays-identical/description/)

* algorithms
* Medium (37.78%)
* Likes:    87
* Dislikes: 13
* Testcase Example:  '[-7,9,5]\n[7,-2,-5]\n2'

```md
You are given two integer arrays arr and brr of length n, and an integer k. You can perform the following operations on arr any number of times:

Split arr into any number of contiguous subarrays and rearrange these subarrays in any order. This operation has a fixed cost of k.

Choose any element in arr and add or subtract a positive integer x to it. The cost of this operation is x.


Return the minimum total cost to make arr equal to brr.

Example 1:

Input: arr = [-7,9,5], brr = [7,-2,-5], k = 2
Output: 13
Explanation:

Split arr into two contiguous subarrays: [-7] and [9, 5] and rearrange them as [9, 5, -7], with a cost of 2.
Subtract 2 from element arr[0]. The array becomes [7, 5, -7]. The cost of this operation is 2.
Subtract 7 from element arr[1]. The array becomes [7, -2, -7]. The cost of this operation is 7.
Add 2 to element arr[2]. The array becomes [7, -2, -5]. The cost of this operation is 2.

The total cost to make the arrays equal is 2 + 2 + 7 + 2 = 13.

Example 2:

Input: arr = [2,1], brr = [2,1], k = 0
Output: 0
Explanation:
Since the arrays are already equal, no operations are needed, and the total cost is 0.


Constraints:

1 <= arr.length == brr.length <= 105
0 <= k <= 2 * 1010
-105 <= arr[i] <= 105
-105 <= brr[i] <= 105


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定 arr 和 brr 两个数组及整数 k。可以花费 k 将 arr 分割成连续子数组并重排，或花费 x 修改单个元素。求使 arr 变为 brr 的最小花费。

## 解题思路

**Approach: 两种策略取最小**

1. 不重排：cost1 = sum(|arr[i] - brr[i]|)
2. 重排（排序后对位匹配）：cost2 = k + sum(|sorted_arr[i] - sorted_brr[i]|)
3. 取 min(cost1, cost2)
4. 时间 O(n log n)，空间 O(n)
