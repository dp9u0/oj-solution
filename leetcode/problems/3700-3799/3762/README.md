# [3762] Minimum Operations to Equalize Subarrays

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-equalize-subarrays/description/)

* algorithms
* Hard (19.71%)
* Likes:    50
* Dislikes: 3
* Testcase Example:  '[1,4,7]\n3\n[[0,1],[0,2]]'

```md
You are given an integer array nums and an integer k.
In one operation, you can increase or decrease any element of nums by exactly k.
You are also given a 2D integer array queries, where each queries[i] = [li, ri].
For each query, find the minimum number of operations required to make all elements in the subarray nums[li..ri] equal. If it is impossible, the answer for that query is -1.
Return an array ans, where ans[i] is the answer for the ith query.

Example 1:

Input: nums = [1,4,7], k = 3, queries = [[0,1],[0,2]]
Output: [1,2]
Explanation:
One optimal set of operations:



i
[li, ri]
nums[li..ri]
Possibility
Operations
Final
nums[li..ri]
ans[i]




0
[0, 1]
[1, 4]
Yes
nums[0] + k = 1 + 3 = 4 = nums[1]
[4, 4]
1


1
[0, 2]
[1, 4, 7]
Yes
nums[0] + k = 1 + 3 = 4 = nums[1]
nums[2] - k = 7 - 3 = 4 = nums[1]
[4, 4, 4]
2



Thus, ans = [1, 2].

Example 2:

Input: nums = [1,2,4], k = 2, queries = [[0,2],[0,0],[1,2]]
Output: [-1,0,1]
Explanation:
One optimal set of operations:



i
[li, ri]
nums[li..ri]
Possibility
Operations
Final
nums[li..ri]
ans[i]


0
[0, 2]
[1, 2, 4]
No
-
[1, 2, 4]
-1


1
[0, 0]
[1]
Yes
Already equal
[1]
0


2
[1, 2]
[2, 4]
Yes
nums[1] + k = 2 + 2 = 4 = nums[2]
[4, 4]
1



Thus, ans = [-1, 0, 1].


Constraints:

1 <= n == nums.length <= 4 &times; 104
1 <= nums[i] <= 109​​​​​​​
1 <= k <= 109
1 <= queries.length <= 4 &times; 104
​​​​​​​queries[i] = [li, ri]
0 <= li <= ri <= n - 1


```

## 题目翻译

给定数组 nums、整数 k 和 queries。每次操作可将元素 ±k。对每个查询 [l, r]，求使子数组 nums[l..r] 所有元素相等的最少操作次数，不可能则返回 -1。

## 解题思路

**可持久化线段树（主席树）+ 中位数**

关键观察：
1. 两元素能变为相等 ⟺ 它们对 k 取余相同。先检查子数组内所有元素余数是否一致。
2. 目标值 T 应为中位数（使绝对偏差之和最小）。每个元素的操作次数 = |nums[i] - T| / k。
3. 总代价 = 中位数左侧元素之和的补 + 右侧元素之和的补。

实现：
- 前缀和 O(1) 检查余数一致性
- 主席树 O(log n) 查询区间第 k 小（中位数）和区间前缀和（计数+求和）
- 每次查询 O(log n)

## Solution

[SourceCode](./solution.js)
