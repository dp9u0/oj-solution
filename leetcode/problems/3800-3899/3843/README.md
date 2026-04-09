# [3843] First Element with Unique Frequency

## Description

[LeetCode Problem Description](https://leetcode.com/problems/first-element-with-unique-frequency/description/)

* algorithms
* Medium (69.98%)
* Testcase Example:  '[20,10,30,30]'

```md
You are given an integer array nums.
Return an integer denoting the first element (scanning from left to right) in nums whose frequency is unique. That is, no other integer appears the same number of times in nums. If there is no such element, return -1.

Example 1:
Input: nums = [20,10,30,30]
Output: 30
Explanation:
20 appears once.
10 appears once.
30 appears twice.
The frequency of 30 is unique because no other integer appears exactly twice.
Example 2:
Input: nums = [20,20,10,30,30,30]
Output: 20
Explanation:
20 appears twice.
10 appears once.
30 appears 3 times.
The frequency of 20, 10, and 30 are unique. The first element that has unique frequency is 20.
Example 3:
Input: nums = [10,10,20,20]
Output: -1
Explanation:
10 appears twice.
20 appears twice.
No element has a unique frequency.

Constraints:
1
1

```

## 翻译

给你一个整数数组 `nums`。返回 `nums` 中第一个（从左到右扫描）频率唯一的元素。也就是说，没有其他整数出现相同的次数。如果没有这样的元素，返回 -1。

## Approach

1. 使用 Map 统计每个元素的出现次数（频率）
2. 使用 Map 统计每个频率被多少个不同元素使用
3. 从左到右遍历原数组，找到第一个频率只出现 1 次的元素并返回
4. 时间复杂度 O(n)，空间复杂度 O(n)

## Solution

[SourceCode](./solution.js)
