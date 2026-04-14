# [3159] Find Occurrences of an Element in an Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-occurrences-of-an-element-in-an-array/description/)

* algorithms
* Medium (73.29%)
* Likes:    185
* Dislikes: 26
* Testcase Example:  '[1,3,1,7]\n[1,3,2,4]\n1'

```md
You are given an integer array nums, an integer array queries, and an integer x.
For each queries[i], you need to find the index of the queries[i]th occurrence of x in the nums array. If there are fewer than queries[i] occurrences of x, the answer should be -1 for that query.
Return an integer array answer containing the answers to all queries.

Example 1:

Input: nums = [1,3,1,7], queries = [1,3,2,4], x = 1
Output: [0,-1,2,-1]
Explanation:

For the 1st query, the first occurrence of 1 is at index 0.
For the 2nd query, there are only two occurrences of 1 in nums, so the answer is -1.
For the 3rd query, the second occurrence of 1 is at index 2.
For the 4th query, there are only two occurrences of 1 in nums, so the answer is -1.


Example 2:

Input: nums = [1,2,3], queries = [10], x = 5
Output: [-1]
Explanation:

For the 1st query, 5 doesn&#39;t exist in nums, so the answer is -1.



Constraints:

1 <= nums.length, queries.length <= 105
1 <= queries[i] <= 105
1 <= nums[i], x <= 104


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定数组 nums、查询数组 queries 和整数 x。对每个 queries[i]，找 x 在 nums 中第 queries[i] 次出现的下标，不够则返回 -1。

## 解题思路

预处理：遍历 nums 收集所有等于 x 的下标到一个数组 pos。对每个查询，若 queries[i] <= pos.length 则返回 pos[queries[i]-1]，否则 -1。O(n+q)。
