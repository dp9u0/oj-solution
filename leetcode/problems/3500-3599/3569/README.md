# [3569] Maximize Count of Distinct Primes After Split

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximize-count-of-distinct-primes-after-split/description/)

* algorithms
* Hard (18.55%)
* Likes:    26
* Dislikes: 7
* Testcase Example:  '[2,1,3,1,2]\n[[1,2],[3,3]]'

```md
You are given an integer array nums having length n and a 2D integer array queries where queries[i] = [idx, val].
For each query:

Update nums[idx] = val.
Choose an integer k with 1 <= k < n to split the array into the non-empty prefix nums[0..k-1] and suffix nums[k..n-1] such that the sum of the counts of distinct prime values in each part is maximum.

Note: The changes made to the array in one query persist into the next query.
Return an array containing the result for each query, in the order they are given.

Example 1:

Input: nums = [2,1,3,1,2], queries = [[1,2],[3,3]]
Output: [3,4]
Explanation:

Initially nums = [2, 1, 3, 1, 2].
After 1st query, nums = [2, 2, 3, 1, 2]. Split nums into [2] and [2, 3, 1, 2]. [2] consists of 1 distinct prime and [2, 3, 1, 2] consists of 2 distinct primes. Hence, the answer for this query is 1 + 2 = 3.
After 2nd query, nums = [2, 2, 3, 3, 2]. Split nums into [2, 2, 3] and [3, 2] with an answer of 2 + 2 = 4.
The output is [3, 4].


Example 2:

Input: nums = [2,1,4], queries = [[0,1]]
Output: [0]
Explanation:

Initially nums = [2, 1, 4].
After 1st query, nums = [1, 1, 4]. There are no prime numbers in nums, hence the answer for this query is 0.
The output is [0].



Constraints:

2 <= n == nums.length <= 5 * 104
1 <= queries.length <= 5 * 104
1 <= nums[i] <= 105
0 <= queries[i][0] < nums.length
1 <= queries[i][1] <= 105


```

## 翻译

给定数组 nums 和查询 [idx, val]（每次更新 nums[idx]=val），每次更新后求：将数组分成非空前缀和后缀，使得两部分中不同质数个数之和最大。

## 解题思路

**关键转化**：对于分割点 k，答案 = 总不同质数数 + 重叠数(k)。

重叠数(k) = 在前后缀中都出现的质数个数 = 满足 first[p] < k <= last[p] 的质数 p 的个数。

这等价于区间覆盖问题：每个出现 ≥2 次的质数 p 贡献区间 [first[p]+1, last[p]]，求被最多区间覆盖的点。

**数据结构**：
- 线段树（带懒标记）：支持区间加、全局最大值查询
- 每个质数维护有序位置数组（二分插入/删除）

每次更新影响最多两个质数的区间，线段树操作 O(log n)。

## Solution

[SourceCode](./solution.js)
