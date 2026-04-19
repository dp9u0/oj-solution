# [2382] Maximum Segment Sum After Removals

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximum-segment-sum-after-removals/description/)

* algorithms
* Hard (49.53%)
* Likes:    500
* Dislikes: 6
* Testcase Example:  '[1,2,5,6,1]\n[0,3,2,4,1]'

```md
You are given two 0-indexed integer arrays nums and removeQueries, both of length n. For the ith query, the element in nums at the index removeQueries[i] is removed, splitting nums into different segments.
A segment is a contiguous sequence of positive integers in nums. A segment sum is the sum of every element in a segment.
Return an integer array answer, of length n, where answer[i] is the maximum segment sum after applying the ith removal.
Note: The same index will not be removed more than once.

Example 1:

Input: nums = [1,2,5,6,1], removeQueries = [0,3,2,4,1]
Output: [14,7,2,2,0]
Explanation: Using 0 to indicate a removed element, the answer is as follows:
Query 1: Remove the 0th element, nums becomes [0,2,5,6,1] and the maximum segment sum is 14 for segment [2,5,6,1].
Query 2: Remove the 3rd element, nums becomes [0,2,5,0,1] and the maximum segment sum is 7 for segment [2,5].
Query 3: Remove the 2nd element, nums becomes [0,2,0,0,1] and the maximum segment sum is 2 for segment [2].
Query 4: Remove the 4th element, nums becomes [0,2,0,0,0] and the maximum segment sum is 2 for segment [2].
Query 5: Remove the 1st element, nums becomes [0,0,0,0,0] and the maximum segment sum is 0, since there are no segments.
Finally, we return [14,7,2,2,0].
Example 2:

Input: nums = [3,2,11,1], removeQueries = [3,2,1,0]
Output: [16,5,3,0]
Explanation: Using 0 to indicate a removed element, the answer is as follows:
Query 1: Remove the 3rd element, nums becomes [3,2,11,0] and the maximum segment sum is 16 for segment [3,2,11].
Query 2: Remove the 2nd element, nums becomes [3,2,0,0] and the maximum segment sum is 5 for segment [3,2].
Query 3: Remove the 1st element, nums becomes [3,0,0,0] and the maximum segment sum is 3 for segment [3].
Query 4: Remove the 0th element, nums becomes [0,0,0,0] and the maximum segment sum is 0, since there are no segments.
Finally, we return [16,5,3,0].


Constraints:

n == nums.length == removeQueries.length
1 <= n <= 105
1 <= nums[i] <= 109
0 <= removeQueries[i] < n
All the values of removeQueries are unique.


```

## 中文翻译

给定数组 nums 和 removeQueries，第 i 次操作移除 nums[removeQueries[i]] 处的元素，将数组分成不同段。返回每次移除后的最大段和。

约束：n <= 10^5, nums[i] <= 10^9

## 解题思路

**逆向并查集**

1. 正向删除难以维护最大段和，改为逆向：从全部删除的状态开始，逐个恢复元素。
2. 初始时所有位置都是"已删除"的，没有任何段。
3. 逆向遍历 removeQueries（从最后一个到第一个），每次恢复一个位置：
   - 检查左边和右边是否已有段，用并查集合并。
   - 维护每段的和，用最大堆或排序结构追踪最大值。
4. 答案逆向存储后翻转。

## Solution

[SourceCode](./solution.js)
