# [3638] Maximum Balanced Shipments

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-balanced-shipments/description/)

* algorithms
* Medium (61.38%)
* Likes:    81
* Dislikes: 11
* Testcase Example:  '[2,5,1,4,3]'

```md
You are given an integer array weight of length n, representing the weights of n parcels arranged in a straight line. A shipment is defined as a contiguous subarray of parcels. A shipment is considered balanced if the weight of the last parcel is strictly less than the maximum weight among all parcels in that shipment.
Select a set of non-overlapping, contiguous, balanced shipments such that each parcel appears in at most one shipment (parcels may remain unshipped).
Return the maximum possible number of balanced shipments that can be formed.

Example 1:

Input: weight = [2,5,1,4,3]
Output: 2
Explanation:
We can form the maximum of two balanced shipments as follows:

Shipment 1: [2, 5, 1]

Maximum parcel weight = 5
Last parcel weight = 1, which is strictly less than 5. Thus, it&#39;s balanced.


Shipment 2: [4, 3]

Maximum parcel weight = 4
Last parcel weight = 3, which is strictly less than 4. Thus, it&#39;s balanced.



It is impossible to partition the parcels to achieve more than two balanced shipments, so the answer is 2.

Example 2:

Input: weight = [4,4]
Output: 0
Explanation:
No balanced shipment can be formed in this case:

A shipment [4, 4] has maximum weight 4 and the last parcel&#39;s weight is also 4, which is not strictly less. Thus, it&#39;s not balanced.
Single-parcel shipments [4] have the last parcel weight equal to the maximum parcel weight, thus not balanced.

As there is no way to form even one balanced shipment, the answer is 0.


Constraints:

2 <= n <= 105
1 <= weight[i] <= 109


```

## 中文翻译

给定重量数组 weight。一个"运输"是连续子数组，要求最后一个元素严格小于子数组中的最大值。选择不重叠的运输，使运输数量最大。

## 解题思路

DP + 单调栈。dp[i] 表示前 i 个元素的最大运输数。对每个位置 i（作为运输结尾），用单调递减栈找到左边最近的更大元素位置 p，则合法起始点 j ∈ [0, p]，贡献 pm[p]+1（pm 为 dp 的前缀最大值）。

## Solution

[SourceCode](./solution.js)
