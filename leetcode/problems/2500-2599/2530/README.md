# [2530] Maximal Score After Applying K Operations

## Description

[LeetCode Problem Description](https://leetcode.com/problems/maximal-score-after-applying-k-operations/description/)

* algorithms
* Medium (64.05%)
* Testcase Example:  '[10,10,10,10,10]\n5'

```md
You are given a 0-indexed integer array nums and an integer k. You have a starting score of 0.
In one operation:
choose an index i such that 0
increase your score by nums[i], and
replace nums[i] with ceil(nums[i] / 3).
Return the maximum possible score you can attain after applying exactly k operations.
The ceiling function ceil(val) is the least integer greater than or equal to val.

Example 1:
Input: nums = [10,10,10,10,10], k = 5
Output: 50
Explanation: Apply the operation to each array element exactly once. The final score is 10 + 10 + 10 + 10 + 10 = 50.
Example 2:
Input: nums = [1,10,3,3,3], k = 3
Output: 17
Explanation: You can do the following operations:
Operation 1: Select i = 1, so nums becomes [1,4,3,3,3]. Your score increases by 10.
Operation 2: Select i = 1, so nums becomes [1,2,3,3,3]. Your score increases by 4.
Operation 3: Select i = 2, so nums becomes [1,2,1,3,3]. Your score increases by 3.
The final score is 10 + 4 + 3 = 17.

Constraints:
1
1

```

## 中文翻译

给定一个 0-indexed 整数数组 nums 和一个整数 k。初始分数为 0。
每次操作：
1. 选择一个索引 i，使得 0 <= i < nums.length
2. 将 nums[i] 加到分数中
3. 将 nums[i] 替换为 ceil(nums[i] / 3)
返回恰好执行 k 次操作后能获得的最大分数。

## Approach

贪心 + 最大堆。每次选择当前最大的元素加入分数，然后将其除以 3 取整放回。使用最大堆（JS 中用最小堆取负数模拟）维护当前最大元素，每次取出堆顶操作后放回，重复 k 次。
