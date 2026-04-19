# [2602] Minimum Operations to Make All Array Elements Equal

## Description

[LeetCode Problem Description](https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal/description/)

* algorithms
* Medium (38.10%)
* Likes:    870
* Dislikes: 29
* Testcase Example:  '[3,1,6,8]\n[1,5]'

```md
You are given an array nums consisting of positive integers.
You are also given an integer array queries of size m. For the ith query, you want to make all of the elements of nums equal to queries[i]. You can perform the following operation on the array any number of times:

Increase or decrease an element of the array by 1.

Return an array answer of size m where answer[i] is the minimum number of operations to make all elements of nums equal to queries[i].
Note that after each query the array is reset to its original state.

Example 1:

Input: nums = [3,1,6,8], queries = [1,5]
Output: [14,10]
Explanation: For the first query we can do the following operations:
- Decrease nums[0] 2 times, so that nums = [1,1,6,8].
- Decrease nums[2] 5 times, so that nums = [1,1,1,8].
- Decrease nums[3] 7 times, so that nums = [1,1,1,1].
So the total number of operations for the first query is 2 + 5 + 7 = 14.
For the second query we can do the following operations:
- Increase nums[0] 2 times, so that nums = [5,1,6,8].
- Increase nums[1] 4 times, so that nums = [5,5,6,8].
- Decrease nums[2] 1 time, so that nums = [5,5,5,8].
- Decrease nums[3] 3 times, so that nums = [5,5,5,5].
So the total number of operations for the second query is 2 + 4 + 1 + 3 = 10.

Example 2:

Input: nums = [2,9,6,3], queries = [10]
Output: [20]
Explanation: We can increase each value in the array to 10. The total number of operations will be 8 + 1 + 4 + 7 = 20.


Constraints:

n == nums.length
m == queries.length
1 <= n, m <= 105
1 <= nums[i], queries[i] <= 109


```

## 题目翻译

给定正整数数组 nums 和查询数组 queries。对每个查询 q，求将 nums 中所有元素变为 q 的最少操作数（每次操作将一个元素 +1 或 -1）。

## 解题思路

**排序 + 前缀和 + 二分查找**

将 nums 排序并计算前缀和。对每个查询 q，二分找到分界点（≤q 和 >q），则：
- 左侧需要增加：q * cnt_left - sum_left
- 右侧需要减少：sum_right - q * cnt_right

总复杂度 O((n+m) log n)。

## Solution

[SourceCode](./solution.js)
