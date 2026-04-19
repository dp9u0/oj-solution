# [2007] Find Original Array From Doubled Array

## Description

[LeetCode Problem Description](https://leetcode.com/problems/find-original-array-from-doubled-array/description/)

* algorithms
* Medium (40.78%)
* Likes:    2567
* Dislikes: 120
* Testcase Example:  '[1,3,4,2,6,8]'

```md
An integer array original is transformed into a doubled array changed by appending twice the value of every element in original, and then randomly shuffling the resulting array.
Given an array changed, return original if changed is a doubled array. If changed is not a doubled array, return an empty array. The elements in original may be returned in any order.

Example 1:

Input: changed = [1,3,4,2,6,8]
Output: [1,3,4]
Explanation: One possible original array could be [1,3,4]:
- Twice the value of 1 is 1 * 2 = 2.
- Twice the value of 3 is 3 * 2 = 6.
- Twice the value of 4 is 4 * 2 = 8.
Other original arrays could be [4,3,1] or [3,1,4].

Example 2:

Input: changed = [6,3,0,1]
Output: []
Explanation: changed is not a doubled array.

Example 3:

Input: changed = [1]
Output: []
Explanation: changed is not a doubled array.


Constraints:

1 <= changed.length <= 105
0 <= changed[i] <= 105


```

## Solution

[SourceCode](./solution.js)

## 题目翻译

给定一个数组 changed，判断它是否是由某个原数组 original 将每个元素翻倍后拼接并打乱得到的。如果是，返回 original；否则返回空数组。

## 解题思路

**排序 + 哈希计数**

1. 如果 changed 长度为奇数，直接返回 []
2. 统计每个值的频次，按值从小到大排序
3. 从小到大遍历，对于每个值 v，需要有 count[v*2] >= count[v]
4. 消耗 count[v*2] -= count[v]，v 加入结果
5. 特殊处理 0：0 的配对是自身，需要偶数个

时间复杂度 O(n log n)，空间复杂度 O(n)。
