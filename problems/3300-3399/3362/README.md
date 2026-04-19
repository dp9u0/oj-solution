# [3362] Zero Array Transformation III

## Description

[LeetCode Problem Description](https://leetcode.com/problems/zero-array-transformation-iii/description/)

* algorithms
* Medium (54.82%)
* Likes:    695
* Dislikes: 126
* Testcase Example:  '[2,0,2]\n[[0,2],[0,2],[1,1]]'

```md
You are given an integer array nums of length n and a 2D array queries where queries[i] = [li, ri].
Each queries[i] represents the following action on nums:

Decrement the value at each index in the range [li, ri] in nums by at most 1.
The amount by which the value is decremented can be chosen independently for each index.

A Zero Array is an array with all its elements equal to 0.
Return the maximum number of elements that can be removed from queries, such that nums can still be converted to a zero array using the remaining queries. If it is not possible to convert nums to a zero array, return -1.

Example 1:

Input: nums = [2,0,2], queries = [[0,2],[0,2],[1,1]]
Output: 1
Explanation:
After removing queries[2], nums can still be converted to a zero array.

Using queries[0], decrement nums[0] and nums[2] by 1 and nums[1] by 0.
Using queries[1], decrement nums[0] and nums[2] by 1 and nums[1] by 0.


Example 2:

Input: nums = [1,1,1,1], queries = [[1,3],[0,2],[1,3],[1,2]]
Output: 2
Explanation:
We can remove queries[2] and queries[3].

Example 3:

Input: nums = [1,2,3,4], queries = [[0,3]]
Output: -1
Explanation:
nums cannot be converted to a zero array even after using all the queries.


Constraints:

1 <= nums.length <= 105
0 <= nums[i] <= 105
1 <= queries.length <= 105
queries[i].length == 2
0 <= li <= ri < nums.length


```

## 中文翻译

给定整数数组 `nums` 和查询数组 `queries`，每个查询 `[li, ri]` 表示可以将区间内每个位置的值最多减 1。

返回最多可以从 queries 中移除多少个查询，使得用剩余查询仍能将 nums 变为全零数组。如果不可能，返回 -1。

## 解题思路

**贪心 + 优先队列（最大堆）：**

1. 按左端点排序查询
2. 从左到右遍历每个位置 i，用差分数组维护当前可用查询数
3. 将所有以 i 为起点的查询的右端点加入最大堆
4. 当前覆盖不够（当前查询数 < nums[i]）时，贪心选择右端点最大的查询来使用（最大堆弹出）
5. 如果堆为空但仍不够，返回 -1
6. 最后统计已使用的查询数，返回 queries.length - used

时间复杂度：O((n + q) log q)，空间复杂度：O(q)

## Solution

[SourceCode](./solution.js)
