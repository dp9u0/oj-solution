# [307] Range Sum Query - Mutable

## Description

[LeetCode Problem Description](https://leetcode.com/problems/range-sum-query-mutable/description/)

* algorithms
* Medium (41.42%)
* Likes:    4863
* Dislikes: 259
* Testcase Example:  '["NumArray","sumRange","update","sumRange"]\n[[[1,3,5]],[0,2],[1,2],[0,2]]'

```md
Given an integer array nums, handle multiple queries of the following types:

Update the value of an element in nums.
Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.

Implement the NumArray class:

NumArray(int[] nums) Initializes the object with the integer array nums.
void update(int index, int val) Updates the value of nums[index] to be val.
int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).


Example 1:

Input
['NumArray', 'sumRange', 'update', 'sumRange']
[[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]
Output
[null, 9, null, 8]
Explanation
NumArray numArray = new NumArray([1, 3, 5]);
numArray.sumRange(0, 2); // return 1 + 3 + 5 = 9
numArray.update(1, 2);   // nums = [1, 2, 5]
numArray.sumRange(0, 2); // return 1 + 2 + 5 = 8


Constraints:

1 <= nums.length <= 3 * 104
-100 <= nums[i] <= 100
0 <= index < nums.length
-100 <= val <= 100
0 <= left <= right < nums.length
At most 3 * 104 calls will be made to update and sumRange.


```

## 中文题目描述

给定一个整数数组 nums，处理以下类型的多个查询:

1. 更新 nums 中的某个元素的值
2. 计算 nums 中指定区间内元素的总和，区间用左右索引 left 和 right 表示，其中 left <= right

实现 NumArray 类：

- NumArray(int[] nums) 用整数数组 nums 初始化对象
- void update(int index, int val) 将 nums[index] 的值更新为 val
- int sumRange(int left, int right) 返回 nums 中索引 left 和索引 right 之间（包含）的元素的总和（即，nums[left] + nums[left + 1] + ... + nums[right]）

示例 1：
输入：
['NumArray', 'sumRange', 'update', 'sumRange']
[[[1, 3, 5]], [0, 2], [1, 2], [0, 2]]
输出：
[null, 9, null, 8]
解释：
NumArray numArray = new NumArray([1, 3, 5]);
numArray.sumRange(0, 2); // 返回 1 + 3 + 5 = 9
numArray.update(1, 2);   // nums = [1, 2, 5]
numArray.sumRange(0, 2); // 返回 1 + 2 + 5 = 8

限制条件：
- 1 <= nums.length <= 3 * 10^4
- -100 <= nums[i] <= 100
- 0 <= index < nums.length
- -100 <= val <= 100
- 0 <= left <= right < nums.length
- 最多调用 3 * 10^4 次 update 和 sumRange 方法

## Solution

[SourceCode](./solution.js)
